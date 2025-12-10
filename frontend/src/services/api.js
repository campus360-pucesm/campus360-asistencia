import axios from 'axios';

const API_URL = 'http://localhost:3000/api/attendance';

export const scanQR = async (userId, locationCode) => {
    try {
        const response = await axios.post(`${API_URL}/scan`, {
            userId,
            locationCode,
            timestamp: new Date().toISOString()
        });
        return response.data;
    } catch (error) {
        console.error('Error scanning QR:', error);
        throw error;
    }
};

export const getReports = async () => {
    try {
        const response = await axios.get(`${API_URL}/reports`);
        return response.data;
    } catch (error) {
        console.error('Error fetching reports:', error);
        throw error;
    }
};
