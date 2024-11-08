//function myFirst(){
//   myDisplayer("Good bye");
//}

//function mySecond(callback){
//  myDisplayer("Hello");
//    callback();
//}

//function myDisplayer(message){
 //   console.log(message);
//}

//mySecond(myFirst);

//console.log("paragraf 1");
//setTimeout(() =>){
 //   console.log("paragraf 2");
//}, 4000);
//console.log("paragraf 3");
//console.log("paragraf 4");
//console.log("paragraf 5");
//console.log("paragraf 6");

function setTime() {
    const header = document.getElementById("header");
    header.textContent = new Date().toString();
  }
  setInterval(setTime, 1000);
  console.log("Program Finish");
