const listOfStaff =  (eachleave)=>{
    const staff = new Set();
    eachleave.map((value) =>{
        let name = value.title.replace('@','').toLocaleLowerCase()
        console.log(name)
        staff.add(name)
    })
    return staff
}
const staffName = listOfStaff(eachleave)
console.log(staffName)