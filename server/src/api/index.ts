import { Router } from 'express';
import user from './routes/userRoute';

export default () => {
    const app = Router();
    user(app);

    return app;
}