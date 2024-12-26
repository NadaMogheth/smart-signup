let signupNameInput = document.getElementById("signupName");
let signupEmailInput = document.getElementById("signupEmail");
let signupPasswordInput = document.getElementById("signupPassword");
let buttonsignUp = document.getElementById("signUp");
let existmasege=document.getElementById("exist");
let tologlink=document.getElementById("tolog");
let userList = [];

if (localStorage.getItem("uses") !== null) {
    userList = JSON.parse(localStorage.getItem("uses"));
}

buttonsignUp.addEventListener('click',function(){
    if (signupNameInput.value === "" || signupEmailInput.value === "" || signupPasswordInput.value === "") {
        existmasege.innerHTML = "Please fill all fields!";
        existmasege.style.color = "red";
        return;
    }
    let userdata={
        name:signupNameInput.value ,
        email:signupEmailInput.value,
        password:signupPasswordInput.value,
    }
    let emailExists = userList.some(user => user.email === signupEmailInput.value);

    if (emailExists) {
        existmasege.innerHTML = "Email already exists!";
        existmasege.style.color = "red";
    }
    else{
        userList.push(userdata);
        localStorage.setItem("uses", JSON.stringify(userList));
        setTimeout(() => {
            window.location.href="index.html"
          }, 2000);
        clearform();
        existmasege.innerHTML = "SUCCESS";
        existmasege.style.color = "green";
       
    }

     
   
})


function  clearform(){
    signupNameInput.value=null; 
    signupEmailInput.value=null;
    signupPasswordInput.value=null;
}
tologlink.addEventListener('click',function(){
    // window.location='./HTML/index.html'
    console.log("nada")
})