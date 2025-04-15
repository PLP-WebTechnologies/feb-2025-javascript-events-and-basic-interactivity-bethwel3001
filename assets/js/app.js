// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');
  const nameInput = form.elements['name'];
  const emailInput = form.elements['email'];
  const messageInput = form.elements['message'];
  const formSuccess = document.getElementById('formSuccess');

  // Helper function to show error message
  function showError(input, message) {
    const errorElem = input.nextElementSibling;
    errorElem.textContent = message;
    input.classList.add('input-error');
  }

  // Helper function to clear error message
  function clearError(input) {
    const errorElem = input.nextElementSibling;
    errorElem.textContent = '';
    input.classList.remove('input-error');
  }

  // Validate email format
  function isValidEmail(email) {
    // Simple regex for email validation
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  // Form validation function
  function validateForm() {
    let valid = true;

    // Validate name
    if (nameInput.value.trim() === '') {
      showError(nameInput, 'Name is required.');
      valid = false;
    } else {
      clearError(nameInput);
    }

    // Validate email
    if (emailInput.value.trim() === '') {
      showError(emailInput, 'Email is required.');
      valid = false;
    } else if (!isValidEmail(emailInput.value.trim())) {
      showError(emailInput, 'Please enter a valid email address.');
      valid = false;
    } else {
      clearError(emailInput);
    }

    // Validate message
    if (messageInput.value.trim() === '') {
      showError(messageInput, 'Message is required.');
      valid = false;
    } else {
      clearError(messageInput);
    }

    return valid;
  }

  // Handle form submission
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    formSuccess.hidden = true;

    if (validateForm()) {
      // Simulate form submission success
      form.reset();
      formSuccess.hidden = false;
    }
  });

  // Interactive elements
  const colorToggleBtn = document.getElementById('colorToggleBtn');
  const colorBox = document.getElementById('colorBox');
  const rangeSlider = document.getElementById('rangeSlider');
  const sliderValue = document.getElementById('sliderValue');

  // Toggle background color on button click
  colorToggleBtn.addEventListener('click', () => {
    colorBox.classList.toggle('active');
  });

  // Update slider value display on input
  rangeSlider.addEventListener('input', () => {
    sliderValue.textContent = rangeSlider.value;
  });
});
