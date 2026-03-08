// Particles configuration object
const particlesConfig = {
  particles: {
    number: {
      value: 60,
      density: {
        enable: true,
        value_area: 900
      }
    },
    color: {
      value: '#00ADB5'
    },
    shape: {
      type: 'circle'
    },
    opacity: {
      value: 0.3,
      random: true,
      anim: {
        enable: true,
        speed: 1,
        opacity_min: 0.1,
        sync: false
      }
    },
    size: {
      value: 3,
      random: true
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: '#00ADB5',
      opacity: 0.2,
      width: 1
    },
    move: {
      enable: true,
      speed: 2,
      out_mode: 'out'
    }
  },
  interactivity: {
    detect_on: 'window',
    events: {
      onhover: {
        enable: true,
        mode: ['grab']
      },
      onclick: {
        enable: false // Disabled click events
      },
      resize: true
    },
    modes: {
      grab: {
        distance: 140,
        line_linked: {
          opacity: 0.5
        }
      },
      repulse: {
        distance: 100,
        duration: 0.4
      }
    }
  },
  retina_detect: true
};

// Particles state management
let particlesEnabled = localStorage.getItem('particlesEnabled') !== 'false'; // Default to true

// Function to initialise particles
function initParticles() {
  const particlesContainer = document.getElementById('particles-js');
  if (particlesContainer && typeof particlesJS !== 'undefined') {
    particlesJS('particles-js', particlesConfig);
    
    // Handle mousemove for hover effects
    document.addEventListener('mousemove', function(e) {
      if (window.pJSDom && window.pJSDom[0] && window.pJSDom[0].pJS) {
        const pJS = window.pJSDom[0].pJS;
        pJS.interactivity.mouse.pos_x = e.clientX;
        pJS.interactivity.mouse.pos_y = e.clientY;
      }
    });

    // Handle mouseleave to reset mouse position
    document.addEventListener('mouseleave', function() {
      if (window.pJSDom && window.pJSDom[0] && window.pJSDom[0].pJS) {
        const pJS = window.pJSDom[0].pJS;
        pJS.interactivity.mouse.pos_x = null;
        pJS.interactivity.mouse.pos_y = null;
      }
    });
  }
}

// Function to toggle particles
function toggleParticles() {
  particlesEnabled = !particlesEnabled;
  localStorage.setItem('particlesEnabled', particlesEnabled);
  
  const particlesContainer = document.getElementById('particles-js');
  const toggleButton = document.getElementById('particles-toggle');
  
  if (particlesEnabled) {
    // Show particles and reinitialise
    particlesContainer.style.visibility = 'visible';
    document.body.style.backgroundColor = 'transparent';
    toggleButton.classList.remove('particles-disabled');
    toggleButton.dataset.tooltip = 'Disable particles background';
    
    // Remove existing instance and reinitialise
    if (window.pJSDom && window.pJSDom[0]) {
      window.pJSDom[0].pJS.fn.vendors.destroypJS();
      window.pJSDom = [];
    }
    initParticles();
  } else {
    // Hide particles and set body background
    particlesContainer.style.visibility = 'hidden';
    document.body.style.backgroundColor = '#393E46'; // $color-bg-dark
    toggleButton.classList.add('particles-disabled');
    toggleButton.dataset.tooltip = 'Enable particles background';
  }
}

// Particles toggle button
const toggleButton = document.getElementById('particles-toggle');
if (toggleButton) {
  toggleButton.addEventListener('click', toggleParticles);
  
  // Set initial state
  if (!particlesEnabled) {
    toggleButton.classList.add('particles-disabled');
    toggleButton.dataset.tooltip = 'Enable particles background';
  } else {
    toggleButton.dataset.tooltip = 'Disable particles background';
  }
}

// Check if particles.js library is loaded
if (typeof particlesJS === 'undefined') {
  console.error('particles.js library not loaded');
} else {
  // Check if the container exists
  const particlesContainer = document.getElementById('particles-js');
  if (!particlesContainer) {
    console.error('particles-js container not found');
  } else {
    // Set initial visibility based on enabled state
    if (particlesEnabled) {
      particlesContainer.style.visibility = 'visible';
      document.body.style.backgroundColor = 'transparent';
      initParticles();
    } else {
      particlesContainer.style.visibility = 'hidden';
      document.body.style.backgroundColor = '#393E46'; // $color-bg-dark
    }
  }
}