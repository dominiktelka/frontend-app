import React from 'react';

export const EventCompetitor = (props: any) => {
    if(props.competitor.qualifier === 'home') return <p> <strong>HOME</strong> {props.competitor.name}({props.competitor.country})</p>
    if (props.competitor.qualifier === 'away')return <p style={{color: 'red'}}><strong>AWAY</strong> {props.competitor.name}({props.competitor.country})</p>


    return<>
       <p>
           {props.competitor.name}({props.competitor.country})</p>

   </>
}