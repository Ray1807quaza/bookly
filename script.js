if(!localStorage.getItem("isLogged"))
{
  localStorage.setItem("isLogged",false)
}

if(localStorage.getItem("isLogged")=="true")
{
  const navbar = document.getElementById("navbar")
  navbar.innerHTML=`<li onclick="logout()"><a>Logout</a></li>`
}else{
  const navbar = document.getElementById("navbar")
  navbar.innerHTML=`<li><a href="register.html">Register</a></li><li><a href="login.html">Login</a></li>`
}

function logout(){
    alert("Logout Succesfully")
    localStorage.setItem("isLogged",false)
    window.location.href="/index.html"
}

function openpdf(a)
{
  if(localStorage.getItem("isLogged")=="true")
  {
    var button=document.getElementById("click");
   window.open(a+".pdf")
  }else{
    alert("Please login first")
    window.location.href="/login"
  }

}


var noOfBooks = document.querySelectorAll(".books").length;
var bookId;
function reply_click(e)
 {
   bookId =e;
 }

//alert(ii);


for(var i = 0; i<noOfBooks;i++){

switch(i){

case 1:
    document.querySelector('.imagee').src="1.png";


}


}
