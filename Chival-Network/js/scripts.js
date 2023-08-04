
let prohib = document.getElementById("prohibit")
let user;
let pass;
let chivalpoints;



function checkinfo() {
    var user = document.getElementById("username").value
    var pass = document.getElementById("password").value
    var chivalpoints = document.getElementById("cp").value
    
   

    if(user == "Admin" && pass == atob('dXNlcjEyMzQ=')) {
        var mainuser = document.getElementById("suspended_page")
        var poop = document.getElementById("main-user")
        var cock = poop.textContent
        mainuser.style.display = "block"
        prohib.style.display = "none"
        cock = "Admin"
        console.log("as adshit")
        localStorage.chivalpoints = 0;
    } else if(user == "Money58" && pass == atob('ODQyNQ==')) {
        prohib.style.display = "none"
        console.log(" as manoying")
        localStorage.chivalpoints = "∞";
    } else if(user == "Sineadiii" && pass == atob('bG9s')) {
        prohib.style.display = "none"
        console.log(" as sineaddd")
        localStorage.chivalpoints = 0;
    }

   localStorage.user = user;
   localStorage.chivalpoints
   console.log("set to ", localStorage.user)
    
}
var pick = "";
function pickuser() {
    
    document.getElementById("text").textContent =  "Welcome, " + localStorage.user;
    console.log("now is ", localStorage.user, ",Welcome")
    document.getElementById("cp").textContent = localStorage.chivalpoints + " C€";
}


setInterval(()=>{console.log("now"); pickuser()}, 100)


function lol() {
    prohib.style.display = "block"
    
    console.log("mmmmm jenny")
  
}

