/**
 * @swagger
 *  components:
 *    schemas:
 *      User:
 *        type: object
 *        required:
 *          - name
 *          - email
 *        properties:
 *          name:
 *            type: string
 *          email:
 *            type: string
 *            format: email
 *            description: Email
 *        example:
 *           name: user name
 *           email: test@gmail.com
 */

import moment from 'moment';
import mongoose from 'mongoose';

//Create Schema
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    register_date: {
        type: Date,
        default: moment().format("YYYY-MM-DD hh:mm:ss"),
    }
});

const user = mongoose.model("user", userSchema);

export default user;