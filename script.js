// https://manuel.pinto.dev
$(document).ready(function(){
    $(".veen .rgstr-btn button").click(function(){
        $('.veen .wrapper').addClass('move');
        $(".veen .login-btn button").removeClass('active');
        $(this).addClass('active');
    });
    $(".veen .login-btn button").click(function(){
        $('.veen .wrapper').removeClass('move');
        $(".veen .rgstr-btn button").removeClass('active');
        $(this).addClass('active');
    });
});
$(document).ready(function(){
    function centerHeading() {
        var headingWidth = $(".heading").width();
        var windowWidth = $(window).width();
        var leftMargin = (windowWidth - headingWidth) / 2;
        $(".heading").css("margin-left", leftMargin);
    }
    centerHeading();
    $(window).resize(centerHeading);
});
function signup() {
    var username = document.getElementById("signupUsername").value;
    var password = document.getElementById("signupPassword").value;
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
    alert("Signup successful! Please login.");
}
  
function login() {
    var username = document.getElementById("loginUsername").value;
    var password = document.getElementById("loginPassword").value;
    /*var storedUsername = localStorage.setItem("username",username);
    var storedPassword = localStorage.setItem("password",password);*/
    var storedUsername = localStorage.getItem("username",username);
    var storedPassword = localStorage.getItem("password",password);

   /* var a,b;
    a="jasleenkaur11rps@gmail.com";
    b="123456";*/
    
    if (username == storedUsername && password == storedPassword) {
      window.location.href = "newpage.html";
    } else {
      alert("Invalid e-mail or password!");
    }
}

/* document.getElementById("login").addEventListener("submit", login); */