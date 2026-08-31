//Dates

let myDate = new Date()
// console.log(myDate.toString()); // Fri Jun 14 2024 12:34:56 GMT+0000 (Coordinated Universal Time) -- Mon Aug 31 2026 19:40:11 GMT+0530 (India Standard Time)
// console.log(myDate.toDateString()); // Fri Jun 14 2024 -- Mon Aug 31 2026
// console.log(myDate.toISOString()); // 2024-06-14T12:34:56.789Z -- 2026-08-31T14:10:11.397Z
// console.log(myDate.toJSON()); // 2024-06-14T12:34:56.789Z -- 2026-08-31T14:10:11.397Z
// console.log(myDate.toLocaleDateString()); // 6/14/2024 (format may vary based on locale) -- 31/8/2026
// console.log(myDate.toLocaleTimeString()); // 12:34:56 PM (format may vary based on locale) -- 7:40:11 pm
// console.log(myDate.toString()); // Fri Jun 14 2024 12:34:56 GMT+0000 (Coordinated Universal Time) -- Mon Aug 31 2026 19:40:11 GMT+0530 (India Standard Time)
// console.log(myDate.toUTCString); // Fri, 14 Jun 2024 12:34:56 GMT -- [Function: toUTCString]\

// let myCreatedDate = new Date(2025, 0, 31) // Year, Month, Day
// let myCreatedDate = new Date(2025, 0, 31, 5, 3) // Year, Month, Day, Hour, Minute
// let myCreatedDate = new Date("08-31-2026") // Month-Day-Year format 
// let myCreatedDates = new Dates("2026-08-31") // Year-Month-Day format
// console.log(myCreatedDate.toLocaleString());

let myTimesStamp = Date.now()

console.log(myTimesStamp); // Its gives the timestamp in milliseconds since January 1, 1970, 00:00:00 UTC (1788186448224)
console.log(myTimesStamp.getTime());
console.log(myTimesStamp.getTime());