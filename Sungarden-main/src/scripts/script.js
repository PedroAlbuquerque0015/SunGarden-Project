const radios = document.querySelectorAll('input[type="radio"]');
radios.forEach(radio => {
  radio.addEventListener('change', () => {
    radios.forEach(r => r.checked = false); // Reinicia todos os radios
    radio.checked = true; // Marca o radio clicado novamente
  });
});

