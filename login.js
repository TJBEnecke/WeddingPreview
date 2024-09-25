const form = document.querySelector("form")

form.addEventListener("submit",(e)=>{
    e.preventDefault()

    const username = form.username.value
    const password = form.password.value

    const authenticated = authentication(username,password)

    if(authenticated){
        window.location.href = "about.html"
    }else{
        alert("Username or Password invalid")
    }
})

// function for checking username and password

function authentication(username,password){
    if(username === "Candice" && password === "3767"){
        return true
    }else{
        return false
    }
}
















