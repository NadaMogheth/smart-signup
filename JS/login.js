let signinEmailInput=document.getElementById("signinEmail");
let signinPasswordInput=document.getElementById("signinPassword");
let masg=document.getElementById("incorrect");
let buttonInpute=document.getElementById("buttonInpute");
let linksign=document.getElementById("tosign");
let userList = [];
if (localStorage.getItem("uses") !== null) {
     userList = JSON.parse(localStorage.getItem("uses"));
 }

 buttonInpute.addEventListener('click',function(){
        if(signinEmailInput.value.length==0 && signinPasswordInput.value.length==0){
             document.getElementById("incorrect").innerHTML="All inputs is required"
        }
     for(let i=0;i<userList.length;i++){
          if(userList[i].email===signinEmailInput.value&&userList[i].password==signinPasswordInput.value){
               localStorage.setItem("seeionusernam", JSON.stringify( userList[i].name));
               setTimeout(() => {
                    window.location.href="home.html"
                  }, 2000);              
          }
          else{
               masg.innerHTML="incorrect email or passowed";
               masg.style.color = "red";  
          }
     }
       
       
    })

//     linksign.addEventListener('click',function(){
//      window.location.href='../pagesign/signin.html'
//     })
