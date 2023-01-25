const date = new Date('2023-01-09T06:00:00+05:45')
const secmd = new Date('2023-01-09T07:00:00+05:45')
const leave = new Date(secmd) - new Date(date)
console.log(date.getFullYear())
console.log(date.getMonth())
console.log(date.getHours())
console.log(date.getTime())
console.log(leave)


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

console.log(getHours(leave))