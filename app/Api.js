import { AsyncStorage } from 'react-native';

import { BaseUrl } from './Config';

import NavigationService from './NavigationService';

export default class Api 
{
    static async fetchAll() 
    {
        try {
            let accessToken = await AsyncStorage.getItem('access-token');
            
            let response = await fetch(BaseUrl + '/api/fetch', {
                method: 'GET',
                headers: {
                    Authorization: 'Bearer ' + accessToken,
                    Accept: 'application/json',
                },
            });
            
            if (response.ok)
            {
                let data = await response.json();             
                let budget = JSON.parse(data[0]);
                let income = JSON.parse(data[1]).reverse();
                let expense = JSON.parse(data[2]).reverse();
            
                let dataToReturn = [budget, income, expense];            
            
                return dataToReturn;                    
            }
            else 
            {
                await AsyncStorage.clear();                
                NavigationService.navigate('SignedOut');
            }
        }
        catch (error) {
            console.log(error);
        }
    }        
    
    static async postNewItem(type, description, amount)
    {
        try {
            let accessToken = await AsyncStorage.getItem('access-token');
            
            let response = await fetch(BaseUrl + '/api/insert', {
                method: 'POST',
                headers: {
                    Authorization: 'Bearer ' + accessToken,
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    type: type,
                    description: description,
                    amount: amount
                }),
            });
            
            if (!response.ok)
            {
                await AsyncStorage.clear();                
                NavigationService.navigate('SignedOut');
            }
        }
        catch (error) {
            console.log(error);
        }
    }
    
    static async editItem(id, type, description, amount)
    {
        try {
            let accessToken = await AsyncStorage.getItem('access-token');
            
            let response = await fetch(BaseUrl + '/api/edit', {
                method: 'PUT',
                headers: {
                    Authorization: 'Bearer ' + accessToken,
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    id: id,
                    type: type,
                    description: description,
                    amount: amount
                }),
            });
            
            if (!response.ok)
            {
                await AsyncStorage.clear();                
                NavigationService.navigate('SignedOut');
            }
        }
        catch (error) {
            console.log(error);
        }
    }
    
    static async deleteItem(id, type, amount)
    {
        try {
            let accessToken = await AsyncStorage.getItem('access-token');
            
            let response = await fetch(BaseUrl + '/api/delete', {
                method: 'DELETE',
                headers: {
                    Authorization: 'Bearer ' + accessToken,
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    id: id,
                    type: type,
                    amount: amount,
                }),
            });
            
            if (!response.ok)
            {
                await AsyncStorage.clear();                
                NavigationService.navigate('SignedOut');
            }
        }
        catch (error) {
            console.log(error);
        }
    }
}