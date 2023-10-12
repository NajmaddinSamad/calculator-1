const result = document.querySelector('.result')

const keys = document.querySelectorAll('button')

keys.forEach(key=>{
    key.addEventListener('click', calculate);
});
function calculate(){
    const buttonText = this.textContent
    if(buttonText==="AC"){
        result.innerText = ""
        return;
    }
    if(buttonText === "DEL"){
        result.innerText = result.textContent.substr(0, result.textContent.length -1);
        return;
    }
    if(buttonText === "="){
        result.innerText = eval(result.textContent);
        return;
    }
    else{
        result.innerHTML += buttonText
    }
}