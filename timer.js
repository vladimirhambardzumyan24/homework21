document.querySelector("#input").addEventListener("blur", () => {
  let inpValue = document.getElementById("input").value;

  let h = inpValue.slice(0, inpValue.indexOf(":"));
  let m = inpValue.slice(inpValue.indexOf(":") + 1, inpValue.lastIndexOf(":"));
  let s = inpValue.slice(inpValue.lastIndexOf(":") + 1);

  let interval = function () {
    let setId = setInterval(function () {
      if (s == 0) {
        if (m > 0) {
          m = m - 1;
          s = 60;
        } else if (h > 0) {
          h = h - 1;
          m = 59;
          s = 60;
        } else if (h == 0 && m == 0 && s == 0) {
          alert("time");
        }
      }
      s--;
      document.querySelector("#h1").innerHTML = `${h}h ${m}m ${s}s`;
    }, 1000);
    
    document.querySelector("#stop").addEventListener("click", () => {
      clearInterval(setId);
    });
  };
  document.querySelector("#reset").addEventListener("click", () => {
    h = inpValue.slice(0, inpValue.indexOf(":"));
    m = inpValue.slice(inpValue.indexOf(":") + 1,inpValue.lastIndexOf(":"));
    s = inpValue.slice(inpValue.lastIndexOf(":") + 1);
    interval()
    console.log(h,m,s)
});
  document.querySelector("#start").addEventListener("click", interval);
});
