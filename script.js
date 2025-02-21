document.addEventListener('DOMContentLoaded', () => {
    // Handle Navbar Dropdown Toggle
    const dropdownToggle = document.querySelector('.nav-link.dropdown-toggle');
    const dropdownMenu = document.querySelector('.navbar-nav .dropdown-menu');
    dropdownToggle.addEventListener('click', () => {
      dropdownMenu.classList.toggle('show');
    });
  
    // Handle "Sign Up" Button
    const signUpButton = document.querySelector('.btn-dark');
    signUpButton.addEventListener('click', () => {
      alert("Sign Up button clicked. Implement a form or redirect.");
      // You can replace this alert with an actual signup form or redirection
    });
  
    // Scroll to Top Behavior
    const scrollToTopButton = document.createElement('button');
    scrollToTopButton.innerText = "Scroll to Top";
    scrollToTopButton.classList.add('btn', 'btn-dark', 'rounded-5', 'py-3', 'bolded');
    scrollToTopButton.style.position = 'fixed';
    scrollToTopButton.style.bottom = '20px';
    scrollToTopButton.style.right = '20px';
    scrollToTopButton.style.display = 'none';
    document.body.appendChild(scrollToTopButton);
  
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        scrollToTopButton.style.display = 'block';
      } else {
        scrollToTopButton.style.display = 'none';
      }
    });
  
    scrollToTopButton.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  
    // Slider for Section 3: Product Design, Illustration, etc.
    const sliderContainers = document.querySelectorAll('.slider-container');
    sliderContainers.forEach(container => {
      container.style.animationPlayState = 'paused'; // Pause slider on hover
      container.addEventListener('mouseover', () => {
        container.style.animationPlayState = 'paused';
      });
      container.addEventListener('mouseout', () => {
        container.style.animationPlayState = 'running';
      });
    });
  
    // Auto-play for the Hero Video (Optional)
    const heroVideo = document.querySelector('video');
    if (heroVideo) {
      heroVideo.play();
    }
  
    // Smooth Scrolling for internal links
    const internalLinks = document.querySelectorAll('a[href^="#"]');
    internalLinks.forEach(link => {
      link.addEventListener('click', (event) => {
        event.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        window.scrollTo({
          top: target.offsetTop - 100,
          behavior: 'smooth',
        });
      });
    });
  });
  
  