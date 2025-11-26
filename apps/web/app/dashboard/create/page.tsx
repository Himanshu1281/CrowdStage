'use client';

import { useState } from 'react';

export default function CreateEvent() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    date: '',
    location: '',
    fundingGoal: '',
    ticketPrice: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Event Created:', formData);
    // TODO: Call API
  };

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '2rem' }}>Create New Event</h1>
      
      {/* Progress Bar */}
      <div style={{ display: 'flex', gap: '1rem', marginBottom: '3rem' }}>
        {[1, 2, 3].map((s) => (
          <div key={s} style={{ flex: 1, height: '4px', background: s <= step ? 'var(--primary)' : 'var(--card-border)', borderRadius: '2px' }} />
        ))}
      </div>

      <div className="card">
        <form onSubmit={handleSubmit}>
          {step === 1 && (
            <div className="animate-fade-in">
              <h2 style={{ marginBottom: '1.5rem' }}>Basic Details</h2>
              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', color: '#94a3b8' }}>Event Title</label>
                <input
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  style={{ width: '100%', padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid var(--card-border)', background: '#0f172a', color: 'white' }}
                  placeholder="e.g. Rooftop Jazz Night"
                />
              </div>
              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', color: '#94a3b8' }}>Description</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  style={{ width: '100%', padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid var(--card-border)', background: '#0f172a', color: 'white', minHeight: '100px' }}
                  placeholder="Tell people what makes this event special..."
                />
              </div>
              <button type="button" onClick={nextStep} className="btn btn-primary">Next: Location</button>
            </div>
          )}

          {step === 2 && (
            <div className="animate-fade-in">
              <h2 style={{ marginBottom: '1.5rem' }}>Location & Date</h2>
              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', color: '#94a3b8' }}>Date & Time</label>
                <input
                  type="datetime-local"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  style={{ width: '100%', padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid var(--card-border)', background: '#0f172a', color: 'white' }}
                />
              </div>
              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', color: '#94a3b8' }}>Venue Location</label>
                <input
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  style={{ width: '100%', padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid var(--card-border)', background: '#0f172a', color: 'white' }}
                  placeholder="e.g. 123 Main St, New York"
                />
              </div>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <button type="button" onClick={prevStep} className="btn btn-outline">Back</button>
                <button type="button" onClick={nextStep} className="btn btn-primary">Next: Funding</button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="animate-fade-in">
              <h2 style={{ marginBottom: '1.5rem' }}>Funding Goals</h2>
              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', color: '#94a3b8' }}>Funding Goal ($)</label>
                <input
                  type="number"
                  name="fundingGoal"
                  value={formData.fundingGoal}
                  onChange={handleChange}
                  style={{ width: '100%', padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid var(--card-border)', background: '#0f172a', color: 'white' }}
                  placeholder="5000"
                />
              </div>
              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', color: '#94a3b8' }}>Ticket Price ($)</label>
                <input
                  type="number"
                  name="ticketPrice"
                  value={formData.ticketPrice}
                  onChange={handleChange}
                  style={{ width: '100%', padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid var(--card-border)', background: '#0f172a', color: 'white' }}
                  placeholder="50"
                />
              </div>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <button type="button" onClick={prevStep} className="btn btn-outline">Back</button>
                <button type="submit" className="btn btn-primary">Launch Campaign</button>
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
