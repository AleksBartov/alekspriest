class HiddenMenu {
    constructor() {
      this.hiddenMenu = document.getElementsByClassName('hiddenMenu')[0]
      this.menu = document.getElementsByClassName('header__menu')[0]
      this.middle = document.getElementsByClassName('header__menu__middle')[0]
      this.top = document.getElementsByClassName('header__menu__top')[0]
      this.bottom = document.getElementsByClassName('header__menu__bottom')[0]
      this.works = document.getElementsByClassName('hiddenMenu__list__works')[0]
      this.skills = document.getElementsByClassName('hiddenMenu__list__skills')[0]
      this.contacts = document.getElementsByClassName('hiddenMenu__list__contacts')[0]
      this.appireAndDisappireMenu()
    }

    

    appireAndDisappireMenu() {
      this.menu.addEventListener('click', ()=>{
        if (!this.hiddenMenu.classList.contains('menuOpened')){
          this.middle.style.width = '0'
          this.middle.style.opacity = '0'
          this.top.style.transform = 'rotate(40deg)'
          this.bottom.style.transform = 'rotate(-40deg)'
          this.hiddenMenu.style.right = '0'
          this.hiddenMenu.classList.add('menuOpened')
        } else {
          this.middle.style.width = '100%'
          this.middle.style.opacity = '1'
          this.top.style.transform = 'rotate(0deg)'
          this.bottom.style.transform = 'rotate(0deg) translateY(-100%)'
          this.hiddenMenu.style.right = '-100%'
          this.hiddenMenu.classList.remove('menuOpened')
        }        
      })

      this.works.addEventListener('click', ()=>{
          this.middle.style.width = '100%'
          this.middle.style.opacity = '1'
          this.top.style.transform = 'rotate(0deg)'
          this.bottom.style.transform = 'rotate(0deg) translateY(-100%)'
          this.hiddenMenu.style.right = '-100%'
          this.hiddenMenu.classList.remove('menuOpened')      
      })

      this.skills.addEventListener('click', ()=>{
          this.middle.style.width = '100%'
          this.middle.style.opacity = '1'
          this.top.style.transform = 'rotate(0deg)'
          this.bottom.style.transform = 'rotate(0deg) translateY(-100%)'
          this.hiddenMenu.style.right = '-100%'
          this.hiddenMenu.classList.remove('menuOpened')
      })

      this.contacts.addEventListener('click', ()=>{
          this.middle.style.width = '100%'
          this.middle.style.opacity = '1'
          this.top.style.transform = 'rotate(0deg)'
          this.bottom.style.transform = 'rotate(0deg) translateY(-100%)'
          this.hiddenMenu.style.right = '-100%'
          this.hiddenMenu.classList.remove('menuOpened')
      })
    }
  }
  
  export default HiddenMenu;
