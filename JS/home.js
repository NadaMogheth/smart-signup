const Welcomeuser= document.querySelector("#Welcomeuser")
if(localStorage.getItem("seeionusernam")){
    const userName =localStorage.getItem("seeionusernam");
    console.log(userName);
    Welcomeuser.innerHTML=`Welcome ${userName}`;

}
else{
    setTimeout(() => {
        window.location.href="index.html";
    }, 2000);
}

let btnLogout = document.getElementById("btnLogout")
btnLogout.addEventListener('click',function(){
    window.location.href="index.html";

})