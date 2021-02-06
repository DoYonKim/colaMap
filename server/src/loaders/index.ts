import express from 'express';

import expressLoader from './loaders/expressLoader';

export default async (app: express.Application) => {

    console.log("loader Start")
    await expressLoader(app);
}