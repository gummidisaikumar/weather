var moment = require("moment");

function toDateFormatYYYYMMDD(date) {
  console.log(moment(date, "YYYY-MM-DD").format("YYYY-MM-DD"));
  return moment(date, "YYYY-MM-DD").format("YYYY-MM-DD");
}

function toDateStringFormat(date){
  console.log(moment(date, "YYYY-MM-DD").format('ll'));
  return moment(date, "YYYY-MM-DD").format('ll');
}

export { toDateFormatYYYYMMDD, toDateStringFormat };
