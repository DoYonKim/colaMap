import { Router } from 'express';
import {getLocationInfo, registLocation} from '../../services/locationService';

const route = Router();

export default (app:Router)=> {
    
    /**
     * @swagger
     * tags:
     *   name: location
     *   description: user router
     */
    app.use('/location', route);

    /**
     * @swagger
     *  /location/test:
     *   get:
     *      summary: test location router
     *      tags: [location]
     */
    route.get('/test', (req,res) => {
        return res.send('location route is on test now!');
    });

    /**
     * @swagger
     *  /location/location-info:
     *    get:
     *      summary: 장소에 대한 정보를 카카오에서 가져온다.
     *      tags: [location]
     *      responses:
     *        "200":
     *          description: A location schema
     *          content:
     *            application/json:
     *              schema:
     *                $ref: '#/components/schemas/location'
     */
    route.get('/location-info', getLocationInfo);

    /**
     * @swagger
     *  /location/regist-location:
     *    post:
     *      summary: 새로운 장소 추가
     *      tags: [location]
     *      requestBody:
     *        required: true
     *        content:
     *          application/json:
     *            schema:
     *              $ref: '#/components/schemas/location'
     *      responses:
     *        "200":
     *          description: A user schema
     *          content:
     *            application/json:
     *              schema:
     *                $ref: '#/components/schemas/location'
     */
    route.post('/regist-location', registLocation);
}