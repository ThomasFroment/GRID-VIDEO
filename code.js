const demo = document.querySelector(".demo");

/* listen to mouse click and add a class to the li closest to the mouse */
demo.addEventListener("click", ({ target }) => {
    const bloc = target.closest("li");
    bloc.classList.toggle("overlay");
}, { passive: true });
