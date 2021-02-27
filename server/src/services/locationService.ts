import {Request, Response} from 'express';
import {getLocationInfoFromKakaoMap, registLocationData} from './locationServiceLogic';

import {typeLocation} from "../type";
export const getLocationInfo = async (req: Request, res: Response) => {

    try {
        // const locationInfo = <string>req.query.locationId;
        // const locationId: number = 26640200;
        // const locationInfo = JSON.parse(await getLocationInfoFromKakaoMap(locationId));
        
        const locationX = 126.33581745833496;
        const locationY = 33.24646746966087;
        const locationName = "호가";
        const locationId = 26640200;

        const location :typeLocation = {
            x : locationX,
            y : locationY,
            name : locationName,
            locationId : locationId,
            address: "",
            camp: {
                region: "",
                deliver: { coca: 0, pepsi: 0},
                store: { coca: 0, pepsi: 0},
                pickUP: { coca: 0, pepsi: 0}
            }

        }
        const locationInfo = await getLocationInfoFromKakaoMap(location);

        res.status(200).json(locationInfo);

    } catch (e) {
        console.log(e);
        res.status(400).json({msg: e.message});
        
    }
}

export const registLocation = async (req: Request, res: Response) => {

    try {
        const locationData: typeLocation = req.body;
        const resgistResult = await registLocationData(locationData);

        res.status(200).json(resgistResult);

    } catch (e) {
        console.log(e);
        res.status(400).json({msg: e.message});
        
    }
}
