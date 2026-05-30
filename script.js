const roles = [
    "Electronics Engineer",
    "Firmware Developer",
    "Full-Stack Developer",
    "PCB Designer",
    "Mechanical Designer",
    "IoT & Networking"
];
let r = 0, c = 0;
const el = document.getElementById('typing');
function type() {
    if (c < roles[r].length) { el.textContent += roles[r][c++]; setTimeout(type, 80); }
    else setTimeout(erase, 1500);
}
function erase() {
    if (c > 0) { el.textContent = roles[r].substring(0, --c); setTimeout(erase, 40); }
    else { r = (r + 1) % roles.length; setTimeout(type, 300); }
}
type();
