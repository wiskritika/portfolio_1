document.addEventListener('DOMContentLoaded', function() {
    // Handle smooth scrolling to section on nav item click
    const navLinks = document.querySelectorAll('.nav-item');

    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const sectionId = this.getAttribute('data-section');
            const targetSection = document.getElementById(sectionId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop,
                    behavior: 'smooth'
                });
                 // Toggle active class on click
                 navLinks.forEach(item => item.classList.remove('active'));
                this.classList.add('active');

                 if (window.innerWidth <= 768) {
                    document.querySelector('.nav-links').classList.remove('active');
                }

            }

        });
    });

  //Handle Active class
     function setActiveNavItem() {
          const scrollPosition = window.scrollY;
            const sections = document.querySelectorAll('section');
             navLinks.forEach(item => item.classList.remove('active'));

              sections.forEach(section => {
                  if(scrollPosition >= section.offsetTop - 100 && scrollPosition < section.offsetTop + section.offsetHeight){
                   const sectionId = section.getAttribute('id');
                      const activeLink = document.querySelector(`.nav-item[data-section="${sectionId}"]`);
                      if(activeLink){
                          activeLink.classList.add('active');
                      }

                  }
            })
      }

     window.addEventListener('scroll', setActiveNavItem)


    // Handle mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinksList = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', function() {
        navLinksList.classList.toggle('active');
    });



    // Example of Contact Form Submission Handling (basic)
      const contactForm = document.querySelector('#contact form');

     if(contactForm){
         contactForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Prevent default form submission
            // Get form values
            const name = contactForm.querySelector('input[type="text"]').value;
            const email = contactForm.querySelector('input[type="email"]').value;
             const message = contactForm.querySelector('textarea').value;

             console.log("Form data", {name, email, message});
             // Basic validation
             if (name && email && message) {
                 alert("Form submitted!");
                 // Here, you would want to handle the form data with an AJAX call or a server-side script.
                 contactForm.reset();
             } else {
                 alert("Please fill out all fields!");
             }
         });
     }

});