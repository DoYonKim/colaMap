import { Router } from 'express';

const route = Router();

export default (app:Router)=> {
    
    /**
     * @swagger
     * tags:
     *   name: user
     *   description: user router
     */
    app.use('/users', route);

    /**
     * @swagger
     *  /auth/test:
     *   get:
     *      summary: test server
     *      tags: [user]
     */
    route.get('/test', (req,res) => {
        return res.send('Server is on test now!');
    });
}