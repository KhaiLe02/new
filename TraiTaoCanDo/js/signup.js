function signup(){
    var adminInfo = {
        username: "admin",
        password: "admin"
    };
    var username =document.getElementById("Username").value;
    var password =document.getElementById("Password").value;
    if(username==adminInfo.username&&password==adminInfo.password){
        alert("Tồn tại !!!!!!");
    }
    else{
        alert("Welcome User");
        window.location.href="user.html";
    }
}
const Sign=document.getElementById("signupbtn");
Sign.addEventListener("click", (e) => {
    e.preventDefault();
    signup();
});



