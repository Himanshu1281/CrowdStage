export default function Dashboard() {
  return (
    <div>
      <header style={{ marginBottom: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 'bold' }}>Dashboard Overview</h1>
        <button className="btn btn-primary">New Event</button>
      </header>

      {/* Stats Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
        <div className="card">
          <h3 style={{ color: '#94a3b8', fontSize: '0.9rem', marginBottom: '0.5rem' }}>Total Revenue</h3>
          <p style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--success)' }}>$12,450</p>
        </div>
        <div className="card">
          <h3 style={{ color: '#94a3b8', fontSize: '0.9rem', marginBottom: '0.5rem' }}>Active Events</h3>
          <p style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--primary)' }}>3</p>
        </div>
        <div className="card">
          <h3 style={{ color: '#94a3b8', fontSize: '0.9rem', marginBottom: '0.5rem' }}>Tickets Sold</h3>
          <p style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--accent)' }}>842</p>
        </div>
      </div>

      {/* Recent Activity */}
      <section>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>Recent Activity</h2>
        <div className="card">
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid var(--card-border)', textAlign: 'left' }}>
                <th style={{ padding: '1rem', color: '#94a3b8' }}>Event</th>
                <th style={{ padding: '1rem', color: '#94a3b8' }}>User</th>
                <th style={{ padding: '1rem', color: '#94a3b8' }}>Amount</th>
                <th style={{ padding: '1rem', color: '#94a3b8' }}>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ padding: '1rem' }}>Rooftop Jazz Night</td>
                <td style={{ padding: '1rem' }}>Alice Johnson</td>
                <td style={{ padding: '1rem' }}>$45.00</td>
                <td style={{ padding: '1rem' }}><span style={{ color: 'var(--success)' }}>Completed</span></td>
              </tr>
              <tr>
                <td style={{ padding: '1rem' }}>Tech Workshop</td>
                <td style={{ padding: '1rem' }}>Bob Smith</td>
                <td style={{ padding: '1rem' }}>$120.00</td>
                <td style={{ padding: '1rem' }}><span style={{ color: 'var(--warning)' }}>Pending</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
