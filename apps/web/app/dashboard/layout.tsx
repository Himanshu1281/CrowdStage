import Link from 'next/link';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      {/* Sidebar */}
      <aside style={{ width: '250px', background: 'var(--card-bg)', borderRight: '1px solid var(--card-border)', padding: '2rem' }}>
        <div style={{ marginBottom: '3rem' }}>
          <Link href="/" className="gradient-text" style={{ fontSize: '1.5rem', fontWeight: 'bold', textDecoration: 'none' }}>
            CrowdStage
          </Link>
        </div>
        <nav style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <Link href="/dashboard" style={{ color: 'var(--foreground)', textDecoration: 'none', padding: '0.75rem', borderRadius: '0.5rem', background: 'rgba(255,255,255,0.05)' }}>
            Overview
          </Link>
          <Link href="/dashboard/events" style={{ color: '#94a3b8', textDecoration: 'none', padding: '0.75rem' }}>
            My Events
          </Link>
          <Link href="/dashboard/create" style={{ color: '#94a3b8', textDecoration: 'none', padding: '0.75rem' }}>
            Create Event
          </Link>
          <Link href="/dashboard/settings" style={{ color: '#94a3b8', textDecoration: 'none', padding: '0.75rem' }}>
            Settings
          </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main style={{ flex: 1, padding: '2rem', overflowY: 'auto' }}>
        {children}
      </main>
    </div>
  );
}
