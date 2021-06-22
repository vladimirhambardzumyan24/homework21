document.querySelector("#input").addEventListener("blur", () => {
  let inpValue = document.getElementById("input").value;
  let feykId=Infinity
  let h = inpValue.slice(0, inpValue.indexOf(":"));
  let m = inpValue.slice(inpValue.indexOf(":") + 1, inpValue.lastIndexOf(":"));
  let s = inpValue.slice(inpValue.lastIndexOf(":") + 1);

  let interval = function () {
    document.querySelector("#start").disabled=true
    let setId = setInterval(function () {
        
        if(s>60){
            m=+m+Math.floor(s/60)
            s=+s%60
        }
        if(m>60){
            h=+h+Math.floor(m/60)
            m=+m%60
        }
      if (s == 0) {
        if (m > 0) {
          m = m - 1;
          s = 60;
        } else if (h > 0) {
          h = h - 1;
          m = 59;
          s = 60;
        } else if (h == 0 && m == 0 && s == 0) {
          clearInterval(setId);
          alert("time");
        }
      }
      if (h != 0 || m != 0 || s != 0) {
        s--;
      }
      document.querySelector("#h1").innerHTML = `${h}h ${m}m ${s}s`;
    }, 1000);

    feykId=setId
    
    document.querySelector("#stop").addEventListener("click", () => {
      clearInterval(setId);
    document.querySelector("#start").disabled=false
    });
  };
  document.querySelector("#reset").addEventListener("click", () => {
    h = inpValue.slice(0, inpValue.indexOf(":"));
    m = inpValue.slice(inpValue.indexOf(":") + 1,inpValue.lastIndexOf(":"));
    s = inpValue.slice(inpValue.lastIndexOf(":") + 1);
    clearInterval(feykId);

    interval()
    console.log(h,m,s)
});
  document.querySelector("#start").addEventListener("click", interval);
});
