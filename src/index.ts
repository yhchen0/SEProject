import { createServer } from 'spdy';
import { resolve } from 'path';
import { readFileSync } from 'fs';
import { application } from './application';

const options = {
    key: readFileSync(resolve(__dirname, 'cert', 'server.pem')),
    cert: readFileSync(resolve(__dirname, 'cert', 'server.crt'))
}
const PORT = 3000;
createServer(options, application).listen(PORT, '0.0.0.0', () => {
    console.log(`server start on https://localhost:${PORT}`)
});