document.getElementById('login-btn').addEventListener('click', function() {
    const emailFild = document.getElementById('email');
    const Email = emailFild.value;
    const passwordFild = document.getElementById('password');
    const Password = passwordFild.value;
    if (Email == 'sajjat@gmail.com' && Password == '12345') {
        console.log('successfull');
        window.location.href = "bank.html";
    }

})