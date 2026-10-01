import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const DAVID_EMAIL = 'davehrenfe@gmail.com';
const FROM_EMAIL = process.env.RESEND_FROM_EMAIL ?? 'onboarding@resend.dev';

const PAIN_LABELS: Record<string, string> = {
  reportes: 'Reportes manuales y análisis de datos',
  preguntas: 'Preguntas repetitivas al equipo',
  clientes: 'Seguimiento de clientes o ventas',
  coordinacion: 'Coordinación de tareas y proyectos',
  presentaciones: 'Preparar presentaciones e informes',
  informacion: 'Información dispersa entre sistemas',
};

const SIZE_LABELS: Record<string, string> = {
  '10-50': '10–50 personas',
  '50-200': '50–200 personas',
  '200+': 'Más de 200 personas',
};

const URGENCY_LABELS: Record<string, string> = {
  ahora: 'Necesita resolver esto ya',
  evaluando: 'Evaluando opciones para los próximos meses',
  explorando: 'Solo explorando',
};

function leadEmail(name: string, pain: string, urgency: string): string {
  const firstName = name.split(' ')[0];
  const painLabel = PAIN_LABELS[pain] ?? pain;

  if (urgency === 'ahora') {
    return `<p>Hola ${firstName},</p>
<p>Recibí tu mensaje. Vi que tienes urgencia real por resolver <strong>${painLabel}</strong> — es exactamente el tipo de problema que trabajo.</p>
<p>Te contactaré en las próximas horas para coordinar una llamada breve y entender tu situación en detalle.</p>
<p>Saludos,<br/>David Ehrenfeld<br/>Dieligen Consulting</p>`;
  }

  if (urgency === 'evaluando') {
    return `<p>Hola ${firstName},</p>
<p>Gracias por tomarte el tiempo. Con base en tu situación — <strong>${painLabel}</strong> — puedo darte ideas concretas antes de que tomes cualquier decisión.</p>
<p>Me pondré en contacto pronto para conversar sin presiones.</p>
<p>Saludos,<br/>David Ehrenfeld<br/>Dieligen Consulting</p>`;
  }

  return `<p>Hola ${firstName},</p>
<p>Gracias por el interés. Si en algún momento el tema de <strong>${painLabel}</strong> se vuelve más urgente, aquí estaré.</p>
<p>Cualquier pregunta, solo responde este correo.</p>
<p>Saludos,<br/>David Ehrenfeld<br/>Dieligen Consulting</p>`;
}

function notificationEmail(data: {
  name: string;
  email: string;
  size: string;
  pain: string;
  urgency: string;
}): string {
  const urgencyBadge =
    data.urgency === 'ahora'
      ? '<span style="color:#e07b39;font-weight:bold">🔥 URGENTE</span>'
      : data.urgency === 'evaluando'
      ? '<span style="color:#f0c060">TIBIO</span>'
      : '<span style="color:#888">explorando</span>';

  return `<h2>Nuevo lead calificado ${urgencyBadge}</h2>
<table style="border-collapse:collapse;width:100%;max-width:480px">
  <tr><td style="padding:8px 0;color:#888;font-size:13px">Nombre</td><td style="padding:8px 0;font-weight:600">${data.name}</td></tr>
  <tr><td style="padding:8px 0;color:#888;font-size:13px">Email</td><td style="padding:8px 0"><a href="mailto:${data.email}">${data.email}</a></td></tr>
  <tr><td style="padding:8px 0;color:#888;font-size:13px">Tamaño empresa</td><td style="padding:8px 0">${SIZE_LABELS[data.size] ?? data.size}</td></tr>
  <tr><td style="padding:8px 0;color:#888;font-size:13px">Dolor principal</td><td style="padding:8px 0">${PAIN_LABELS[data.pain] ?? data.pain}</td></tr>
  <tr><td style="padding:8px 0;color:#888;font-size:13px">Urgencia</td><td style="padding:8px 0">${URGENCY_LABELS[data.urgency] ?? data.urgency}</td></tr>
  <tr><td style="padding:8px 0;color:#888;font-size:13px">Recibido</td><td style="padding:8px 0">${new Date().toLocaleString('es-CL', { timeZone: 'America/Santiago' })}</td></tr>
</table>`;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') return res.status(405).send('Method Not Allowed');

  const { name, email, size, pain, urgency } = req.body ?? {};

  if (!name || !email || !size || !pain || !urgency) {
    return res.status(400).json({ error: 'Faltan campos requeridos' });
  }

  if (!process.env.RESEND_API_KEY) {
    return res.status(500).json({ error: 'Email service not configured' });
  }

  const [notif, autoReply] = await Promise.all([
    resend.emails.send({
      from: FROM_EMAIL,
      to: DAVID_EMAIL,
      subject: `Nuevo lead: ${name} (${URGENCY_LABELS[urgency] ?? urgency})`,
      html: notificationEmail({ name, email, size, pain, urgency }),
    }),
    resend.emails.send({
      from: FROM_EMAIL,
      to: email,
      subject: 'Recibí tu mensaje — Dieligen Consulting',
      html: leadEmail(name, pain, urgency),
    }),
  ]);

  if (notif.error || autoReply.error) {
    console.error('Resend error:', notif.error ?? autoReply.error);
    return res.status(500).json({ error: 'Error sending email' });
  }

  return res.status(200).json({ ok: true });
}
