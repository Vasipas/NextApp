import clientPromise from '@/lib/mongodb';
import { hash } from 'bcryptjs';
import { NextApiResponse } from "next";
import { ISignUpNextRequesWithBody } from "../types";

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
            client.close();
            return;
        }
        const hashPass = hash(password, process.env.HASH_SALT as string);
        const status = await db.collection('users').insertOne({
            email,
            password: hashPass
        });
        res.status(201).json({ message: 'User created', ...status });
        client.close();
    }
    else res.status(500).json({message: 'method not valid'});
}