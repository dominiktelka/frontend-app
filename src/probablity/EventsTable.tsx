import React from 'react';
import {SortedByNumberEntity} from 'types'
import { EventVenue } from './EvenetVenue';
import { EventCompetitor } from './EventCompetitors';
import { EventStartDate } from './EventStartDate';
import { EventWinner } from './EventWiner';

interface Props{
    events: SortedByNumberEntity[];
}

export const EventsTable = (props: Props) =>{
    return <>
        <div style={{margin: 'auto',
            width: '60%',
            border: '3px solid navy',
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
                {props.events.map((event,i) =>(
                        <tr key={i}>
                            <td style={{padding: '20px'}}>
                                <EventStartDate
                                startDate={event.start_date}
                            />
                            </td>
                            <td style={{padding: '20px', textAlign:'center'}}>
                                {event.competitors
                                    .map((item) =>(
                                <EventCompetitor
                                    key={item.id}
                                    competitor={item}

                                />
                                        )
                                    )
                                }
                            </td>
                            <td style={{padding: '20px', textAlign:'center'}}>
                                <EventVenue
                                venue={event.venue}
                            />
                            </td>
                            <td style={{padding: '20px', textAlign:'center'}}>
                                <EventWinner
                                probablityDraw={event.probability_draw}
                                probablityWiner={event.probability_home_team_winner}
                                probablityWiner2={event.probability_away_team_winner}
                                highestNumber={event.highestNumber}
                            />
                            </td>
                        </tr>
                    )
                )}
                </tbody>
            </table>
        </div>
    </>
}

