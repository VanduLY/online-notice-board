// script.js
document.addEventListener("DOMContentLoaded", () => {
    const noticeForm = document.getElementById("notice-form");
    const noticeText = document.getElementById("notice-text");
    const noticesDiv = document.getElementById("notices");

    // Load notices from localStorage on page load
    const loadNotices = () => {
        const notices = JSON.parse(localStorage.getItem("notices")) || [];
        noticesDiv.innerHTML = "";
        notices.forEach((notice) => {
            addNoticeToBoard(notice);
        });
    };

    // Add a single notice to the board
    const addNoticeToBoard = (notice) => {
        const noticeDiv = document.createElement("div");
        noticeDiv.classList.add("notice");
        noticeDiv.textContent = notice;
        noticesDiv.appendChild(noticeDiv);
    };

    // Save a new notice
    const saveNotice = (notice) => {
        const notices = JSON.parse(localStorage.getItem("notices")) || [];
        notices.push(notice);
        localStorage.setItem("notices", JSON.stringify(notices));
    };

    // Handle form submission
    noticeForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const notice = noticeText.value.trim();
        if (notice) {
            addNoticeToBoard(notice);
            saveNotice(notice);
            noticeText.value = ""; // Clear the textarea
        }
    });

    // Load notices initially
    loadNotices();
});
