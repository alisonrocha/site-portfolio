//ScrollReaveal: Mostrar elementos quando der scroll na página
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})

scrollReveal.reveal(
  `#section-presentation .text-primary, #section-presentation .image, #section-about .title, #section-about .content, #section-knowledge .title, #section-knowledge ul li,#section-knowledge .text, #section-projects .title, #section-projects .card-projects, #section-contact 
  `,
  { interval: 100 }
)

//Botão voltar para o topo
function backToTop() {
  let backToTopbutton = document.querySelector('.back-to-top')

  if (window.scrollY >= 200) {
    backToTopbutton.classList.add('show')
  } else {
    backToTopbutton.classList.remove('show')
  }
}

const Menu = {
  openMenu: document.querySelector('.icon-menu'),

  closeMenu: document.querySelector('.close'),

  links: document.querySelectorAll('.menu ul li a'),

  open() {
    this.openMenu.addEventListener('click', () => {
      document.querySelector('.menu').classList.toggle('show')
    })
  },

  close() {
    this.closeMenu.addEventListener('click', () => {
      document.querySelector('.menu').classList.remove('show')
    })
  },

  linkMenu() {
    for (const link of this.links) {
      link.addEventListener('click', function () {
        document.querySelector('.menu').classList.remove('show')
      })
    }
  }
}

const App = {
  init() {
    Menu.open()
    Menu.close()
    Menu.linkMenu()
  }
}

App.init()

window.addEventListener('scroll', function () {
  backToTop()
})
