const modal = document.getElementById("modal");
const btn = document.querySelectorAll(".show-modal-window");
const close = document.querySelector(".close");

btn.forEach(button => {
    button.addEventListener("click", () => {
        console.log('eeeee');
        modal.style.display = "block";
    });
});
close.onclick = () => {
    modal.style.display = "none";
};

window.onclick = (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
};