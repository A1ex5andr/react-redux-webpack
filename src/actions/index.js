export function selectBook(book) {
  var d = new Date();
  var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

  var timestamp = {
    day: days[d.getDay()],
    hours: d.getHours(),
    minutes: d.getMinutes(),
    seconds: d.getSeconds()
  };

  console.log();
  
  return {
    type: 'BOOK_SELECTED',
    payload: {book, timestamp}
  };
}