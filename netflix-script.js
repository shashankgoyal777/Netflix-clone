console.log("Jay Shree Ram");

let acc = document.querySelectorAll(".box");

console.log(acc[0]);

acc.forEach((dv) => {
  dv.addEventListener("click", () => {
    console.log("CLICK!!");

    const para = dv.nextElementSibling;

    if (para.classList.contains("hidden")) {
      paras = document.querySelectorAll(".accordion-box");
      paras.forEach((one_para) => {
        one_para.classList.add("hidden");
        one_para.previousElementSibling.firstElementChild.nextElementSibling.classList.remove("rotate")

        
console.log(one_para.previousElementSibling.firstElementChild.nextElementSibling)   //Debugging purposes only :)
      });
      
      para.classList.remove("hidden"); //Expand

      dv.firstElementChild.nextElementSibling.classList.add("rotate");


    } else {
      para.classList.add("hidden");
      dv.firstElementChild.nextElementSibling.classList.remove("rotate")

      
    }
  });
});
