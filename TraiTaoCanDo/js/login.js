function Log(){
    var adminInfo = {
        username: "admin",
        password: "admin"
    };
    var username =document.getElementById("Username").value;
    var password =document.getElementById("Password").value;
    if(username==adminInfo.username&&password==adminInfo.password){
        alert("Welcome Admin");
        window.location.href="admin.html";
    }
    else{
        alert("Welcome User");
        window.location.href="user.html";
    }
}
const Login=document.getElementById("Loginbtn");
Login.addEventListener("click", (e) => {
    e.preventDefault();
    Log();
});



