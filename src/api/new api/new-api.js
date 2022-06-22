import axios from 'axios'

export class NewApi {
    static baseUrl = 'http://localhost:5000/api'
    static async Login (email, password){
    const response = await axios.post(`${NewApi.baseUrl}/auth/login`, {
        email,
        password
    });
    return response.data
}
    static async Register (email, password){
        const {data} = await axios.post(`${NewApi.baseUrl}/auth/register`,{
            email,
            password
        });
        return data
    }
}