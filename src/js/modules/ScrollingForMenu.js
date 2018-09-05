const photos = document.getElementsByClassName('photo-for-menu'),
      photosArray = [
        photos[0],
        photos[1],
        photos[2],
        photos[3]
      ];

class ScrollingForMenu {
    constructor() {
      this.fon = document.getElementsByClassName('titleForArtikles')[0]
      this.btn = document.getElementsByClassName('titleForArtikles__container__btn')[0]
      this.photosArray = photosArray
      this.startSlide()
    }

    startSlide () {
      const that = this
      let dist = 0, start = 0, deep;
      this.fon.onmousedown = function (e) {

        start = e.pageX
        that.fon.style.cursor = 'grabbing'

        document.onmousemove = function(e) {
  
          dist = e.pageX - start
          deep = dist
          if (dist > 0) {
            deep = -dist
          }
          that.photosArray[0].style.transform = `translateX(${dist/6 - 50}%) translateY(-50%) translateZ(${deep/6}px)`
          that.photosArray[1].style.transform = `translateX(${dist/6 - 50}%) translateY(-50%) translateZ(${deep/6}px)`
          that.btn.innerHTML = dist
        }

        document.onmouseup = function() {
  
          document.onmousemove = document.onmouseup = null;
          if (dist > -200) {
            that.photosArray[0].style.transform = 'translateX(-50%) translateY(-50%) translateZ(0px)'
            that.photosArray[1].style.transform = 'translateX(-50%) translateY(-50%) translateZ(0px)'
          } else if (dist > -400) {
            that.photosArray[0].style.transform = 'translateX(-140%) translateY(-50%) translateZ(-80px)'
            that.photosArray[0].style.filter = 'blur(1px)'
            that.photosArray[1].style.transform = 'translateX(-140%) translateY(-50%) translateZ(-80px)'
            that.photosArray[1].style.filter = 'blur(1px)'
          } else {
            that.photosArray[0].style.transform = 'translateX(-220%) translateY(-50%) translateZ(-160px)'
            that.photosArray[0].style.filter = 'blur(2px)'
            that.photosArray[1].style.transform = 'translateX(-220%) translateY(-50%) translateZ(-160px)'
            that.photosArray[1].style.filter = 'blur(2px)'
          }
          that.btn.innerHTML = 'изучить'
          that.fon.style.cursor = 'grab'
        }
      }



      




      this.fon.ontouchstart = function (e) {
        let touchobj = e.changedTouches[0]
        start = parseInt(touchobj.clientX)

        document.ontouchmove = function(e) {
          var touchobj = e.changedTouches[0]
          dist = parseInt(touchobj.clientX) - start
          deep = dist
          if (dist > 0) {
            deep = -dist
          }
          that.photosArray[0].style.transform = `translateX(${dist/6 - 50}%) translateY(-50%) translateZ(${deep/6}px)`
          that.photosArray[1].style.transform = `translateX(${dist/6 - 50}%) translateY(-50%) translateZ(${deep/6}px)`
          that.btn.innerHTML = dist
        }

        document.ontouchend = function() {
  
          document.ontouchmove = document.ontouchend = null;
          if (dist > -200) {
            that.photosArray[0].style.transform = 'translateX(-50%) translateY(-50%) translateZ(0px)'
            that.photosArray[1].style.transform = 'translateX(-50%) translateY(-50%) translateZ(0px)'
          } else if (dist > -400) {
            that.photosArray[0].style.transform = 'translateX(-140%) translateY(-50%) translateZ(-80px)'
            that.photosArray[0].style.filter = 'blur(1px)'
            that.photosArray[1].style.transform = 'translateX(-140%) translateY(-50%) translateZ(-80px)'
            that.photosArray[1].style.filter = 'blur(1px)'
          } else {
            that.photosArray[0].style.transform = 'translateX(-220%) translateY(-50%) translateZ(-160px)'
            that.photosArray[0].style.filter = 'blur(2px)'
            that.photosArray[1].style.transform = 'translateX(-220%) translateY(-50%) translateZ(-160px)'
            that.photosArray[1].style.filter = 'blur(2px)'
          }
          that.btn.innerHTML = 'изучить'
          that.fon.style.cursor = 'grab'
        }
      }

    }

  }
  
  export default ScrollingForMenu;
