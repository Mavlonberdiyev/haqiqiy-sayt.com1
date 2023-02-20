

let jami = document.querySelector('#jami')
jami.addEventListener('click', qosh)


function qosh(){
let a = document.querySelector('#a').value
let b = document.querySelector('#b').value
let operator = document.querySelector('#opirator').value
if(operator === '+'){
    let res = document.querySelector('#res').innerHTML = Number(a) + Number(b)
} else if(operator === '-'){
    let res = document.querySelector('#res').innerHTML = Number(a) - Number(b)
}else if(operator === '*'){
    let res = document.querySelector('#res').innerHTML = Number(a) * Number(b)
}else if(operator === '/'){
    let res = document.querySelector('#res').innerHTML = Number(a) / Number(b)
}else{

}
}




let jonat = document.querySelector('#jonat')

jonat.addEventListener('click', info)
function info(){
    let ism = document.querySelector('#ism').value
    let yosh = document.querySelector('#yosh').value
    let kasb = document.querySelector('#kasb').value
    let inson = document.querySelector('#inson').checked
    
    document.querySelector('tbody').innerHTML += `
    <tr>
    <td>${ism}</td>
    <td>${yosh}</td>
    <td>${kasb}</td>
    <td>${inson ? 'odam' : 'odam emas'}</td>
    </tr>
    `




}