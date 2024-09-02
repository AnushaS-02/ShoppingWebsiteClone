const searchInput = document.querySelector('.search');

searchInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        const query = searchInput.value;
        alert(`You searched for: ${query}`);
    }
});
function goBack() {
    window.history.back();
}
