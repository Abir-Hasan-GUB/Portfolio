// ==================== Typed JS Controllers =====================
new Typed('#typed', {
  strings: ['Designer.', 'Developer.', 'Programmer.'],
  typeSpeed: 100,
  delaySpeed: 70,
  loop: true
});

// ================= Color Plate =================

let seting = document.querySelector('.colorSeting');
seting.addEventListener('click', () => {
  let element = document.querySelector('.colorPlate');
  let colorSeting = document.querySelector('.colorSeting');
  element.classList.toggle("showColorPicker");
  colorSeting.style.marginLeft = '-29px';
  colorSeting.style.color = '#fff';
  element.style.transition='.5s'
})

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})