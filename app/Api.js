export default class Api 
{
    static async fetchAll() 
    {
        try {
            let response = await fetch('https://jsonplaceholder.typicode.com/users', {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                },
            });
            
            let data = await response.json();
            
            console.log(data[0]);
            
            return data[0];
        }
        catch (error) {
            console.log(error);
        }
    }
}