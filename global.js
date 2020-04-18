

function transition() {
    
    
    var elmnt = document.getElementById("section2");
  document.getElementById("transition").classList.remove('not-visible')
    setTimeout(() => {   document.getElementById("body").style.overflowY = "visible";
    elmnt.scrollIntoView({behavior: "smooth", inline: "nearest"})
     document.getElementById("transition").classList.add('not-visible')                 
                      
                      
                      ;}, 1500);
}






let observer = new IntersectionObserver(function (observables) {
  observables.forEach(function (observable) {
    // L'élément devient visible
    if (observable.intersectionRatio > 0.5) {
      observable.target.classList.remove('not-visible')
      observer.unobserve(observable.target)
    }
  })
}, {
  threshold: [0.5]
});

// On observe nos éléments
let items = document.querySelectorAll('#para1,#para2,#para3')
items.forEach(function (item) {
  item.classList.add('not-visible')
  observer.observe(item)
})