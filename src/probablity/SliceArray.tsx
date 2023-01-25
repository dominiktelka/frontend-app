import React, {useState} from 'react';
import {SortedByNumberEntity} from 'types'
import {EventsTable} from "./EventsTable";
interface Props {
    array: SortedByNumberEntity[]
}

export const SliceArray = (props:Props) =>{
    const [number, setNumber] = useState<string>('10');

    let number2 = Number(number)
    let slicedArray = props.array.slice(0,number2)
    if(number2 <= props.array.length){
        return <>
            <div style={{textAlign:'center'}}>
                <p>Write how many events You wanna see</p>
                <textarea name="number" id="number" value={number}  onChange={ e => setNumber(e.target.value)}></textarea>
            </div>
            <EventsTable
                events ={slicedArray}
            />
        </>
    } else {
        return <>
            <div style={{textAlign:'center'}}>
                <p>Write how many events You wanna see</p>
                <p >Given parameter can not be higher than <strong style={{color:'red'}}>
                    {props.array.length}
                </strong> or be a <strong style={{color:'red'}}>signe/letter</strong></p>
                <textarea name="number" id="number" value={number}  onChange={ e => setNumber(e.target.value)}></textarea>
            </div>
            <EventsTable
                events ={slicedArray.slice(0,props.array.length)}
            />
        </>
    }

}