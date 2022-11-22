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


function register(event){
    event.preventDefault();
    let statusCode = -1
    const name = document.getElementById("registerName").value
    const email = document.getElementById("registerEmail").value
    const password = document.getElementById("registerPassword").value
    const confirmPassword = document.getElementById("registerConfirmPassword").value
    console.log(password==confirmPassword)
    if(password!=confirmPassword)
    {
        alert("Password & Confirm Password doesn't match")
    }else{
        let body={name,email,password}
        fetch("http://127.0.0.1:8000/api/register",{
            method:"POST",
            headers: { 'Content-Type': 'application/json' },
            body:JSON.stringify(body)
        }).then((response)=>{
        statusCode=response.status
            return response.json()
        })
        .then((data)=>{
            if(statusCode===201)
        {
            alert(data.message)
            window.location.href="/login.html"        
        }else{
            alert(data.message)
        }
        }).catch((err)=>{
            alert(data.message)
        })
    }
}