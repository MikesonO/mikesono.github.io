const SERVICE_ID = 'service_cepih3a';
const TEMPLATE_ID = 'template_87ujrtz';
const PUBLIC_KEY = 'fyZR74-3eNpB62xNu';

emailjs.init(PUBLIC_KEY);

const form = document.getElementById('contactForm');
const submitBtn = form.querySelector('.form-submit');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  submitBtn.disabled = true;
  submitBtn.textContent = 'Sending...';
  submitBtn.style.backgroundColor = '#008A91';

  emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form).then(() => {
    submitBtn.textContent = 'Message Sent!';
    submitBtn.style.backgroundColor = '#22C55E';
    submitBtn.style.opacity = '1';
    form.reset();

    setTimeout(() => {
      submitBtn.disabled = false;
      submitBtn.textContent = 'Send Message';
      submitBtn.style.backgroundColor = '';
      submitBtn.style.color = '';
      submitBtn.style.opacity = '';
    }, 4000);
  }).catch(() => {
    submitBtn.disabled = false;
    submitBtn.textContent = 'Failed to Send. Try Again';
    submitBtn.style.backgroundColor = '#F87171';
    submitBtn.style.opacity = '1';


    setTimeout(() => {
      submitBtn.textContent = 'Send Message';
      submitBtn.style.backgroundColor = '';
      submitBtn.style.opacity = '';
    }, 4000);
  });
});
