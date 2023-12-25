export const scrollToSection = (event, id) => {
    event.preventDefault();
    console.log("Scrolling to section:", id);
    const element = document.getElementById(id);
console.log(element)
    if (element) {
        const targetPosition =
            element.getBoundingClientRect().top +
            window.scrollY -
            window.innerHeight / 2 +
            element.getBoundingClientRect().height / 2;

        window.scrollTo({
            top: targetPosition,
            behavior: "smooth",
        });
    }
};