import locationModel from '../models/locationModel';
import {Request, Response} from 'express';
import config from '../config'
import axios from 'axios';
import { typeLocation } from '../type';

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

export const registLocationData = async (locationData: typeLocation) => {
    
    const locationId: string  = <string><any>locationData.locationId;
    const {name, address, x, y} = locationData;

    locationModel.findOne({ locationId }).then((locationInfo) => {
        if (locationInfo)
            return ({ msg: "이미 있는 location 정보입니다." });

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
        console.log(newlocation, "registLocation: 새로운 location을 등록했습니다.");

        return({
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
    });
};