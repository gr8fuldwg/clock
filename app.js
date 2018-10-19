// variable declrations
const clock = document.querySelector('#clock');
const display = clock.querySelector('#display');
const hours = display.querySelector('#hours');
const minutes = display.querySelector('#minutes');
const date = clock.querySelector('#date');
let time = new Date();
// event bindings

// functions
function tick() {
    //get time
    const minValue = time.getMinutes();
    const hourValue = time.getHours();
    //render time
    hours.textContent = hourValue;
    minutes.textContent = `${minValue}`.padStart(2, '0');
    
    //get date (format: MM-DD-YYYY)
    const year = time.getFullYear();
    const month = time.getMonth();
    const day = time.getDate();
    //render date
    date.textContent = `${month}-${day}-${year}`;
    //update time and date
    time = new Date();
    
}

//kick it off
tick();
setInterval(tick, 1000);
