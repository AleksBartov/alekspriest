/* import BtnMenu from './modules/MenuAnimationBtn';
import ScrollingMenu from './modules/ScrollingForMenu';

// new ScrollingMenu();
new BtnMenu(); */

const mover = document.getElementsByClassName('mover')[0],
    firstPhoto = document.getElementsByClassName('photo')[0]

let start, dist, counter = 0

mover.onmousedown = function (e) {

    start = e.pageX
    mover.style.cursor = 'grabbing'

    mover.onmousemove = function(e) {

        dist = e.pageX - start
        counter += dist
        mover.style.left = `${counter}px`
        firstPhoto.style.transform = `translateX(${counter/500-50}%) translateY(-50%) translateZ(${-dist}px)`
        
    }

    mover.onmouseup = function(e) {
        if (counter > 0) {
            mover.style.left = '0px'
            firstPhoto.style.transform = `translateX(-50%) translateY(-50%) translateZ(0px)`
            counter = 0
        }
        

      mover.onmousemove = mover.onmouseup = null;
      
      mover.style.cursor = 'grab'
    }
}
