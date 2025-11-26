'use client';

import { useState } from 'react';
import Navbar from '../../../components/Navbar';

export default function EventPage({ params }: { params: { id: string } }) {
  const [loading, setLoading] = useState(false);

  const handlePledge = async () => {
    setLoading(true);
    try {
      // Mock API call
      // const res = await fetch('http://localhost:3001/payments/initiate', ...);
      // const data = await res.json();
      // window.location.href = data.payment_url;
      
      console.log('Initiating payment for event:', params.id);
      setTimeout(() => {
        alert('Redirecting to Easebuzz...');
        setLoading(false);
      }, 1000);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  return (
    <main>
      <Navbar />
      <div className="container" style={{ padding: '4rem 2rem' }}>
        <div className="card" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div style={{ height: '300px', background: '#334155', borderRadius: '1rem', marginBottom: '2rem' }} />
          <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Rooftop Jazz Night</h1>
          <p style={{ color: '#94a3b8', fontSize: '1.2rem', marginBottom: '2rem' }}>
            Experience an evening of smooth jazz under the stars.
          </p>
          
          <div style={{ background: '#0f172a', padding: '2rem', borderRadius: '1rem', border: '1px solid var(--card-border)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
              <span style={{ color: '#94a3b8' }}>Funding Goal</span>
              <span style={{ fontWeight: 'bold' }}>$5,000</span>
            </div>
            <div style={{ width: '100%', height: '10px', background: '#334155', borderRadius: '5px', marginBottom: '2rem' }}>
              <div style={{ width: '75%', height: '100%', background: 'var(--primary)', borderRadius: '5px' }} />
            </div>
            
            <button 
              onClick={handlePledge} 
              className="btn btn-primary" 
              style={{ width: '100%', fontSize: '1.2rem' }}
              disabled={loading}
            >
              {loading ? 'Processing...' : 'Pledge $45.00'}
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
