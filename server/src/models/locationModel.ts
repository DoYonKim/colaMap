import moment from 'moment';
import mongoose from 'mongoose';
import {ILocation} from '../interfaces/ILocation'

/**
 * @swagger
 *  components:
 *    schemas:
 *      location:
 *        type: object
 *        required:
 *          - name
 *          - email
 *        properties:
 *          name:
 *            type: string
 *            description: 상호 명
 *          locationId:
 *            type: number
 *            description: 카카오 지도 ID
 *          address:
 *            type: string
 *            description: 전화번호
 *          x:
 *            type: number
 *            description: x 좌표
 *          y:
 *            type: number
 *            description: y 좌표
 *          camp:
 *            type: object
 *            properties:
 *              region:
 *                  type: string
 *              deliver:
 *                  type: object
 *                  properties:
 *                      coca: number
 *                      pepsi: number
  *              takeOut:
 *                  type: object
 *                  properties:
 *                      coca: number
 *                      pepsi: number
  *              toGo:
 *                  type: object
 *                  properties:
 *                      coca: number
 *                      pepsi: number
 *            description: 코카/펩시 콜라 정도
 *          create_date:
 *            type: date
 *            description: 등록된 날자
 *          update_date:
 *            type: date
 *            description: 업데이트 된 날자
 *        example:
 *          name: 호가
 *          locationId: 26640200
 *          address: 제주특별자치도 서귀포시 안덕면 화순리 337-16
 *          x: 126.33581745833496
 *          y: 33.24646746966087
 *          camp:
 *              region: coca
 *              deliver:
 *                  coca: 10
 *                  pepsi: 1
 *              store:
 *                  coca: 10
 *                  pepsi: 1
 *              pickUP:
 *                  coca: 10
 *                  pepsi: 1
 *          create_date: 2021-02-03T18:39:39.000Z
 *          update_date: 2021-02-03T18:39:39.000Z
 */

const locationSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    locationId: {
        type: String,
        required: true,
        unique: true,
    },
    address: {
        type: String,
    },
    x: {
        type: String,
        required: true,
    },
    y: {
        type: String,
        required: true,
    },
    camp: {
        type: Object,
    },
    create_date: {
        type: Date,
        default: moment().format("YYYY-MM-DD hh:mm:ss"),
    },
    update_date: {
        type: Date,
        default: moment().format("YYYY-MM-DD hh:mm:ss"),
    }
});

export default mongoose.model<ILocation & mongoose.Document>('Location', locationSchema);
