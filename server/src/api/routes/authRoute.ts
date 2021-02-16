import { Router } from 'express';
import {kakaoLogin} from '../../services/authService';

const route = Router();

export default (app:Router)=> {
    
    /**
     * @swagger
     * tags:
     *   name: auth
     *   description: auth router
     */
    app.use('/auth', route);

    /**
     * @swagger
     *  /auth/test:
     *   get:
     *      summary: test server
     *      tags: [auth]
     */
    route.get('/test', (req,res) => {
        return res.send('Auth router is live now.');
    });

    /**
     * @swagger
     *  /auth/kakao-login:
     *    get:
     *      summary: Search every user
     *      tags: [auth]
     *      responses:
     *        "200":
     *          description: A user schema
     *          content:
     *            application/json:
     *              
     */
    route.get('/kakao-login', kakaoLogin);
}