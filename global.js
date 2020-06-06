function transition() {


  var elmnt = document.getElementById("section2");
  document.getElementById("transition").classList.remove('not-visible')
  setTimeout(() => {
    document.getElementById("body").style.overflowY = "visible";
    elmnt.scrollIntoView({
      behavior: "smooth",
      inline: "nearest"
    })
    document.getElementById("transition").classList.add('not-visible')


    ;
  }, 1000);
}
var a = 1;

function onClickMenu() {

  document.getElementById("menu").classList.toggle("change");

  document.getElementById("onglets").classList.toggle("change");
  document.getElementById("onglets").classList.toggle("show");
  document.getElementById("bordure").classList.toggle("change");
}





function onglet1() {

  document.getElementById("onglet").classList.toggle("change");

  document.getElementById("bordure").classList.toggle("change");
}

function onglet2() {

  document.getElementById("ongletdeux").classList.toggle("change");

  document.getElementById("bordure").classList.toggle("change");
}



function onglet3_2() {
     document.getElementById("onglettrois").classList.toggle("change");
    
    document.getElementById("onglets").classList.toggle("change");   
}


function onglet1_2() {
     document.getElementById("onglet").classList.toggle("change");
    
    document.getElementById("onglets").classList.toggle("change");   
}




function onglet3() {

  document.getElementById("onglettrois").classList.toggle("change");

  document.getElementById("bordure").classList.toggle("change");
}

function line1() {

  document.getElementById("borderline").classList.toggle("change");

}

function line2() {

  document.getElementById("borderlinedeux").classList.toggle("change");

}


let observer = new IntersectionObserver(function (observables) {
  observables.forEach(function (observable) {
    // L'élément devient visible
    if (observable.intersectionRatio > 0.5) {
      observable.target.classList.remove('not-visible')

    } else {
      observable.target.classList.add('not-visible')


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