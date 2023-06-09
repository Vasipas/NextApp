import { NextApiRequest } from 'next';

export interface ISignUpNextRequesWithBody extends NextApiRequest {
    body: {
    email: string;
    password: string;}
}

export interface IAuthCredentials {
    email: string;
    password: string;
}