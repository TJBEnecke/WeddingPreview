const form = document.querySelector("form")

form.addEventListener("submit",(e)=>{
    e.preventDefault()

    const username = form.username.value
    const confirm1 = form.confirm1.value

    const authenticated = authentication(username,confirm1)

    if(authenticated){
        window.location.href = "All.html"
    }else{
        alert("UserName or Confrim block invalid")
    }
})

// function for checking username and password

function authentication(username,confirm1){
    if(username === "1" && confirm1 === "1"){
        return true
    }else{
        return false
    }
}




