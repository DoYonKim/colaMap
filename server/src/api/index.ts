import { Router } from 'express';
import user from './routes/userRoute';
import location from './routes/locationRoute'
export default () => {
    const app = Router();
    user(app);
    location(app);
    return app;
}