document.addEventListener("submit", function (event) {
    event.preventDefault();

    let peName = document.getElementById("name").value;
    let peFeedback = document.getElementById("feedbackTxt").value;

    let feedbackList = [];

    if (localStorage.getItem("feedbackList") !== null) {
        feedbackList = JSON.parse(localStorage.getItem("feedbackList"));
    }
    
    let newFeedback = new Feedback(peName, peFeedback);
    feedbackList.push(newFeedback);
    localStorage.setItem("feedbackList", JSON.stringify(feedbackList));

    // Reset the form using the form's ID
    document.getElementsByClassName("form").reset();

    refreshFeedback();
});

function Feedback(peName, peFeedback) {
    this.id = Date.now();
    this.name = peName;
    this.feedback = peFeedback;
}

function refreshFeedback() {
    let feedbackDisplay = document.querySelector(".feedbacklist-container");
    let feedbackList = [];
    let feedbackData = "";

    if (localStorage.getItem("feedbackList") !== null) {
        feedbackList = JSON.parse(localStorage.getItem("feedbackList"));

        for (let feedback_ of feedbackList) {
            feedbackData += `<div class="content-container"><div class="name-container">${feedback_.name}</div><div class="testimonial-container">${feedback_.feedback}</div></div>`;
        }
        feedbackDisplay.innerHTML = feedbackData;
    }
}


