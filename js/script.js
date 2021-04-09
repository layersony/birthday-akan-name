function display(){
  let birthday = document.getElementById("birthday").value; // get date from form
  let machDate = new Date(birthday); // changing it a machine date readable
  let dt = machDate.getDate(); // date born
  let mon = machDate.getMonth(); // month born diplayed in index form
  let yr = machDate.getFullYear(); // year born

  if (birthday === ""){
    alert("Empty Value, Choose a Valid Date");
  }else{
    document.getElementById('b-day').innerHTML = dayWeek(dt, (mon + 1), yr);
  }

}

// day of the Week
function dayWeek(day, month, year){
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday','Thursday', 'Friday', 'Saturday'];
  
  //jan and feb considered to be of the previous year
  if (month < 3){
    month += 12
    year -= 1
  }
  let dOfWeek = (day + parseInt(((month + 1) * 26) / 10) + year + parseInt(year / 4) + 6 * parseInt(year / 100) + parseInt(year / 400) - 1) % 7;
  
  exactDay =  days[dOfWeek];

  return exactDay;
}

function reset() {
  document.getElementById("birth-form").reset();
};

// for radio

function checkgender(){
  var male = document.getElementById("male");
  // var female = document.getElementById("female");


  if (male.checked ===  true){
    alert("male checked");
  }else if (female.checked === true){
    alert("female checked");
  }else{
    alert("Select a gender");
  }
};