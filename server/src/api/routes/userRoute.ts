import { Router } from 'express';
import {getWholeUserList, registUser} from '../../services/userService';

const route = Router();

export default (app:Router)=> {
    
    /**
     * @swagger
     * tags:
     *   name: user
     *   description: user router
     */
    app.use('/user', route);

    /**
     * @swagger
     *  /user/test:
     *   get:
     *      summary: test server
     *      tags: [user]
     */
    route.get('/test', (req,res) => {
        return res.send('Server is on test now!');
    });

    /**
     * @swagger
     *  /user/whole-user-list:
     *    get:
     *      summary: Search every user
     *      tags: [user]
     *      responses:
     *        "200":
     *          description: A user schema
     *          content:
     *            application/json:
     *              schema:
     *                $ref: '#/components/schemas/user'
     */
    route.get('/whole-user-list', getWholeUserList);

    /**
     * @swagger
     *  /user/regist-user:
     *    post:
     *      summary: Regist a new user
     *      tags: [user]
     *      requestBody:
     *        required: true
     *        content:
     *          application/json:
     *            schema:
     *              $ref: '#/components/schemas/user'
     *      responses:
     *        "200":
     *          description: A user schema
     *          content:
     *            application/json:
     *              schema:
     *                $ref: '#/components/schemas/user'
     */
    route.post('/regist-user', registUser);
}