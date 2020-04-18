let observer = new IntersectionObserver(function (observables) {
  observables.forEach(function (observable) {
    // L'élément devient visible
    if (observable.intersectionRatio > 0.5) {
      observable.target.classList.remove('not-visible')
      observer.unobserve(observable.target)
    }
  })
}, {
  threshold: [0.9]
});

// On observe nos éléments
let items = document.querySelectorAll('#para1,#para2,#para3')
items.forEach(function (item) {
  item.classList.add('not-visible')
  observer.observe(item)
})