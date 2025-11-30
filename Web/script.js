const slider = document.querySelector(".review-slider");
let isDown = false;
let startX;
let scrollLeft;

if (slider) {
  slider.addEventListener("mousedown", (e) => {
    isDown = true;
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
  });

  slider.addEventListener("mouseleave", () => {
    isDown = false;
  });

  slider.addEventListener("mouseup", () => {
    isDown = false;
  });

  slider.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 2; // scroll speed
    slider.scrollLeft = scrollLeft - walk;
  });

  setInterval(() => {
    slider.scrollLeft += 230;
    if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth) {
      slider.scrollLeft = 0;
    }
  }, 3000);
}




const heroForm = document.querySelector(".hero-form");

if (heroForm) {
  heroForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = heroForm.querySelector("input[placeholder='Name']").value.trim();
    const phone = heroForm.querySelector("input[placeholder='Phone']").value.trim();

    if (name === "" || phone === "") {
      alert("Please fill all fields");
      return;
    }

    if (!/^[0-9]{10}$/.test(phone)) {
      alert("Please enter a valid 10-digit phone number");
      return;
    }

    alert("Form submitted successfully!");
  });
}

const buttons = document.querySelectorAll(".btn-primary");

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    window.scrollTo({
      top: 600,
      behavior: "smooth",
    });
  });
});