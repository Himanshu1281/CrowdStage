import Navbar from '../components/Navbar';
import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <Navbar />
      
      {/* Hero Section */}
      <section className="container" style={{ padding: '8rem 2rem', textAlign: 'center' }}>
        <h1 className="animate-fade-in" style={{ fontSize: '4rem', fontWeight: 800, marginBottom: '1.5rem', lineHeight: 1.1 }}>
          Fund the Events <br />
          <span className="gradient-text">You Want to See</span>
        </h1>
        <p className="animate-fade-in" style={{ fontSize: '1.25rem', color: '#94a3b8', maxWidth: '600px', margin: '0 auto 3rem', animationDelay: '0.1s' }}>
          CrowdStage is the hyper-local platform where fans pledge tickets to make their dream events happen. No risk, just pure entertainment.
        </p>
        <div className="animate-fade-in" style={{ display: 'flex', gap: '1rem', justifyContent: 'center', animationDelay: '0.2s' }}>
          <Link href="/explore" className="btn btn-primary" style={{ fontSize: '1.1rem', padding: '1rem 2rem' }}>
            Find Events
          </Link>
          <Link href="/auth/signup" className="btn btn-outline" style={{ fontSize: '1.1rem', padding: '1rem 2rem' }}>
            Create Event
          </Link>
        </div>
      </section>

      {/* Features Grid */}
      <section style={{ background: 'var(--card-bg)', padding: '6rem 0' }}>
        <div className="container">
          <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '4rem' }}>Why CrowdStage?</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            
            <div className="card">
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--primary)' }}>Risk-Free Planning</h3>
              <p style={{ color: '#94a3b8', lineHeight: 1.6 }}>
                Organizers only host if the funding goal is met. Attendees only pay if the event is confirmed.
              </p>
            </div>

            <div className="card">
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--secondary)' }}>Hyper-Local Discovery</h3>
              <p style={{ color: '#94a3b8', lineHeight: 1.6 }}>
                Find pop-up gigs, workshops, and rooftop parties happening right in your neighborhood.
              </p>
            </div>

            <div className="card">
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--accent)' }}>Live Updates</h3>
              <p style={{ color: '#94a3b8', lineHeight: 1.6 }}>
                Watch the funding bar fill up in real-time. Get instant notifications when an event is confirmed.
              </p>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
