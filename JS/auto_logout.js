function session_del(){
    if(sessionStorage){
        sessionStorage.removeItem("Session_Storage_id");
        sessionStorage.removeItem("Session_Storage_pass");

        var date = new Date();
        date.setTime(date.getTime() + (5 * 60 * 1000));
        var expires = "expires=" + date.toUTCString();
        document.cookie = "id=; " + expires + "; path=/";
    }
}

function auto_logout(){
    setTimeout(function() {
        alert('자동으로 로그아웃 합니다.')
        session_del();
        window.location.href = "index.html";
    }, 300000); // 5분
}

window.onload = auto_logout;