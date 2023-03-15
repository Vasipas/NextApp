import { NextApiRequest } from 'next';

export interface ISignUpNextRequesWithBody extends NextApiRequest {
    body: {
    email: string;
    password: string;}
}