Javascript DOM

untuk mencari jejak scroll di browser
-
window.innerHeight
// 800

window.innerWidth
// 900

window.scrollY
// 200

window.scrollX
// 0
--------------------------------------------------------------------------------------
*pathing*
window.origin
// "http://example.com"

window.location.origin
// "http://example.com"

window.location.href
// "http://example.com/path/to/page"

window.location.pathname
// "/path/to/page"
---------------------------------------------------------------------------------------

// let now = new Date()
// console.log(now) // shows current date/time

// 0 means 01.01.1970 UTC+0
// let selectedDate = new Date(4)
// console.log(selectedDate)

// now add 24 hours, get 02.01.1970 UTC+0
// let selectedDate = new Date(24 * 3600 * 1000)
// console.log(selectedDate)

// let selectedDate = new Date('2017-01-26')
// console.log(selectedDate)
// The time portion of the date is assumed to be midnight GMT and
// is adjusted according to the timezone the code is run in
// So the result could be
// Thu Jan 26 2017 11:00:00 GMT+1100 (Australian Eastern Daylight Time)
// or
// Wed Jan 25 2017 16:00:00 GMT-0800 (Pacific Standard Time)

new Date(2011, 0, 1, 0, 0, 0, 0) // // 1 Jan 2011, 00:00:00
new Date(2011, 0, 1) // the same, hours etc are 0 by default

let date = new Date(2011, 0, 1, 2, 3, 4, 567)
console.log(date) // 1.01.2011, 02:03:04.567

// getFullYear(2019);
// getMonth();
// getDate();
// getHours(), getMinute(), getSecond(), getMilliseconds()
// getDay()

// current date
// let date = new Date()

// the hour in your current time zone
console.log(date.getHours())

// the hour in UTC+0 time zone (London time without daylight savings)
console.log(date.getUTCHours())

getTime()

// if you are in timezone UTC-1, outputs 60
// if you are in timezone UTC+3, outputs -180
console.log(new Date().getTimezoneOffset())

//setting date component

let today = new Date()

today.setHours(0)
console.log(today) // still today, but the hour is changed to 0

today.setHours(0, 0, 0, 0)
console.log(today) // still today, now 00:00:00 sharp.

//autocorrection

// let date = new Date(2013, 32) // 32 Jan 2013 ?!?
// console.log(date) // ...is 1st Feb 2013

// let date = new Date(2016, 1, 28)
// date.setDate(date.getDate() + 2)

console.log(date) // 1 Mar 2016

//date to number
let date = new Date()
console.log(+date) // the number of milliseconds, same as date.getTime()

let start = new Date() // start counting

// do the job
for (let i = 0; i < 100000; i++) {
  let doSomething = i * i * i
}

let end = new Date() // done

console.log(`The loop took ${end - start} ms`)

let start = Date.now() // milliseconds count from 1 Jan 1970

// do the job
for (let i = 0; i < 100000; i++) {
  let doSomething = i * i * i
}
 //-----------------------------------------//

let end = Date.now() // done

console.log(`The loop took ${end - start} ms`) // subtract numbers, not dates

//-------------------------//

//date.parse from a String

let ms = Date.parse('2012-01-26T13:51:50.417-07:00')

console.log(ms) // 1327611110417  (timestamp)

let date = new Date(Date.parse('2012-01-26T13:51:50.417-07:00'))

console.log(date)
