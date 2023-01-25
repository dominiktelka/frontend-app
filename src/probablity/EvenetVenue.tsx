export const EventVenue =(props:any) =>{

    if (props.venue !== null) {
        return props.venue.name
    } else {
        return 'There is no venue info'
    }

}