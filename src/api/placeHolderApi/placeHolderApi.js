import axios from "axios";

export class PlaceHolderApi{
    
   static baseUrl = 'https://jsonplaceholder.typicode.com';

   static async getToDos (){

    const { data } = await axios.get(`${PlaceHolderApi.baseUrl}/todos`);
    return data;

   }

   static async exacToDo (){

      const { data } = await axios.get(`${PlaceHolderApi.baseUrl}/users`) 
      return data;
      
   }


}