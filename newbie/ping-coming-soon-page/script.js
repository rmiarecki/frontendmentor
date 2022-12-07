let form = document.getElementById('form');
let btnSbmt = document.getElementById('btnSbmt');
let inputEmail = document.getElementById('inputEmail');
let valid = document.getElementById('error');

let re = /\S+@\S+\.\S+/;

let check = () => {
    if(inputEmail.value === '') {
        valid.style.display = 'inline';
        valid.innerHTML = "Whoops! It looks like you forgot to add your email";
        inputEmail.style.border = '1px solid hsl(354, 100%, 66%)';
    } else if (!re.test(inputEmail.value)) {
        valid.style.display = 'inline';
        inputEmail.style.border = '1px solid hsl(354, 100%, 66%)';
        valid.innerHTML = "Please provide a valid email address";
    } else {
        valid.style.display = 'none';
        inputEmail.style.border = '1px solid black;';
    }
}

btnSbmt.addEventListener('click', check);

// Whoops! It looks like you forgot to add your email
    

