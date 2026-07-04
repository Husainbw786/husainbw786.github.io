import { TechIcon } from './shared';

const STACK = [
  'Python', 'Node.js', 'TypeScript', 'FastAPI', 'LangChain', 'LangGraph', 'OpenAI',
  'Anthropic', 'HuggingFace', 'MCP', 'MongoDB', 'PostgreSQL', 'Redis', 'Docker', 'Git',
];

const Row = ({ hidden }: { hidden?: boolean }) => (
  <div
    className="mono"
    aria-hidden={hidden}
    style={{ display: 'flex', gap: 42, paddingRight: 42, fontSize: 15, color: 'var(--mut)', whiteSpace: 'nowrap' }}
  >
    {STACK.map((n) => (
      <span key={n} style={{ display: 'inline-flex', alignItems: 'center', gap: 12 }}>
        <TechIcon name={n} size={20} />
        {n}
        <span style={{ color: 'var(--acc)', marginLeft: 6 }}>/</span>
      </span>
    ))}
  </div>
);

const Marquee = () => (
  <section
    style={{
      overflow: 'hidden',
      padding: '18px 0',
      borderTop: '1px solid var(--bd)',
      borderBottom: '1px solid var(--bd)',
      background: 'color-mix(in oklab,var(--panel) 60%,transparent)',
    }}
  >
    <div style={{ display: 'flex', width: 'max-content', animation: 'marq 32s linear infinite' }}>
      <Row />
      <Row hidden />
    </div>
  </section>
);

export default Marquee;
