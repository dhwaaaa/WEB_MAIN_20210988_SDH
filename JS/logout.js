const check_input = ()  => {
    const logoutForm = document.getElementById('logout_form');
    session_del()
    logoutForm.submit();
};

function session_del(){
    if(sessionStorage){
        sessionStorage.removeItem("Session_Storage_id");
        sessionStorage.removeItem("Session_Storage_pass");
        
        document.cookie = "id=; " + "expires = Mon, 01, Jan 0000 00:00:00 UTC" + "; path=/";
        alert("로그아웃 버튼 클릭 확인 : 세션 스토리지 및 쿠키를 삭제합니다.");
    }
    else{
        alert("세션 스토리지 지원 X");
    }
}

document.getElementById("logout_btn").addEventListener('click', check_input);
