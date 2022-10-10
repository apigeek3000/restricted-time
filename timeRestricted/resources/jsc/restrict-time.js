// Get date and time of request in UTC (milliseconds from 1970)
var reqDateTime = context.getVariable('client.received.start.timestamp');
context.setVariable('reqDateTime', reqDateTime);

// Generate milliseconds from 1970 for start time
// Borrow date from reqDateTime, use time from prop
var startTime = properties['not-before-utc']; // Time in UTC
var startDateObj = new Date(reqDateTime);
startDateObj.setHours(startTime.split(":")[0]);
startDateObj.setMinutes(startTime.split(":")[1]);
startDateObj.setSeconds(startTime.split(":")[2]);
var startDateTime = startDateObj.getTime()
context.setVariable('startDateTime', startDateTime);

// Generate milliseconds from 1970 for end time
// Borrow date from reqDateTime, use time from prop
var endTime = properties['not-after-utc']; // Time in UTC
var endDateObj = new Date(reqDateTime);
endDateObj.setHours(endTime.split(":")[0]);
endDateObj.setMinutes(endTime.split(":")[1]);
endDateObj.setSeconds(endTime.split(":")[2]);
var endDateTime = endDateObj.getTime();
context.setVariable('endDateTime', endDateTime);

// Determine if we should allow this request
var allowReq = (startDateTime < reqDateTime) && (endDateTime > reqDateTime);
context.setVariable('allowReq', allowReq);