const panels = document.querySelectorAll('.panel');

function toggleOpen() {
//   The toggle() method of the DOMTokenList interface removes an existing 
//   token from the list and returns false. If the token doesn't exist it's 
//   added and the function returns true.
  this.classList.toggle('open');
}

function toggleActive(e) {
  if (e.propertyName.includes('flex')) {
    this.classList.toggle('open-active');
  }
}

panels.forEach(panel => panel.addEventListener('click', toggleOpen));
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));