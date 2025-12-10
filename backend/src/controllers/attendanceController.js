const { createClient } = require('@supabase/supabase-js');
require('dotenv').config();

// Initialize Supabase client
// Initialize Supabase client
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;

let supabase;

try {
    if (!supabaseUrl || !supabaseUrl.startsWith('http')) {
        throw new Error('Invalid or missing SUPABASE_URL');
    }
    supabase = createClient(supabaseUrl, supabaseKey);
} catch (err) {
    console.warn('⚠️ Warning: Supabase client not initialized correctly.');
    console.warn(`Reason: ${err.message}`);
    console.warn('Please check your .env file. The server will run, but DB operations will fail.');

    // Mock client to prevent crash on property access, but error on usage
    supabase = {
        from: () => ({
            select: () => Promise.resolve({ error: { message: 'Supabase not connected' }, data: null }),
            insert: () => Promise.resolve({ error: { message: 'Supabase not connected' }, data: null })
        })
    };
}

exports.scanQR = async (req, res) => {
    try {
        const { userId, locationCode, timestamp } = req.body;

        if (!userId || !locationCode) {
            return res.status(400).json({ error: 'Missing userId or locationCode' });
        }

        // Mock authentication check would go here in a real integrated scenario
        // For now, we trust the userId sent (or validated by a previous middleware)

        // Insert into access_logs
        const { data, error } = await supabase
            .from('access_logs')
            .insert([
                {
                    user_id: userId,
                    location_code: locationCode,
                    timestamp: timestamp || new Date().toISOString()
                }
            ])
            .select();

        if (error) {
            console.error('Supabase Insert Error:', error);
            throw error;
        }

        res.status(201).json({ message: 'Attendance recorded successfully', record: data[0] });

    } catch (error) {
        console.error('Scan Error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

exports.getReports = async (req, res) => {
    try {
        // Fetch logs with optional filtering (e.g., by user or date)
        // For now, get recent 100 logs
        // Fetch logs with optional filtering (e.g., by user or date)
        // Join with 'users' table to get full_name
        const { data, error } = await supabase
            .from('access_logs')
            .select(`
                *,
                users (
                    full_name
                )
            `)
            .order('timestamp', { ascending: false })
            .limit(50);

        if (error) {
            console.error('Supabase Select Error:', error);
            throw error;
        }

        // Flatten the data structure slightly if needed, or handle in frontend
        res.status(200).json(data);

    } catch (error) {
        console.error('Reports Error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
