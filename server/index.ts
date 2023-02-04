import server from './src/server';
import dotenv from 'dotenv';
import { LogError, LogSuccess } from './src/Utils/logger';


// * Configuration the .env file
dotenv.config();

const port = process.env.PORT || 8000;


// * Execute SERVER
server.listen(port, () => {
    LogSuccess(`[SERVER ON]: Running in http://localhost:${port}/api/v1`);
});


// * Control SERVER ERROR
server.on('error', (error) => {
    LogError(`[SERVER ERROR]: ${error}`);
});
