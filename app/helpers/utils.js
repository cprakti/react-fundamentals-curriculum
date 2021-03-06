var daysMap = {
  '0':"Sunday",
  '1':"Monday",
  '2':"Tuesday",
  '3':"Wednesday",
  '4':"Thursday",
  '5':"Friday",
  '6':"Saturday"
};

var monthsMap = {
  '0':"Jan",
  '1':"Feb",
  '2':"Mar",
  '3':"Apr",
  '4':"May",
  '5':"Jun",
  '6':"Jul",
  '7':"Aug",
  '8':"Sep",
  '9':"Oct",
  '10':"Nov",
  '11':"Dec"
};

function convertTemp (kelvin) {
  return parseInt(((kelvin - 273.15)* 1.8000 + 32.00), 10)
};

function getDate(unixTimestamp) {
  var date = new Date(unixTimestamp * 1000);
  var day = daysMap[date.getDay()]
  var month = monthsMap[date.getMonth()] + ' ' + date.getDate();
  return day + ', ' + month;
}

module.exports = {
  convertTemp: convertTemp,
  getDate: getDate
}
