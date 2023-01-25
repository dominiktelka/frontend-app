import React, {useEffect, useState} from 'react';
import {SortedByNumberEntity} from 'types'
import {Spinner} from "../common/Spinner/Spinner";
import { SliceArray } from './SliceArray';

export const EventList = () =>{
    const [data,setData] =useState<SortedByNumberEntity[]| null >(null)

    const refreshList = async () =>{
        setData(null)
        const res = await fetch('http://localhost:3001');
        const data = await res.json()
        setData(data.Events)
    };

    useEffect(()=>{
        refreshList();
    },[])
    if(data === null){
        return <Spinner/>
    }





    return <>
        <h1 style={{textAlign:'center'}}>UEFA EVENTS</h1>
        <SliceArray array={data}/>
    </>
}


