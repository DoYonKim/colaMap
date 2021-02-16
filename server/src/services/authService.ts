import {Request, Response} from 'express';
import {getKakaoTokensFromCode} from './authServiceLogic';

export const kakaoLogin = async (req: Request, res: Response) => {

    try {

        //1. 카카오 토큰 획득
        const kakaoUserCode = <string>req.query.code;
        const tokens = JSON.parse(await getKakaoTokensFromCode(kakaoUserCode));

        res.status(200).json(tokens);

        //2. 카카오 유저 정보 획득
    } catch (e) {
        console.log(e);
        res.status(400).json({msg: e.message});
        
    }
}