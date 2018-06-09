const baseUrl = '';

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
    
    static async fetchTotalBudget()
    {
        try {
            let response = await fetch(baseUrl, {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                },
            });
            
            let data = await response.json();
            
            return data;
        }
        catch (error) {
            console.log(error);
        }
    }
    
    static async fetchAllIncome()
    {
        try {
            let response = await fetch(baseUrl, {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                }
            });
            
            let data = await response.json();
            
            return data;
        }
        catch (error) {
            console.log(error);
        }
    }
    
    static async fetchAllExpense()
    {
        try {
            let response = await fetch(baseUrl, {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                }
            });
            
            let data = await response.json();
            
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
    }
}