const formatDate = (str)=> {
let date = new Date(str)
let hours = date.getHours()
let mins = date.getMinutes()

let day = date.getDay()
let month = date.getMonth()
let year = date.getFullYear()

return `${day}/${month}/${year}@${hours}:${mins}`
}
export {formatDate}