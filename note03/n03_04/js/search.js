const searchInput = document.getElementById("search-input");

const showSearchResult = () => {
    let searchWord = searchInput.value;
    console.log(`https://google.com/search?q=${searchWord}`)
    window.location.href = `https://google.com/search?q=${searchWord}`;
    searchWord = "";
};

const enterKey = (event) => {
    event.preventDefault();
    if (event.code === "Enter") {
        showSearchResult();
    }
};

searchInput.addEventListener("keypress", (event) => {
    enterKey(event);
});
