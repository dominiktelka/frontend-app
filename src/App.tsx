import React from 'react';
import {Route, Routes} from 'react-router-dom';


import {EventList} from "./probablity/EventList";

export const App = () =>{
    return(
        <>
            <Routes>
                <Route path='/' element={<EventList/>}></Route>
            </Routes>
        </>
    );
}


