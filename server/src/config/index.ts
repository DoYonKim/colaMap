import 'dotenv/config';

export default {
    
    port: parseInt(<string>process.env.PORT, 10),

    api: {
        prefix: '/api',
    },
}