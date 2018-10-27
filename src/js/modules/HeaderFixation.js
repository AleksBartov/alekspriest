
class HeaderFixation {
    constructor() {
      this.header = document.getElementsByClassName('header')[0]
      this.changeClass()
    }

    

    changeClass() {
      let maxDeep = 0;
      window.addEventListener('scroll', ()=>{
        let deep = window.pageYOffset
        if (deep < maxDeep) {
          this.header.style.top = `${deep}px`
        } else {
          this.header.style.top = '0'
        }
        maxDeep = deep
      })
    }
  }
  
  export default HeaderFixation;
