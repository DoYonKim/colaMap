import express from 'express';
// import bodyParser from 'body-parser';
import cors from 'cors';
import routes from '../../api';
import config from '../../config';

export default (app: express.Application ) => {

    app.use(cors());

    app.use(express.json());
    app.use(express.urlencoded({extended:true}));
    
    app.use(config.api.prefix, routes());

};
