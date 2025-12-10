import React, { useState } from 'react';
import Reports from './components/Reports';
import { User, LogOut, QrCode, FileText, BadgeCheck } from 'lucide-react';

function App() {
  const [activeTab, setActiveTab] = useState('reports');

  // Mock User Data (Simulating a logged-in Professor)
  const user = {
    name: "Prof. Alejandro Magno",
    role: "Profesor",
    email: "amagno@campus360.edu"
  };

  const tabs = [
    { id: 'credential', label: 'Credencial Digital', icon: <BadgeCheck size={18} /> },
    { id: 'generate-qr', label: 'Generar QR', icon: <QrCode size={18} /> },
    { id: 'reports', label: 'Reportes de Asistencia', icon: <FileText size={18} /> },
  ];

  return (
    <div className="dashboard-container">
      {/* Header */}
      <div className="dashboard-header">
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div style={{
            width: '48px', height: '48px', borderRadius: '50%',
            background: '#e0e7ff', display: 'flex', alignItems: 'center',
            justifyContent: 'center', color: '#4f46e5'
          }}>
            <User size={24} />
          </div>
          <div>
            <h2 style={{ fontSize: '1.25rem', fontWeight: '700' }}>{user.name}</h2>
            <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
              <span style={{ color: '#64748b', fontSize: '0.875rem' }}>{user.email}</span>
              <span className="badge badge-blue">{user.role}</span>
            </div>
          </div>
        </div>

        <button className="btn btn-secondary" style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
          <LogOut size={16} />
          <span>Cerrar Sesión</span>
        </button>
      </div>

      {/* Tabs Navigation */}
      <div className="tabs">
        {tabs.map(tab => (
          <button
            key={tab.id}
            className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
            style={{ display: 'flex', gap: '8px', alignItems: 'center' }}
          >
            {tab.icon}
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="tab-content">
        {activeTab === 'reports' && <Reports />}

        {activeTab === 'credential' && (
          <div style={{ textAlign: 'center', padding: '40px' }}>
            <h3 style={{ marginBottom: '16px' }}>Mi Credencial Digital</h3>
            <p style={{ color: '#64748b' }}>Aquí aparecería tu credencial QR personal.</p>
            {/* Placeholder for visual consistency */}
            <div style={{
              width: '300px', height: '180px', margin: '20px auto',
              background: 'linear-gradient(135deg, #4f46e5, #6366f1)',
              borderRadius: '16px', color: 'white', display: 'flex',
              alignItems: 'center', justifyContent: 'center'
            }}>
              <span style={{ fontSize: '24px', opacity: 0.8 }}>[VISTA SIMULADA]</span>
            </div>
          </div>
        )}

        {activeTab === 'generate-qr' && (
          <div style={{ padding: '20px' }}>
            <h3>Generar QR de Ubicación</h3>
            <p style={{ color: '#64748b', marginBottom: '24px' }}>Crea códigos QR para aulas y laboratorios.</p>

            <div className="stat-card" style={{ maxWidth: '400px', margin: '0 0' }}>
              <input
                type="text"
                placeholder="Ej: AULA-101"
                className="filter-select"
                style={{ width: '100%', marginBottom: '16px' }}
              />
              <button className="btn btn-primary" style={{ width: '100%' }}>Generar Código</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
