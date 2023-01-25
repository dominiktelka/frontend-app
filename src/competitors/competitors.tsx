import React from 'react';
import Data from '../data/BE_data.json'


export const Competitors = () =>{
    const competitors = Data.Events.map((item) =>(
        item.competitors.map((item) =>(
            <p>{item.name}({item.country})</p>
        ))
    ))
    return <>
        {competitors}
    </>
}
