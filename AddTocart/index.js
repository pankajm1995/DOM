let form=document.querySelector("form")
console.log(form);
let tbody=document.querySelector("tbody")
let taskarr=[];
form.addEventListener("submit",(e)=>
{
    e.preventDefault()

    let addtocart={
        task:document.getElementById("task").value,
        priority:document.getElementById("priority").value
    }

        taskarr.push(addtocart)
        console.log(taskarr);
    tbody.innerHTML=null
        for(let i=0;i<taskarr.length;i++)
        {
            let tr= document.createElement("tr")

            let td1=document.createElement("td")
            let td2=document.createElement("td")
            let td3=document.createElement("td")

            td1.innerText=taskarr[i].task;
          
            td2.innerText=taskarr[i].priority

            td3.innerText="Delete"

            tr.append(td1,td2,td3)

            tbody.append(tr)
        }
      
        
})
