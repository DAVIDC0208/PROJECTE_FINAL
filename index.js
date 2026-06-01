document.querySelector('.enviament-formulari button').addEventListener('click', () => {
  document.querySelector('.enviament-formulari').insertAdjacentHTML(
    'afterend',
    '<p style="color: #4caf50; margin-top: 0.75rem;">Formulari enviat!</p>'
  );
});