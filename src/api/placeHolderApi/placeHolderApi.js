import axios from "axios";

export class PlaceHolderApi {
    
   static baseUrl = 'https://jsonplaceholder.typicode.com';

   static async getToDos (){

    const { data } = await axios.get(`${PlaceHolderApi.baseUrl}/todos`);
    return data;

   }

   static async exacToDo (id){

      const { data } = await axios.get(`${PlaceHolderApi.baseUrl}/todos/${id}`) 
      // console.log(data);
      return data; 
      
      // { id: Number; title: string; completed: Boolean; userId: number }
      
   }

   static async getUser (userId) {
      const { data } = await axios.get(`${PlaceHolderApi.baseUrl}/users/${userId}`)
      return data;
   }

}