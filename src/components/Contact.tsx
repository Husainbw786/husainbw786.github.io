import { usePortfolio } from '@/context/PortfolioContext';

const Contact = () => {
  const { data } = usePortfolio();
  const email = data?.personal.email ?? 'husainbw123@gmail.com';
  const linkedin = data?.personal.socials.find((s) => s.label === 'LinkedIn')?.href;
  const resume = data?.personal.resume_url;
  const intro = data?.contact.intro ?? '';

  return (
    <section
      id="contact"
      className="wrap"
      style={{ paddingTop: 'clamp(60px,10vh,120px)', paddingBottom: 'clamp(80px,12vh,140px)', borderTop: '1px solid var(--bd)', textAlign: 'center' }}
    >
      <div className="mono" style={{ fontSize: 13, color: 'var(--acc)', marginBottom: 22 }}>{'// 05 — let\'s build'}</div>
      <h2 style={{ fontSize: 'clamp(42px,8vw,104px)', lineHeight: 0.95, letterSpacing: '-.03em', fontWeight: 600 }}>
        Got something<br />in mind<span style={{ color: 'var(--acc)' }}>?</span>
      </h2>
      <p style={{ margin: '26px auto 0', maxWidth: '28em', fontSize: 'clamp(15px,1.6vw,18px)', color: 'var(--mut)', lineHeight: 1.6 }}>
        {intro}
      </p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14, justifyContent: 'center', marginTop: 38 }}>
        <a href={`mailto:${email}`} className="btn-primary">Say hello →</a>
        {linkedin && (
          <a href={linkedin} target="_blank" rel="noopener noreferrer" className="btn-ghost">LinkedIn</a>
        )}
        {resume && (
          <a href={resume} target="_blank" rel="noopener noreferrer" className="btn-ghost">Resume</a>
        )}
      </div>
      <div className="mono" style={{ marginTop: 34, fontSize: 13, color: 'var(--mut)', display: 'flex', flexWrap: 'wrap', gap: 22, justifyContent: 'center' }}>
        <span>{email}</span>
        {data?.contact.phone && <span>{data.contact.phone}</span>}
        {data?.contact.location && <span>{data.contact.location}</span>}
      </div>
    </section>
  );
};

export default Contact;
