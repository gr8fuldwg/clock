// variable declrations
const clock = document.querySelector('#clock');
const display = clock.querySelector('#display');
const hours = display.querySelector('#hours');
const minutes = display.querySelector('#minutes');
const date = clock.querySelector('#date');
const amPm = display.querySelector('#am-pm');
let time = new Date();
let isPm = time.getHours() >= 12;
// event bindings

// functions
function tick() {
    //get time
    const minValue = time.getMinutes();
    const hourValue = time.getHours();
    //render time
    hours.textContent = hourValue % 12 === 0 ? 12 : hourValue % 12;
    minutes.textContent = `${minValue}`.padStart(2, '0');
    
    //get date (format: MM-DD-YYYY)
    const year = time.getFullYear();
    const month = time.getMonth();
    const day = time.getDate();
    //render date
    date.textContent = `${month}-${day}-${year}`;
    //rnder am/pm status
    amPm.classList.remove('am', 'pm');
    if(isPm) {
        amPm.classList.add('pm');
    } else {
        amPm.classList.add('am');
    }
    //update time and date
    time = new Date();
    //update am/pm
    isPm = time.getHours() >= 12;
    
}

//kick it off
tick();
setInterval(tick, 1000);
