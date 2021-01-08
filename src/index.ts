import { createServer, ServerOptions } from 'spdy';
import { readFileSync } from 'fs';
import { application } from './application';


/* Https certificate */
const options: ServerOptions = {
    key:  readFileSync(`${__dirname}/../cert/private.key`),
    ca:   readFileSync(`${__dirname}/../cert/ca_bundle.crt`),
    cert: readFileSync(`${__dirname}/../cert/certificate.crt`)
}

/* Dev Port (back-door) */
const PORT = 3000;
application.listen(PORT, '0.0.0.0', () => {
    console.log(`server start on http://localhost:${PORT}`)
})

/* For user */
createServer(options, application).listen(443, '0.0.0.0', () => {
    console.log(`server start on https://localhost:${PORT}`)
});

