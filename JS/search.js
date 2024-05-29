document.getElementById("search_button_msg").addEventListener('click', search_message);

function search_message(){alert("검색을 수행할까요?");}

function search_message(){alert("검색을 수행합니다!");}

// 같은 이름의 함수를 중첩하면 에러는 나지않고, 밑에있는 함수가 우선순위가 높은것같다.
// 실제로 아래의 메시지가 출력되는걸 확인할 수 있음.