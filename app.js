// variable declrations
const clock = document.querySelector('#clock');
const display = clock.querySelector('#display');
const hours = display.querySelector('#hours');
const minutes = display.querySelector('#minutes');
let time = new Date();
// event bindings

// functions
function tick() {
    const minValue = time.getMinutes();
    const hourValue = time.getHours();
    hours.textContent = hourValue;
    minutes.textContent = `${minValue}`.padStart(2, '0');
    time = new Date();
    
}

//kick it off
tick();
setInterval(tick, 1000);
