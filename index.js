import axios from 'axios';
import dotenv from 'dotenv'
import path from "path"

const __dirname = path.resolve()
dotenv.config({ path: path.join(__dirname, './.env') });

// function to fetch the leave in a month
const  leave = async () => {
    let calEvents = []
    const url = process.env.TEAMUP_SERVER_URL
    const apiKey = process.env.TEAMUP_API_KEY
    await axios.get(url,
    {
        headers: {
            'Content-Type': 'application/json',
            'Teamup-Token': apiKey
        }
    }
    ).then(({data:{events}}) =>{
        calEvents = events.map((event) => ({
            id: event.id,
            title: event.title,
            who: event.who,
            allDay: event.all_day,
            startDate: event.start_dt,
            endDate: event.end_dt,
        }))
    })
    return calEvents
}
const calLeave = await leave()

const getHours = (timestamp)=>{
    const seconds = timestamp / 1000
    const minutes = Math.round(seconds / 60)
    if (minutes < 60) {
        return `${minutes}M`
    } else {
        const hours = (minutes / 60).toString().split('.')[0]
        let remMins = minutes - hours * 60
        remMins = remMins < 10 ? `0${remMins}` : remMins
        return `${hours}.${remMins}H`
    }
}
const getLeaveHour = (startDate, endDate) => {
    const leave = new Date(endDate) - new Date(startDate)
    return getHours(leave)
}

const printLeave = (calLeave) =>{
    calLeave.map((calEvent)=>{
        if(!calEvent.allDay){
            const hourLeave = getLeaveHour(calEvent.startDate,calEvent.endDate)
            console.log(calEvent.title, "was on leave from" ,calEvent.startDate, "to", calEvent.endDate,"for" ,hourLeave )
        }else{
            console.log(calEvent.title, "was on leave from" ,calEvent.startDate, "to", calEvent.endDate)
        }
    })
}

printLeave(calLeave)

