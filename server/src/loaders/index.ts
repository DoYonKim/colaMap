import express from 'express';

import expressLoader from './loaders/expressLoader';
import swaggerLoader from './loaders/swaggerLoader';
import mongooseLoader from './loaders/moongooseLoader';

export default async (app: express.Application) => {

    await mongooseLoader();
    await swaggerLoader(app);
    await expressLoader(app);
}