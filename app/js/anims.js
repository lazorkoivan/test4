class NumberAnim{
    constructor(querySelector){
        this.querySelector = querySelector;
        this.check(this);
    }
    start(){
        var number = this.querySelector,
        start = +number.innerHTML, end = +number.dataset.max, 
        step = +number.dataset.step, delay = +number.dataset.delay;
        var interval = setInterval(function() {
            start += step;
            number.innerHTML = start >= end ? end : start;
            if(start >= end) clearInterval(interval);
        }, delay);
    }
    check(t){
        window.addEventListener('scroll', function onScroll() {
            var number = t.querySelector,
                numberTop = number.getBoundingClientRect().top;
            if(window.pageYOffset > numberTop - window.innerHeight / 2) {
                this.removeEventListener('scroll', onScroll);
                t.start();
            }
        });
    }
}
var AnimateNumbers = document.querySelectorAll('.animateNum');
AnimateNumbers.forEach((item)=>{
    new NumberAnim(item)
})




const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}