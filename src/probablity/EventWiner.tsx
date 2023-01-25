import React from 'react';


export const EventWinner = (props:any) =>{
    if(props.highestNumber === props.probablityDraw) return <p>DRAW: <strong style={{color:'red'}}>{props.probablityDraw}</strong></p>
        if(props.highestNumber === props.probablityWiner) return <p>HOME_TEAM_WIN: <strong style={{color:'red'}}>{props.probablityWiner}</strong></p>
        if(props.highestNumber === props.probablityWiner2) return <p>AWAY_TEAM_WIN: <strong style={{color:'red'}}>{props.probablityWiner2}</strong></p>


        return <>
            {props.highestNumber}
        </>
}