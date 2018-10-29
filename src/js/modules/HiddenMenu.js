class HiddenMenu {
    constructor() {
      this.hiddenMenu = document.getElementsByClassName('hiddenMenu')[0]
      this.menu = document.getElementsByClassName('header__menu')[0]
      this.close = document.getElementsByClassName('hiddenMenu__closeBtn')[0]
      this.appireAndDisappireMenu()
    }

    

    appireAndDisappireMenu() {
      this.menu.addEventListener('click', ()=>{
        this.hiddenMenu.style.right = '0'
      })
      this.close.addEventListener('click', ()=>{
        this.hiddenMenu.style.right = '-100%'
    })
    }
  }
  
  export default HiddenMenu;
