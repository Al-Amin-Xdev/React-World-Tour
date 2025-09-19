import React from 'react';


const countryDataFetch = async()=>{
    const res = await fetch("https://openapi.programming-hero.com/api/all");
    const countryObject = await res.json();
    return countryObject;
}


const Countries = () => {
    return (
        <div>
            <h1>From Countries Component</h1>
        </div>
    );
};

export default Countries;