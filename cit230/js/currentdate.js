 var currentDate = new Date();
 var currentYear = currentDate.getFullYear();
 document.getElementById("currentYear").innerHTML = currentYear;
 
//  toLocaleDateString
//  const options = {
//    weekday: 'long',
//    day: 'numeric',
//    month: 'long',
//    year: 'numeric'
//  };
//  document.getElementById('currentdate').textContent = new
//  Date().toLocaleDateString('en-US', options);
//  cont todaysdate = new Date(); /* < !console.log(todaysdate);
 
 var today = new Date(); 
 var date = today.getMonth()+'-'+today.getDate();
 var time = today.getHours()+ ":" + today.getMinutes() + ":" + today.getSeconds();
 var dateTime = date+' '+time; 
 document.getElementById('currentdate').innerHTML = currentDate;

 