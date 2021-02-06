import { Router } from 'express';

const route = Router();

export default (app:Router)=> {
    
    app.use('/users', route);

    route.get('/test', (req,res) => {
        return res.send('Server is on test now!');
    });
}