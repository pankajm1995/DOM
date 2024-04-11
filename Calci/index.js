let keys= document.querySelectorAll("#keyboard >div");
console.log(keys);

let screen="";

// we get all div in array form now we apply for loop get data

for(let i=0;i<keys.length;i++)
{
    keys[i].addEventListener("click",(e)=>
{
    let currentkeys= e.target.innerText;

    if(currentkeys=="C"){
        screen=""
        document.querySelector("#display").innerText="";
    }
    else if(currentkeys=="=")
    {
        document.querySelector("#display").innerText=eval(screen);
    }
    else
    {
        screen=screen + currentkeys;
        document.querySelector("#display").innerText=screen;
    }
})
}