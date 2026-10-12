import { createClientFromRequest } from 'npm:@base44/sdk@0.8.52';

const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

export default async function(req) {
  try {
    const base44 = createClientFromRequest(req);
    const { id } = await req.json();
    if (!id) return Response.json({ error: 'id required' }, { status: 400 });
    const a = await base44.asServiceRole.entities.InternApplication.get(id);
    if (!a) return Response.json({ error: 'Not found' }, { status: 404 });
    const attachments = (a.documents || []).slice(0, 5).map((file_url) => ({ file_url, filename: file_url.split('/').pop().replace(/^[a-z0-9]+_/, '') }));
    await base44.asServiceRole.integrations.Core.SendEmail({
      to: 'resolve@changarothchambersbn.com',
      from_name: 'no-reply',
      subject: `Internship Application from ${String(a.name).slice(0, 80)}`,
      body: `<p><strong>Name:</strong> ${esc(a.name)}</p><p><strong>Email:</strong> ${esc(a.email)}</p><p><strong>Education:</strong> ${esc(a.education)}</p><p><strong>Proposed duration:</strong> ${esc(a.duration)}</p><p><strong>Personal statement:</strong><br/>${esc(a.personal_statement).replace(/\n/g, '<br/>')}</p><p><strong>Documents:</strong> ${attachments.length} attached</p>`,
      attachments,
    });
    return Response.json({ ok: true });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}