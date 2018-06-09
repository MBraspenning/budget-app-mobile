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
            
            console.log(data);
            
            return data;
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