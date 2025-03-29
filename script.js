document.getElementById("feedbackForm").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Thanks for your feedback!");
    this.reset();
});
