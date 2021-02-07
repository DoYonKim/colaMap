import userModel from '../models/userModel';
import {Request, Response} from 'express';

export const getWholeUserList = async (req: Request, res: Response) => {

    try {

        const users = await userModel.find();

        if(!users) 
            throw Error("No user found");
        res.status(200).json(users);
        
        console.log(users, "getAllUsers: Whole user list is searched.");

    } catch (e) {
        console.log(e);
        res.status(400).json({msg: e.message});
        
    }
}

export const registUser = async (req: Request, res: Response) => {
    
    const {name, email} = req.body;

    userModel.findOne({ email }).then((user) => {
        if (user)
            return res
                .status(400)
                .json({ msg: "이미 가입된 회원 메일입니다." });

        const newuser = new userModel({
            name: name,
            email: email,
        });

        newuser.save();
        console.log(newuser, "registUser: New user is joined");

        res.json({
            user: {
                name: newuser.name,
                email: newuser.email,
            },
        });
    });
};