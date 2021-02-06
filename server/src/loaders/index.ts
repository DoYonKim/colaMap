import express from 'express';

import expressLoader from './loaders/expressLoader';
import swaggerLoader from './loaders/swaggerLoader';

export default async (app: express.Application) => {

    await swaggerLoader(app);
    await expressLoader(app);
}