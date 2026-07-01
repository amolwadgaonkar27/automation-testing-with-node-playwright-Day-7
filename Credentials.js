const username = 'standard_user';
const password = 'secret_sauce';
const inputUsername = 'invalid_user';
const inputPassword = 'wrong_password';

if (username === inputUsername && password === inputPassword) {
    console.log('Login successful');
} else {
    console.log('Invalid credentials');
}

if (inputUsername !== username) {
    console.log("Username does not match");
}

if (inputPassword !== password) {
    console.log("Password does not match");
}