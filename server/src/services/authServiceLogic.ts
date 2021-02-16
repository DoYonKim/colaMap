import userModel from '../models/userModel';
import {Request, Response} from 'express';
import config from '../config'
import axios from 'axios';

export function getKakaoTokensFromCode (kakaoUserCode:string): string {

    const grantType = "authorization_code";
    const clientId = config.kakao.clientId;
    const redirectUri = "http://localhost:7300/api/auth/kakao-login";
    const clientSecret = config.kakao.clientSecret;
    const code = kakaoUserCode;

    console.log("getKakaoTokensFromCode");
    const tokens = async () => {
        try{
            return await axios.post('https://kauth.kakao.com/oauth/token',{
                params:{
                    "grant_type" : grantType,
                    "client_id" : clientId,
                    "redirect_uri" : redirectUri,
                    "code" : code,
                    "client_secret" : clientSecret
                }
            }).then(response =>{
                console.log(response);
            });
        }catch (error){
            console.log(error);
        }
    }

    return "test";
}