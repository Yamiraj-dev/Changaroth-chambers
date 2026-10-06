import { createClientFromRequest } from 'npm:@base44/sdk@0.8.52';

const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

export default async function(req) {
  try {
    const base44 = createClientFromRequest(req);
    const { name, matter, contact } = await req.json();
    if (!name || !matter || !contact) return Response.json({ error: 'All fields are required' }, { status: 400 });
    if (name.length > 120 || matter.length > 2000 || contact.length > 160) {
      return Response.json({ error: 'Input too long' }, { status: 400 });
    }
    await base44.asServiceRole.integrations.Core.SendEmail({
      to: 'resolve@changarothchambersbn.com',
      from_name: 'Changaroth Chambers Website',
      subject: `Consultation request from ${name.slice(0, 80)}`,
      body: `<p><strong>Name:</strong> ${esc(name)}</p><p><strong>Contact:</strong> ${esc(contact)}</p><p><strong>Matter:</strong><br/>${esc(matter).replace(/\n/g, '<br/>')}</p>`,
    });
    return Response.json({ ok: true });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}