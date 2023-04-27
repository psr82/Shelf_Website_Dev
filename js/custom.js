var rangeSlider = document.getElementById("rs-range-line");
var rangeBullet = document.getElementById("rs-bullet");
var x = document.getElementById("wrap1");
var y = document.getElementById("wrap2");

var z = document.getElementById("ideal-save");
var g = document.getElementById("shelf-save");

rangeSlider.addEventListener("input", showSliderValue, true);

function showSliderValue() {
  rangeBullet.innerHTML = `₹ ${rangeSlider.value}k`;
  var bulletPosition = (rangeSlider.value /rangeSlider.max);
//   rangeSlider.style.webkitMaskComposite = (bulletPosition * 250) + "px"
  rangeBullet.style.left = (bulletPosition * 250) + "px";
  rangeBullet.style.fontSize = '10px';
}

function calculateValues(){
    let idealSavings = rangeSlider.value * (285);
    let shelfSaving = rangeSlider.value * (428);
    z.innerText = `₹${idealSavings.toFixed(0)}`
    g.innerText = `₹${shelfSaving.toFixed(0)}`;
    x.style.display = 'none';
    y.style.display = 'block'
    console.log(idealSavings, shelfSaving);
}