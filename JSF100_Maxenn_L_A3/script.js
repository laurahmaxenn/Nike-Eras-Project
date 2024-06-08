document.addEventListener("DOMContentLoaded", function () {
  var modal = document.getElementById("modal");
  var AddBtn = document.getElementById("addToBag");
  var cartBtn = document.getElementById("goToCart");

  document.addEventListener("click", function (event) {
    if (event.target.id == "modal") {
      closeModal();
    }
  });
  if (AddBtn != null) {
    AddBtn.addEventListener("click", function (event) {
      openModal();
    });
  }
  if (cartBtn != null) {
    cartBtn.addEventListener("click", function (event) {
      window.location.href = "/cart/";
    });
  }
});

function openModal() {
  var modal = document.getElementById("modal");
  modal.classList.remove("hidden");
}
function closeModal() {
  var modal = document.getElementById("modal");
  modal.classList.add("hidden");
}

// Animations

// Page Loading: "Slow"" is the ease timing/way that the page fades/loads in. It also highlights the animation of the shoes ("results")
gsap.from("body", { duration: 2, opacity: 0, delay: 0.5, ease: "slow" });

// Grouping Elements into a Variable. This is calling on the elements: Shoes, and the Jordan/Nike logos and the code below will tell them to do the animation. 
const scaleElements = document.querySelectorAll( // I named them all scaleElements to refer to them as one singular variable
  ".result, .jordan-logo, .nike-logo"
);

// For Each Element, Do this: 
scaleElements.forEach((element) => {

  element.addEventListener("mouseenter", () => {
    // It's telling them once the mouse goes over the shoe it needs to scale up
    gsap.to(element, {
      scale: 1.2, // the full scale size is 1.2
      duration: 0.3, // it needs to spend 0.3 seconds getting to its full scale
    });
  });

  element.addEventListener("mouseleave", () => {
    // this is telling the same as above, but opposite. So when the mouse leaves the shoe area
    gsap.to(element, {
      scale: 1, // it scales back to normal
      duration: 0.3, // and it takes the same amount of time to scale back for consistency
    });
  });
});

// Calling on the shoes. This line is calling upon all the shoes on the page and the code under it goes on to explain what to do with them
const results = document.querySelectorAll(".result");

 // This is the animation that will occur to the shoes
function fadeInAndSlideUp() {


  results.forEach((result, index) => {  // Each Shoe ("result") needs to follow the below "if" function
    const isVisible = result.getBoundingClientRect().top <= window.innerHeight;

    if (isVisible) {
      // this is telling the code to check what shoes are on the screen, and apply the below delay to those visible.

      gsap.to(result, {
        // this is the gsap.to function - to means the previous state was one thing, and it's now changing to this
        opacity: 1,
        y: 0,
        duration: 0.4,
        delay: index * 0.1, // Stagger each element with a delay of 0.1 seconds per result.
        ease: "power2.out", // This is the animation speed / curve under "eases" on the greensock website that I chose
        //as it runs smooth and suits the page well
      });
    }
  });
}

fadeInAndSlideUp();
window.addEventListener("scroll", fadeInAndSlideUp); // This is telling the page that when the user scrolls down and the page loads, run the above

// Refrences:

// Developer Mozilla. (2023). EventTarget: addEventListener() method.
//  https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener

// GreenSock. (2023). Docs.
// https://greensock.com/docs/v3
