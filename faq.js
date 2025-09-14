document.addEventListener('DOMContentLoaded', () => {
  const faqButtons = document.querySelectorAll('.faq-question');

  faqButtons.forEach(button => {
    button.addEventListener('click', () => {
      const expanded = button.getAttribute('aria-expanded') === 'true';
      button.setAttribute('aria-expanded', !expanded);
      const answer = document.getElementById(button.getAttribute('aria-controls'));
      if (answer) {
        if (expanded) {
          answer.hidden = true;
        } else {
          answer.hidden = false;
        }
      }
    });
  });
});
