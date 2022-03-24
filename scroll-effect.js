/* <script>
window.addEventListener('scroll', function (e) {
  var nDefillement = window.pageYOffset;
  const oFond = document.querySelector('.cParallaxe1');
  oFond.style.backgroundPosition = "0 "+ -(nDefillement * 0.2) + 'px';
});
<script>
 */
let sum = 0
let oldValue =0
let newValue =0
 const kaaris = document.querySelector('.black-star1')
 window.addEventListener("scroll",booba => {
     newValue = window.pageYOffset
     if(newValue < oldValue){
         sum-=0.3
     }else if(newValue > oldValue){
        sum+=0.3
     }
     kaaris.style.marginTop = `${sum}rem`
     oldValue = window.pageYOffset

 }
 )