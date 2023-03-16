import clientPromise from '@/lib/mongodb';
import bcrypt, { hash } from 'bcryptjs';
import { NextApiResponse } from "next";
import { ISignUpNextRequesWithBody } from "../../../types/types";

export default async function handler (req: ISignUpNextRequesWithBody, res:NextApiResponse) {
    if (req.method === 'POST') {
        const {email, password} = req.body;
        if (!email.includes('@') || !password || !email) {
            res.status(422).json({message: 'Wrong credentials'})
            return;
        } 
        const client = await clientPromise;
        const db = await client.db();

        const userExists = await db.collection('users').findOne({email})
        if (userExists) {
            res.status(422).json({message: 'User already exists'})
            return;
        } 
        const salt = await bcrypt.genSalt(10);
        const status = await db.collection('users').insertOne({
            email,
            password: await hash(password, salt)
        });
        res.status(201).json({ message: 'User created', ...status });
    }
    else res.status(500).json({message: 'method not valid'});
}