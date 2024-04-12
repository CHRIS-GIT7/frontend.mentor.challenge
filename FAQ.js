document.addEventListener('DOMContentLoaded', function () { 
  const toggleIcons = document.querySelectorAll('span');

  toggleIcons.forEach(icon => {
    icon.addEventListener('click', function () {
      const parent = this.parentElement;
      const answer = parent.nextElementSibling;

      if ( answer.style.display === 'block') {
        answer.style.display = 'none';
        this.classList.remove('minus');
        this.classList.add('plus');
      } else {
        answer.style.display = 'block';
        this.classList.remove('plus');
        this.classList.add('minus');
      }

    });

    const parent = icon.parentElement;
    const answer =parent.nextElementSibling;
    if (answer.classList.contains('hidden')){
    toggleIcons.classList.add('minus')
   } else { 
    icon.classList.add('plus')
   }
  });
});