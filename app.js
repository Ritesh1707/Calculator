let string = "";
let buttons = document.querySelectorAll("button");





Array.from(buttons).forEach((button) => {
  button.addEventListener("click", (e) => {
    try{
      if (e.target.innerHTML == "=") {
        string = eval(string);
        document.querySelector("input").value = string;
      }
      else if (e.target.innerHTML == "C") {
        string = "";
        document.querySelector("input").value = string;
      }
      else{
        string = string + e.target.innerHTML;
        document.querySelector("input").value = string;
      }
    }
    catch{
      string = "Wrong Operation"
      document.querySelector("input").value = string;

    }
  });
});





// buttons.forEach((button) => {
//   button.addEventListener("click", (e) => {
//     console.log(e.target);
//     string = string + e.target.innerHTML;
//     console.log(string);

//     if (e.target.innerHTML == "=") {
//         string = eval(string);
//         document.querySelector("input").value = string;
//     }
//     if (e.target.innerHTML == "C") {
//         document.querySelector("input").value = "";   
//     }
//     else{
//         document.querySelector("input").value = string;
//     }
//   });
// });