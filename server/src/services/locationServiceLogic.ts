import locationModel from '../models/locationModel';
import {Request, Response} from 'express';
import config from '../config'
import axios from 'axios';
import { typeLocation, typeResult } from '../type';

export function getLocationInfoFromKakaoMap (location:typeLocation): string {

    const clientId = config.kakao.clientId;
    
    try{
        axios.get(`https://dapi.kakao.com/v2/local/search/keyword.json?x=${location.x}&y=${location.y}&radius=2000`,{
                params: {
                "query" : location.name,
                "page": 1,
                "size": 1
            },
            headers: { 
                'Authorization': 'KakaoAK '+  clientId
            },

        }).then(response =>{
            console.log(response.data.documents[0], "getLocationInfoFromKakaoMap");
        });
    }catch (error){
        console.log(error);
    }

    return "test";
}

export const registLocationData = async (locationData: typeLocation): Promise<typeResult> => {
    
    const locationId: string  = <string><any>locationData.locationId;
    const {name, address, x, y} = locationData;

    let result:typeResult = {isSucceeded: false, message: ""};

    await locationModel.findOne({ locationId }).then((locationInfo) => {
        if (locationInfo){
            result =  {isSucceeded: false, message: "이미 있는 location 정보입니다." };
        }else{
            const newlocation = new locationModel({
                name: name,
                locationId: locationId,
                address: address,
                x: x,
                y: y,
                camp: {
                    region: "neutral",
                    deliver: {coca: 0, pepsi: 0},
                    pickup: {coca: 0, pepsi: 0},                
                    togo: {coca: 0, pepsi: 0},                
                }
            });
    
            newlocation.save();
            result =  {isSucceeded: true, message: "장소 등록 성공" };
        }
    });
    return result;

};