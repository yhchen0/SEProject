import { Router } from 'express';
import loki from 'lokijs';

const Database = new loki('database.json');

export const router = Router();

router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    next();
});


router.get('/oauth', (req, res) => {
    const user = Database.addCollection('user');
    user.insertOne({
        test: '100'
    });
})