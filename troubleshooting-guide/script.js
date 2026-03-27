function toggleSolution(element) {
    const solution = element.querySelector(".solution");

    if (solution.style.display === "block") {
        solution.style.display = "none";
    } else {
        solution.style.display = "block";
    }
}

function searchIssues() {
    const input = document.getElementById("search").value.toLowerCase();
    const issues = document.querySelectorAll(".issue");
    const noResults = document.getElementById("noResults");

    let visibleCount = 0;

    issues.forEach(issue => {
        const text = issue.innerText.toLowerCase();

        if (text.includes(input)) {
            issue.style.display = "block";
            visibleCount++;
        } else {
            issue.style.display = "none";
        }
    });

    if (visibleCount === 0) {
        noResults.style.display = "block";
    } else {
        noResults.style.display = "none";
    }
}