const svg = document.getElementById("svgCanvas");
const undoBtn = document.getElementById("undoBtn");

let drawing = false;
let circles = [];

function drawCircle(e) {
    const rect = svg.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const circle = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "circle"
    );

    circle.setAttribute("cx", x);
    circle.setAttribute("cy", y);
    circle.setAttribute("r", 6);
    circle.setAttribute("fill", "#3b82f6");

    svg.appendChild(circle);
    circles.push(circle);
}

svg.addEventListener("mousedown", (e) => {
    drawing = true;
    drawCircle(e); // 👈 draw on tap
});

svg.addEventListener("mousemove", (e) => {
    if (!drawing) return;
    drawCircle(e);
});

svg.addEventListener("mouseup", () => {
    drawing = false;
});

svg.addEventListener("mouseleave", () => {
    drawing = false;
});

undoBtn.addEventListener("click", () => {
    if (circles.length === 0) return;
    svg.removeChild(circles.pop());
});
