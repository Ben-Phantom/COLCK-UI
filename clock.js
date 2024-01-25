const date = document.getElementsByClassName('date')[0];
const time = document.getElementsByClassName('time')[0];
const clock_hour = document.getElementsByClassName('clock_hour')[0];
const clock_minute = document.getElementsByClassName('clock_minute')[0];
const clock_second = document.getElementsByClassName('clock_second')[0];



// 1.预显示
function timePreset() {
    let now = new Date(); // 更新当前时间
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let timeContent = (hours < 10 ? '0' + hours : hours) + ':' + (minutes < 10 ? '0' + minutes : minutes);
    time.textContent = timeContent;

    if (timeContent === '00:00') {
        NewPageInLife(now);
    }
};

// 2.显示
setTimeout(function fn() {
    timePreset();
    clockSwirl();

    setTimeout(fn, 1000);
}, 1000);

// -2.日期更新
function NewPageInLife(now) {
    let month = now.getMonth() + 1;
    let date = now.getDate();
    let year = now.getFullYear();

    let lastDayOfMonth = new Date(year, month, 0).getDate();
    if (date === lastDayOfMonth) {
        if (month === 12) {
            year++;
            month = 1;
            date = 1;
        } else {
            month++;
            date = 1;
        }
    } else {
        date++;
    }

    document.getElementsByClassName('date')[0].textContent = month + '.' + date + '.' + year;
};

// 初始日期显示
NewPageInLife(new Date());


// --2.时钟更新
function clockSwirl() {
    let now = new Date(); // 更新当前时间
    let hours = now.getHours() * 30;
    let minutes = now.getMinutes() * 6;
    let seconds = now.getSeconds() * 6;

    clock_hour.style.transform = `rotateZ(${hours + minutes/12}deg)`;
    clock_minute.style.transform = `rotateZ(${minutes}deg)`;
    clock_second.style.transform = `rotateZ(${seconds}deg)`;

};