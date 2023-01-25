import React from 'react';
import Data from '../data/BE_data.json'
import {EventEntity} from "../types/EventEntity";


export const EventsList = () =>{
    // const maped = Data.Events.map((item,i) =>{
    //     console.log(item.competitors)
    // })





    // @ts-ignore
    return <>
        <div style={{margin: 'auto',
            width: '100%',
            border: '3px solid green',
            padding: '10px',
        }}>
            <table style={{margin:'auto'}}>
                <tbody>
                <tr>
                    <th>Start date</th>
                    <th>Competitors</th>
                    <th>Venue</th>
                    <th>Probable result</th>
                </tr>
                {Data.Events.map((item,i) =>(
                    <tr key={i}>
                        <td>{item.start_date}</td>
                        <td>{item.competitors.map((item) =>(
                            <p>{item.name}({item.country})</p>
                        ))}
                        </td>
                        <td>{}
                        </td>

                    </tr>
                    )
                )}
                </tbody>
            </table>
        </div>
    </>
}

