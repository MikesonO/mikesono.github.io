// Check if particles.js library is loaded
if (typeof particlesJS === 'undefined') {
  console.error('particles.js library not loaded');
} else {
  
  // Check if the container exists
  const particlesContainer = document.getElementById('particles-js');
  if (!particlesContainer) {
    console.error('particles-js container not found');
  } else {

  particlesJS('particles-js', {
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
});

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