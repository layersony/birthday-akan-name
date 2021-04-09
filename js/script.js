function display(){
  let birthday = document.getElementById("birthday").value;
  let machDate = new Date(birthday);
  let dt = machDate.getDate();
  let mon = machDate.getMonth();
  let yr = machDate.getFullYear();

  if (birthday === ""){
    alert("Empty Value, Choose a Valid Date");
  // }else if(dt<=0 || dt>31){
  //   alert("Invalid Date, Re-Enter Date again");
  // }else if(mon<=0 || mon>12){
  //   alert("Invalid Month Entry, Re-Enter Month again");
  //   console.log()
  }else{
    document.getElementById('b-day').innerHTML = dayWeek(dt, (mon + 1), yr);
  }
}

// day of the Week
function dayWeek(day, month, year){
  let male = document.getElementById("male");
  let female = document.getElementById("female");

  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday','Thursday', 'Friday', 'Saturday'];
  ghanaMale = ['Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame'];
  ghanaFemale = ['Akosua', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama'];
  //jan and feb considered to be of the previous year

  if (month < 3){
    month += 12
    year -= 1
  }

  let dOfWeek = (day + parseInt(((month + 1) * 26) / 10) + year + parseInt(year / 4) + 6 * parseInt(year / 100) + parseInt(year / 400) - 1) % 7;
  
  if (male.checked ===  true){
    return ghanaMale[dOfWeek]
  }else if (female.checked === true){
    return ghanaFemale[dOfWeek]
  }else{
    alert("Select a gender");
  }
}


// for radio
// function checkgender(h){




//   if (male.checked ===  true){
//     return ghanaMale[h]
//   }else if (female.checked === true){
//     return ghanaFemale[h]
//   }else{
//     alert("Select a gender");
//   }
// };

// reset function
function reset() {
  document.getElementById("birth-form").reset();
};