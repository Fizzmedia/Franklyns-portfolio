window.addEventListener("load", () => {
    const loader =
document.getElementById("loader");

    if (loader) {
        setTimeout(() => {
            loader.classList.add("loader-hidden");

            setTimeout(() => {
                loader.remove();
            }, 600);
        }, 1200);
    }   
});

 const button = document.getElementById("theme-toggle");

    
 button.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
});

const reveals =
document.querySelectorAll(".reveal");

function revealSections() {
    reveals.forEach((section) => {
        const sectionTop =
section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (sectionTop < windowHeight - 100) {
            section.classList.add("active");
        }
    });
}

window.addEventListener("scroll", revealSections);
window.addEventListener("load", revealSections);

