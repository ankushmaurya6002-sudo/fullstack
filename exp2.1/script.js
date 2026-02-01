const textarea = document.getElementById("message");
const count = document.getElementById("count");

textarea.addEventListener("input", () => {
    count.textContent = textarea.value.length;
});
