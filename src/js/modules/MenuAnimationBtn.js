class BtnMenu {
    constructor() {
      this.btn = document.getElementsByClassName('titleForArtikles__btn')[0];
      this.photoBW1 = document.getElementsByClassName('photo-for-menu')[1];
      this.photoColored1 = document.getElementsByClassName('photo-for-menu')[0];
      this.photo2 = document.getElementsByClassName('photo-for-menu--2r')[0];
      this.photo3 = document.getElementsByClassName('photo-for-menu--3r')[0];
      this.testForBtn();
    }

    testForBtn() {
        this.btn.addEventListener('mouseover', () => {
            this.photoBW1.style.transform = 'translateX(-50%) translateY(-50%) translateZ(30px)';
            this.photoBW1.style.opacity = '0';
            this.photoColored1.style.transform = 'translateX(-50%) translateY(-50%) translateZ(30px)';
            this.photoColored1.style.boxShadow = '0px 0px 1150px black';
            this.photo2.style.transform = 'translateX(40%) translateY(-50%) translateZ(-110px)';
            this.photo3.style.transform = 'translateX(120%) translateY(-45%) translateZ(-190px)';
        })

        this.btn.addEventListener('mouseout', () => {
            this.photoBW1.style.transform = 'translateX(-50%) translateY(-50%) translateZ(0px)';
            this.photoBW1.style.opacity = '1';
            this.photoColored1.style.transform = 'translateX(-50%) translateY(-50%) translateZ(0px)';
            this.photoColored1.style.boxShadow = '0px 0px 50px black';
            this.photo2.style.transform = 'translateX(40%) translateY(-50%) translateZ(-80px)';
            this.photo3.style.transform = 'translateX(120%) translateY(-45%) translateZ(-160px)';
        })

        this.btn.addEventListener('click', () => {
            this.photoColored1.style.transform = 'translateX(-50%) translateY(-50%) translateZ(80px)';
            this.photo2.style.transform = 'translateX(40%) translateY(-50%) translateZ(-600px)';
            this.photo3.style.transform = 'translateX(120%) translateY(-45%) translateZ(-600px)';
        })
    }
  }
  
  export default BtnMenu;
