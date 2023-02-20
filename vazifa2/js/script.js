
let jonat = document.querySelector('#jonat')

jonat.addEventListener('click', info)
function info(){
    let ism = document.querySelector('#ism').value
    let yosh = document.querySelector('#yosh').value
    let sana = document.querySelector('#sana').value
    let kasb = document.querySelector('#kasb').value
    
    document.querySelector('tbody').innerHTML += `
    <tr>
    <td>${ism}</td>
    <td>${yosh}</td>
    <td>${sana}</td>
    <td>${kasb}</td>
    </tr>
    `




}