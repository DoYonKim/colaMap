import 'dotenv/config';

export default {
    
    //server port
    port: parseInt(<string>process.env.PORT, 10),

    //api default path
    api: {
        prefix: '/api',
    },

    //Database info
    databaseURL: <string>process.env.DATABASE_URL,

    //kakao login
    kakao: {
        clientId: process.env.KAKAO_CLIENT_ID,
        clientSecret: process.env.KAKAO_CLIENT_SECRET,
    },
}