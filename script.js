const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {

    reveals.forEach((reveal) => {

        const top = reveal.getBoundingClientRect().top;

        if (top < window.innerHeight - 100) {
            reveal.classList.add("active");
        }

    });

});