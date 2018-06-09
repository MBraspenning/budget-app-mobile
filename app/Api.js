import { BaseUrl } from './Config';

export default class Api 
{
    static async fetchAll() 
    {
        try {
            let response = await fetch(BaseUrl + '/api/fetch?user_id=1', {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                },
            });
                        
            let data = await response.json();             
            
            let budget = JSON.parse(data[0]);
            let income = JSON.parse(data[1]);
            let expense = JSON.parse(data[2]);
            
            let dataToReturn = [budget, income, expense];            
            
            return dataToReturn;
        }
        catch (error) {
            console.log(error);
        }
    }        
    
    static async postNewItem()
    {
        try {
            let response = await fetch(baseUrl, {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    
                }),
            });
        }
        catch (error) {
            console.log(error);
        }
    }
}