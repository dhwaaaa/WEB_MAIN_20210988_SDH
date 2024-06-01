const search_message = () => {
    alert("검색을 수행합니다!");
}
function googleSearch() {
    const searchTerm = document.getElementById("search_input").value;
    if (searchTerm === '' || searchTerm === '병') {
        return false;
    }
    const googleSearchUrl = `https://www.google.com/search?q=${
        encodeURIComponent(searchTerm)
    }`;
    window.open(googleSearchUrl, "_blank");
    return false;
}
document.getElementById("search_button_msg").addEventListener('click', search_message);