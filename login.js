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


function login(event){
    event.preventDefault();
    let statusCode = -1
    const email = document.getElementById("loginEmail").value
    const password = document.getElementById("loginPassword").value
    const body = {email,password}
    fetch("http://127.0.0.1:8000/api/login",{
        method:"POST",
        headers: { 'Content-Type': 'application/json' },
        body:JSON.stringify(body)
    }).then((response)=>{
        statusCode=response.status
        return response.json()
    })
    .then((data)=>{
        if(statusCode===200)
        {
            alert(data.message)
            localStorage.setItem("isLogged",true)
            window.location.href="/index.html"            
        }else{
            alert(data.message)
        }
    }).catch((err)=>{
        alert(data.message)
    })
}