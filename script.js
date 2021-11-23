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
  init(){
    Menu.open()
    Menu.close()
    Menu.linkMenu()
  }
}

App.init()

