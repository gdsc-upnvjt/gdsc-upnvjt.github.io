// home page typewriter 
var app = document.getElementById('typewriter');

var typewriter = new Typewriter(app, {
    loop: true
});
typewriter.typeString('UPN Veteran Jawa Timur')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Established since 2021')
    .pauseFor(2500)
    .deleteAll(7)
    .typeString('Lets connect, learn, and grow together!')
    .start();

    // faq questions
    const items = document.querySelectorAll('.accordion button');
    function toggleAccordion() {
      const itemToggle = this.getAttribute('aria-expanded');
      for (i = 0; i < items.length; i++) {
        items[i].setAttribute('aria-expanded', 'false');
      }
      if (itemToggle == 'false') {
        this.setAttribute('aria-expanded', 'true');
      }
    }
    items.forEach((item) => item.addEventListener('click', toggleAccordion));




  // hamburger menu 
  const hamburger = document.querySelector(".hamburger");
  const navbar = document.querySelector("#navbar");
  hamburger.addEventListener('click',()=>{
    navbar.classList.toggle("display");
    document.body.classList.toggle("disable-scroll")
  })
  
  const link=()=>{
  navbar.classList.remove("display");
  document.body.classList.remove("disable-scroll")
}