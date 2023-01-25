import React from 'react';
import Moment from 'react-moment';

interface Props{
    startDate: string
}

export const EventStartDate = (props:Props) => {
    return<>
        <Moment format={'YYYY/MM/DD/HH:MM'}>{props.startDate}</Moment>
    </>
}