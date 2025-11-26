import Link from 'next/link';

export default function Navbar() {
  return (
    <nav style={{ borderBottom: '1px solid var(--card-border)', backdropFilter: 'blur(10px)', position: 'sticky', top: 0, zIndex: 100 }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '80px' }}>
        <Link href="/" style={{ textDecoration: 'none' }}>
          <span className="gradient-text" style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>CrowdStage</span>
        </Link>
        <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          <Link href="/explore" style={{ color: 'var(--foreground)', textDecoration: 'none' }}>Explore</Link>
          <Link href="/how-it-works" style={{ color: 'var(--foreground)', textDecoration: 'none' }}>How it Works</Link>
          <Link href="/auth/login" className="btn btn-outline" style={{ padding: '0.5rem 1rem' }}>Login</Link>
          <Link href="/auth/signup" className="btn btn-primary" style={{ padding: '0.5rem 1rem' }}>Start Project</Link>
        </div>
      </div>
    </nav>
  );
}
