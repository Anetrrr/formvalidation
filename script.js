const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const repwd = document.getElementById('repwd')

form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkInputs()
})

const checkInputs = () =>{
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const repwdValue = repwd.value.trim();

    if(usernameValue === ''){
        setErrorFor(username, 'Username cannot be blank!')
    }
        else{
            setSuccessFor(username)
        }
        if(emailValue === ''){
            setErrorFor(email, 'Email cannot be blank abeg!')
        } else if (!isEmailValid(emailValue)){
            setErrorFor(email, 'Wrong email format!')
        }
            else{
                setSuccessFor(email)
            }
        if(passwordValue === ''){
            setErrorFor(password, 'Ogbeni, password cannot be blank!')
        }else {
            setSuccessFor(password)
        }
        if(repwdValue === ''){
            setErrorFor(repwd, 'This cannot be blank')

        }else if (repwdValue !== password){
            setErrorFor(repwd, 'Passwords do not match!')
        }
    }

const isEmailValid = (email) => {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

const setErrorFor = (input, message) => {
 const formControl = input.parentElement;
 const small = formControl.querySelector('small');
 formControl.className = 'form-control error';
 small.innerText = message;
}
const setSuccessFor = (input) => {
    const formControl = input.parentElement;
    formControl.className = 'form-control success'
}