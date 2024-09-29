<script>
  // Menu Toggle
  const menuButton = document.querySelector('.Dark-dev07');
  const header = document.querySelector('.header');
  
  menuButton.addEventListener('click', () => {
    header.classList.toggle('menu-open');
  });

  // Modal for Let's Talk Button
  const talkButton = document.querySelector('.talk');
  const body = document.querySelector('body');
  
  talkButton.addEventListener('click', () => {
    const modal = document.createElement('div');
    modal.classList.add('modal');
    modal.innerHTML = `
      <div class="modal-content">
        <span class="close-button">&times;</span>
        <h2>Let's Talk</h2>
        <p>Contact me at: darkdev07@example.com</p>
      </div>
    `;
    body.appendChild(modal);
    
    // Close Modal
    const closeButton = document.querySelector('.close-button');
    closeButton.addEventListener('click', () => {
      modal.remove();
    });
  });
  
  // Smooth Scroll
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
</script>