import axios from 'axios'
import { APIs } from "../../constanst/constants";

export class RegisterUsers{
    async createUser(userData) {
console.log("llega user",userData);
        const rawResponse = await axios.post(APIs.CREATEUSER, userData);
        console.log(rawResponse);
        
        return rawResponse.data;
      }

      async findAll(){
        
        const rawResponse = await axios.get(APIs.GETUSER);
        console.log('rawResponse.data ALL', rawResponse.data);
        return rawResponse.data;
      }

      async findOneByIdParam(id){
        console.log("ingreso a buscar x id",APIs.GETUSER+ '/' + id);
        const rawResponse = await axios.get(APIs.GETUSER+ '/' + id);
        console.log('rawResponse.data ONE ID', rawResponse.data);
        return rawResponse.data;
      }
}