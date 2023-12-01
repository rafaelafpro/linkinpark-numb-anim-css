const ITERATIONS = 72;
const DEGREE_STEP = 5;
const DURATION_STEP = 1;



function renderBar(index) {

  let barEl = document.createElement("div");
  barEl.classList.add("bar-w");
  barEl.setAttribute("style", `--delay: ${randDelay()}s; --duration: ${Number(1) * DURATION_STEP}s; --transform: 20px; --deg: ${DEGREE_STEP * index}deg;`);
  barEl.innerHTML = `<div class="bar"></div>`;
  document.body.appendChild(barEl);


}



function randDelay() {
  return ((Math.random() + 0.8).toFixed(2) - 0.8).toFixed(2);
}

var audio = document.getElementById('numb');
const circle = document.getElementById("circle");



function start() {




  for (let i = 0; i < 72; i++) {
    renderBar(i);
  }



  audio.play();
  const bars = document.querySelectorAll(".bar");

  console.log(circle);

  setTimeout(() => {
    for (let i = 0; i < bars.length; i++) {
      bars[i].style.animation = `grow var(--duration) ease var(--delay) infinite`;
    }

  }, 5000);

  setTimeout(() => {
    circle.style.animation = `pulsex 0.9s -2s infinite`;
  }, 4500);
}

start();





function randDuration() {
  return (Math.random() + 1.0).toFixed(2);
}
