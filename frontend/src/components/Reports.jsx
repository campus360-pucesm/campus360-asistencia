import React, { useEffect, useState } from 'react';
import { getReports } from '../services/api'; // Services stay the same
import axios from 'axios';
import { Loader2, Plus } from 'lucide-react';

const Reports = () => {
    const [allLogs, setAllLogs] = useState([]); // Store all logs
    const [filteredLogs, setFilteredLogs] = useState([]); // Store filtered
    const [loading, setLoading] = useState(true);
    const [locationFilter, setLocationFilter] = useState('TODOS');

    // Stats state
    const [stats, setStats] = useState({
        total: 0,
        today: 0,
        punctuality: '98%' // Hardcoded for demo
    });

    useEffect(() => {
        fetchReports();
    }, []);

    // Re-filter when logs or filter changes
    useEffect(() => {
        filterData();
    }, [allLogs, locationFilter]);

    const fetchReports = async () => {
        try {
            setLoading(true);
            const data = await getReports();
            setAllLogs(data);
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    const filterData = () => {
        let result = allLogs;

        // Filter by Location
        if (locationFilter !== 'TODOS') {
            result = result.filter(log => log.location_code === locationFilter);
        }

        setFilteredLogs(result);

        // Update Stats based on result
        const todayStr = new Date().toDateString();
        const todayCount = result.filter(log => new Date(log.timestamp).toDateString() === todayStr).length;

        setStats({
            total: result.length,
            today: todayCount,
            punctuality: '95%' // Mock
        });
    };

    const simulateScan = async () => {
        try {
            const randomUser = '46b573b9-166b-451b-a3ba-518cbebade3b'; // Ariel Ayovi
            // Use locations relevant to the dropdown
            const locations = ['LAB-101', 'AULA-302', 'BIBLIOTECA', 'AUDITORIO'];
            const randomLocation = locations[Math.floor(Math.random() * locations.length)];

            await axios.post('http://localhost:3000/api/attendance/scan', {
                userId: randomUser,
                locationCode: randomLocation,
                timestamp: new Date().toISOString()
            });
            fetchReports(); // Reload data
        } catch (err) {
            alert('Error simulando scan');
        }
    };

    // Get unique locations for dropdown
    const uniqueLocations = ['TODOS', ...new Set(allLogs.map(log => log.location_code))];

    if (loading) return (
        <div style={{ display: 'flex', justifyContent: 'center', padding: '40px' }}>
            <Loader2 className="animate-spin" />
        </div>
    );

    return (
        <div>
            {/* Stats Row */}
            <div className="stats-grid">
                <div className="stat-card">
                    <span className="stat-value">{stats.total}</span>
                    <span className="stat-label">Total Asistencias</span>
                </div>
                <div className="stat-card">
                    <span className="stat-value" style={{ color: '#10b981' }}>{stats.today}</span>
                    <span className="stat-label">Asistencias Hoy</span>
                </div>
                <div className="stat-card">
                    <span className="stat-value" style={{ color: '#6366f1' }}>{stats.punctuality}</span>
                    <span className="stat-label">Puntualidad Promedio</span>
                </div>
            </div>

            {/* Filters & Actions */}
            <div className="filter-bar" style={{ justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                    <label style={{ fontWeight: '600' }}>Filtrar por Aula:</label>
                    <select
                        className="filter-select"
                        value={locationFilter}
                        onChange={(e) => setLocationFilter(e.target.value)}
                    >
                        {uniqueLocations.map(loc => (
                            <option key={loc} value={loc}>{loc}</option>
                        ))}
                    </select>
                </div>

                <button
                    className="btn btn-primary"
                    onClick={simulateScan}
                    style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
                >
                    <Plus size={16} /> Simular Escaneo
                </button>
            </div>

            {/* Table */}
            <div style={{ overflowX: 'auto' }}>
                <table className="reports-table">
                    <thead>
                        <tr>
                            <th>Estudiante</th>
                            <th>Ubicación</th>
                            <th>Fecha</th>
                            <th>Hora</th>
                            <th>Estado</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredLogs.map(log => (
                            <tr key={log.id}>
                                <td style={{ fontWeight: '500' }}>
                                    {log.users?.full_name || "Usuario Desconocido"}
                                </td>
                                <td>
                                    <span className="badge badge-gray">{log.location_code}</span>
                                </td>
                                <td>{new Date(log.timestamp).toLocaleDateString()}</td>
                                <td>{new Date(log.timestamp).toLocaleTimeString()}</td>
                                <td>
                                    {/* Mock logic for status */}
                                    <span className="badge badge-green">Puntual</span>
                                </td>
                            </tr>
                        ))}
                        {filteredLogs.length === 0 && (
                            <tr>
                                <td colSpan="5" style={{ textAlign: 'center', padding: '30px', color: '#94a3b8' }}>
                                    No hay registros para mostrar.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Reports;
