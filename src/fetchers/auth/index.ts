import axios from "axios";
import { endpoints } from "../endpoints";
import { TRegisterPayload } from './types';

export const authApi = {
    postSignUpUser: (payload: TRegisterPayload) => axios.post(`http://localhost:3000/api${endpoints.REGISTER_USER}`, payload).then(response => response.data)
}