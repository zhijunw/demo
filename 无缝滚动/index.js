  var area = document.getElementById("moocBox");
  var con1 = document.getElementById("con1");
  var con2 = document.getElementById("con2");
  con2.innerHTML = con1.innerHTML; //克隆
  con3.innerHTML = con1.innerHTML; //克隆

  area.scrollTop = 0;


  function scroll() {
      if (area.scrollTop >= con1.offsetHeight) {
          area.scrollTop = 0;
      } else {
          area.scrollTop++
      }
  }
  var time = setInterval("scroll()", 50);
  area.onmouseover = function() {
      clearInterval(time);
  }
  area.onmouseout = function() {
     time = setInterval("scroll()", 50);
  }
