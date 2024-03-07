const icon = document.querySelector("#icon"),
             range = document.querySelector("#input")
             slidevalue = document.querySelector("#slide-value");

range.addEventListener("input", () => {
    let rangeval = range.value;
    slidevalue.innerHTML = rangeval;
          
    if (rangeval > 0) {
        icon.classList.replace("uil-volume-mute", "uil-volume-down");
      } else {
        icon.classList.replace("uil-volume-down", "uil-volume-mute");
      }
      if (rangeval > 30) {
        icon.classList.replace("uil-volume-down", "uil-volume");
      } else {
        icon.classList.replace("uil-volume", "uil-volume-down");
      }
      if (rangeval > 80) {
        icon.classList.replace("uil-volume", "uil-volume-up");
      } else {
        icon.classList.replace("uil-volume-up", "uil-volume");
      }
    


});             