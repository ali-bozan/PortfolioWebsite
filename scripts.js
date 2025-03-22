document.addEventListener("DOMContentLoaded", () => {
    console.log("Welcome to Amelia's portfolio!");
    document.querySelectorAll("nav a").forEach(link => {
        link.onclick = e => {
            e.preventDefault();
            document.querySelector(link.getAttribute("href")).scrollIntoView({ behavior: 'smooth' });
        };
    });
});