export const scrollToSection = (event, id, position) => {
    event.preventDefault();
    console.log("Scrolling to section:", id);
    const element = document.getElementById(id);
    console.log(element)
    let targetPosition;
    if (element) {
        if (position === "center" || position == null) {
            targetPosition =
                element.getBoundingClientRect().top +
                window.scrollY -
                window.innerHeight / 2 +
                element.getBoundingClientRect().height / 2;
        } else if (position === "top") {
            targetPosition = element.getBoundingClientRect().top + window.scrollY;
        }

        window.scrollTo({
            top: targetPosition,
            behavior: "smooth",
        });
    }
};