function display(){
  var birthday = document.getElementById("birthday").value; // get date from form
  var machDate = new Date(birthday); // changing it a machine date readable
  var date = machDate.getDate(); // date born
  var month = machDate.getMonth(); // month born diplayed in index form
  var year = machDate.getFullYear(); // year born


  console.log(date);
  console.log(typeof(date));

  console.log(month);
  console.log(typeof(month));

  console.log(year);
  console.log(typeof(year));
}

