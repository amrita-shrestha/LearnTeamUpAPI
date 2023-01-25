// import axios from 'axios';
//
// const leave = async () => {
//     return await axios.get('https://api.teamup.com/ksifqcnnwkpixuit4t/events?&subcalendarId[]=11758347,&startDate=2022-12-01&endDate=2023-01-22',
//     {
//         headers: {
//             'Content-Type': 'application/json',
//             'Teamup-Token':'2642a17a7eda1d6361f05c9358612f8914d08d32c6e8140af6926be1e47410b5'
//         }
//     }
//     )
// }
// const calLeave = await leave()
// console.log(calLeave.data)

const data = {
    events: [
        {
            id: '1398562299',
            series_id: null,
            remote_id: null,
            subcalendar_id: 11758347,
            subcalendar_ids: [Array],
            all_day: true,
            rrule: '',
            title: 'amrita',
            who: '',
            location: '',
            notes: '',
            version: '02b6fe01270e',
            readonly: false,
            tz: null,
            attachments: [],
            start_dt: '2022-12-12T00:00:00',
            end_dt: '2022-12-12T23:59:00',
            ristart_dt: null,
            rsstart_dt: null,
            creation_dt: '2023-01-24T18:00:54+05:45',
            update_dt: null,
            delete_dt: null
        },
        {
            id: '1398601519',
            series_id: null,
            remote_id: null,
            subcalendar_id: 11758347,
            subcalendar_ids: [Array],
            all_day: true,
            rrule: '',
            title: 'amrita',
            who: '',
            location: '',
            notes: '',
            version: '8a05a9ce9f00',
            readonly: false,
            tz: null,
            attachments: [],
            start_dt: '2022-12-12T00:00:00',
            end_dt: '2022-12-13T23:59:00',
            ristart_dt: null,
            rsstart_dt: null,
            creation_dt: '2023-01-24T18:44:51+05:45',
            update_dt: '2023-01-24T18:45:47+05:45',
            delete_dt: null
        },
        {
            id: '1398562084',
            series_id: null,
            remote_id: null,
            subcalendar_id: 11758347,
            subcalendar_ids: [Array],
            all_day: false,
            rrule: '',
            title: 'amrita',
            who: '',
            location: '',
            notes: '',
            version: '40dd1e4be6db',
            readonly: false,
            tz: null,
            attachments: [],
            start_dt: '2023-01-09T06:00:00+05:45',
            end_dt: '2023-01-09T07:00:00+05:45',
            ristart_dt: null,
            rsstart_dt: null,
            creation_dt: '2023-01-24T18:00:10+05:45',
            update_dt: null,
            delete_dt: null
        },
        {
            id: '1398546897',
            series_id: null,
            remote_id: null,
            subcalendar_id: 11758347,
            subcalendar_ids: [Array],
            all_day: true,
            rrule: '',
            title: 'amrita',
            who: '',
            location: '',
            notes: '',
            version: '4a032c795598',
            readonly: false,
            tz: null,
            attachments: [],
            start_dt: '2023-01-16T00:00:00',
            end_dt: '2023-01-16T23:59:00',
            ristart_dt: null,
            rsstart_dt: null,
            creation_dt: '2023-01-24T17:45:05+05:45',
            update_dt: '2023-01-24T17:45:15+05:45',
            delete_dt: null
        },
        {
            id: '1398547521',
            series_id: null,
            remote_id: null,
            subcalendar_id: 11758347,
            subcalendar_ids: [Array],
            all_day: true,
            rrule: '',
            title: 'amrita',
            who: '',
            location: '',
            notes: '',
            version: 'b8e0790718bb',
            readonly: false,
            tz: null,
            attachments: [],
            start_dt: '2023-01-17T00:00:00',
            end_dt: '2023-01-17T23:59:00',
            ristart_dt: null,
            rsstart_dt: null,
            creation_dt: '2023-01-24T17:46:04+05:45',
            update_dt: null,
            delete_dt: null
        },
        {
            id: '1398547524',
            series_id: null,
            remote_id: null,
            subcalendar_id: 11758347,
            subcalendar_ids: [Array],
            all_day: true,
            rrule: '',
            title: 'amrita',
            who: '',
            location: '',
            notes: '',
            version: '180217d50055',
            readonly: false,
            tz: null,
            attachments: [],
            start_dt: '2023-01-17T00:00:00',
            end_dt: '2023-01-17T23:59:00',
            ristart_dt: null,
            rsstart_dt: null,
            creation_dt: '2023-01-24T17:46:04+05:45',
            update_dt: null,
            delete_dt: null
        }
    ],
        timestamp: 1674626694
}
 // console.log(data)
 // console.log(typeof data) // object
 // console.log(typeof data.events) // object
 // console.log(data.events[2])
const eachleave = data.events
console.log(typeof eachleave)
console.log(Array.from(eachleave))