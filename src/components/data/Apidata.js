import React from 'react'





export const addDatatoLocalStorage = async () => {
    try{
        const data = await fetch("https://restcountries.com/v2/all")
        const res = data.json()
       return res;
    }catch(error) {
        throw error;
    }

}
