const check_input = ()  => {
    const logoutForm = document.getElementById('logout_form');
    const loginBtn = document.getElementById('login_btn');

    logoutForm.submit();
};

document.getElementById("logout_btn").addEventListener('click', check_input);
