let loadingImages = document.querySelectorAll("img[data-src]");


const optionsImages = {
    threshold: 0,
    rootMargin: "0px 0px 50px 0px"
};

const loadImages = (image) => {  
    image.setAttribute("src", image.getAttribute("data-src"));
    image.onload = () => {
        image.removeAttribute("data-src");
        
    };
};


if("IntersectionObserver" in window) {
    const imageObserver = new IntersectionObserver((items, observer) => {
        items.forEach((item) => {
        if (item.isIntersecting) {
            loadImages(item.target);
            observer.unobserve(item.target);
        }
        });
    }, optionsImages);

    loadingImages.forEach((img) => {
        imageObserver.observe(img);
    });
}
else {
    loadingImages.forEach((img) => {
        loadImages(img);
    });
}