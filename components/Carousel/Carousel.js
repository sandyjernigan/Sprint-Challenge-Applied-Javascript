class Carousel {
    constructor(img){
        // assign this.img to the carousel image DOM reference
        this.img = img;
    }
}

// Reference to the carousel
let carousel = document.querySelector(`.carousel`);
console.log(carousel);

// // Reference to the images
// const carouselImages = document.querySelectorAll(`.carousel img`).forEach( img => new Carousel(img));

// // Current Index
// let carouselIndex = 0;

// Left Button Reference
// let leftButton = document.querySelector(`.left-button`);

// // Left Button Click Event
// leftButton.addEventListener('click', () => {
//     console.log("left button clicked");
// });

// function moveBackwards(){
//     console.log("left button clicked");
// }

// // Right Button Reference
// const rightButton = document.querySelector(`.right-button`);

// // Right Button Click Event
// leftButton.addEventListener('click', () => moveForward);

// function moveForward(){
//     console.log("right button clicked");
// }

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/
