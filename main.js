window.addEventListener('scroll', onScroll)


onScroll()
function onScroll() {
 showNavOnScroll ()
 showBackToTopButtonOnScroll ()
}

function showNavOnScroll () {
  if (scrollY > 0) {
    navigation.classList.add('scroll')
  } else {
    navigation.classList.remove('scroll')
  }
}

function showBackToTopButtonOnScroll () {
  if (scrollY >1400) {
    BackToTopButton.classList.add('show')
  } else {
    BackToTopButton.classList.remove('show')
  }
}

function openMenu() {
  document.body.classList.add('menu-expanded')
}


function closeMenu() {
  document.body.classList.remove('menu-expanded')
}




ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
}).reveal(`#home, 
#home img, 
#home .stats, 
#services,
#services header,
#services card,
#about,
#about header,
#about .content,
`);