let header = document.querySelector("header")
let listA = document.querySelectorAll("header ul il a")

const handleScroll = () => {
    if (document.documentElement.scrollTop > 200) {
        header.style.backgroundColor = "white";
        header.style.top = "0px";
        listA.forEach((a) => {
            a.style.color = "gray"
        });
    }
    else {
        header.style.backgroundColor = "transparent";
        header.style.top = "10px";
        listA.forEach((a) => {
            a.style.color = "white";
        });
    }
};

window.onscroll = handleScroll;