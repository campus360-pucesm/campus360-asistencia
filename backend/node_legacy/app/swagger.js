const swaggerJsdoc = require('swagger-jsdoc');

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'CAMPUS360 - Attendance Module API',
            version: '1.0.0',
            description: 'API for retrieving access reports and attendance analytics',
        },
        servers: [
            {
                url: 'http://localhost:8004',
                description: 'Development server',
            },
        ],
    },
    apis: ['./app/routers/*.js'], // Path to the API docs
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = swaggerSpec;
