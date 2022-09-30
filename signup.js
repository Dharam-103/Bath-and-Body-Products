let form = document.querySelector("form")

let arrsignup = JSON.parse(localStorage.getItem("arraysignup")) || []

form.addEventListener("submit", function(event){
    event.preventDefault()

    let obj= {
        
        firstname:form.fname.value,
        lastname:form.lname.value,
        emails:form.email.value,
        confemail:form.cemail.value,
        zip:form.zip.value,
        phone:form.phone.value,
        password:form.pass.value,

    }
    let flag="no"
    if(obj.firstname=="" || obj.lastname=="" || obj.emails=="" || obj.confemail=="" || obj.zip=="" || obj.phone=="" || obj.password==""){
        flag="yes"
    }
    if(flag=="yes"){
        alert("All Field Required")
    }
    else{
        arrsignup.push(obj)
        alert("sign up successfull")
        localStorage.setItem("arraysignup", JSON.stringify(arrsignup))
        window.location.href="signin.html"
    }
})