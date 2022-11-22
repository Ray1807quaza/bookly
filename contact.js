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

function submitForm(event){
    event.preventDefault();
    const name = document.getElementById("contactName").value
    const phone = document.getElementById("contactPhone").value
    const email = document.getElementById("contactEmail").value
    const comment = document.getElementById("contactComment").value
    let body = {name,phone,email,comment}
    fetch("http://127.0.0.1:8000/api/contact",{
        method:"POST",
        headers: { 'Content-Type': 'application/json' },
        body:JSON.stringify(body)
    }).then((response)=>{return response.json()})
    .then((data)=>{
        alert(data.message)
        window.location.href="/index.html"
    }).catch((err)=>{
        alert(data.message)
    })
}