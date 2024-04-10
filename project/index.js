let form = document.getElementById("signup")

form.addEventListener("submit",(e)=>
{
    e.preventDefault();

    let name1=document.getElementById("name").value
    let email1=document.getElementById("email").value
    let con = document.getElementById("country").value
    let mob=document.getElementById("phone").value
    let pass=document.getElementById("password").value

    let data={
        name:name1,
        email:email1,
        country:con,
        phone:mob,
        password:pass
    }

    console.log(data);
})

let form1 = document.getElementById("signin")

form1.addEventListener("submit",(e)=>
{
    e.preventDefault();

    let name2=document.getElementById("signin-name").value
    let email2= document.getElementById("signin-email").value
    let pass2=document.getElementById("signin-password").value

    let data={
        name:name2,
        email:email2,
        password:pass2
    }

    for (var key of Object.keys(data)) {
       console.table(key, " : ", data[key])
      }
})