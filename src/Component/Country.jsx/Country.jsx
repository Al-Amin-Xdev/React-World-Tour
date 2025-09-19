import React, { use } from 'react';

const Country = ({countryObject}) => {

    const countryInfo = use(countryObject);
    console.log(countryInfo);
    return (
        <div>
            
        </div>
    );
};

export default Country;