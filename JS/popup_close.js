var close_time;
var close_time2 = 50;

clearTimeout(close_time);
close_time= setTimeout("close_window()", 50000);
show_time();

function show_time(){
        let divClock = document.getElementById('Time');
        divClock.innerText = close_time2; // 10초 삽입 시작
        close_time2--; // 1초씩 감소
    setTimeout(show_time, 1000); //1초마다 갱신
}

function close_window() { // 함수 정의
    window.close(); // 윈도우 닫기
}