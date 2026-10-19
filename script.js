
document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("searchInput");
    const searchButton = document.getElementById("searchButton");
    const subjectCards = document.querySelectorAll(".subject-card");

    if (!searchInput || !searchButton) {
        alert("Search box or button was not found.");
        return;
    }

    function searchSubjects() {
        const searchText = searchInput.value.toLowerCase().trim();
        let found = false;

        subjectCards.forEach(function (card) {
            const subjectName = card.innerText.toLowerCase();
            const matches = subjectName.includes(searchText);

            card.style.display = matches ? "" : "none";

            if (matches) {
                found = true;
            }
        });

        if (searchText !== "" && !found) {
            alert("No subject found. Try C Programming or Mathematics.");
        }
    }

    searchButton.addEventListener("click", searchSubjects);

    searchInput.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            searchSubjects();
        }
    });
});

const clearSearchButton = document.getElementById("clearSearchButton");

if (clearSearchButton) {
    clearSearchButton.addEventListener("click", function () {
        const searchInput = document.getElementById("searchInput");
        const subjectCards = document.querySelectorAll(".subject-card");

        searchInput.value = "";

        subjectCards.forEach(function (card) {
            card.style.display = "";
        });

        searchInput.focus();
    });
}
