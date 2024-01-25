let date = document.getElementsByClassName('date')[0]
let time = document.getElementsByClassName('time')[0]
let dateOnVisit = new Date();
let datenow = new Date();




//秒针,分针，时针，时间显示

//1.预显示
function timePreset() {
    let datenow = new Date();
    if(datenow.getMinutes() <= 9) {
    timeContent =datenow.getHours() + ':0' + datenow.getMinutes()
    
    } else {
        timeContent =datenow.getHours() + ':' + datenow.getMinutes() 
    }
    time.textContent = timeContent
}

//2.显示
setTimeout(function fn() {

    //时间显示
    timePreset();
    


    setTimeout(fn,1000)
}, 1000);


////日期修改（1./2.）
evenMon = [1,3,5,7,8,10,12]
oddMon = [2,4,6,9,11]

//-1.首次获取
dateContent = dateOnVisit.getMonth() + 1 
                + '.' + dateOnVisit.getDate() 
                + '.' + dateOnVisit.getFullYear()
date.textContent = dateContent

//-2.当time.textContent为00：00时，日期+1.当为月末、年末时采取不同策略.

now = date.textContent
function NewPageInLife(now) {
    if(dateOnVisit.getMonth() + 1 <= 12){   //非年末
        if(evenMon.includes(dateOnVisit.getMonth()) && dateOnVisit.getDate() == 31
        || evenMon.includes(dateOnVisit.getMonth()) && dateOnVisit.getDate() == 30){   //月末
            date.textContent =  (dateOnVisit.getMonth() + 2)
                            + '.' + '01'
                            + '.' + dateOnVisit.getFullYear()
        } else {    
            date.textContent =  (dateOnVisit.getMonth() + 1)
                            + '.' + (dateOnVisit.getDate() + 1)
                            + '.' + dateOnVisit.getFullYear()
        }
        
    } else {    //年末
        date.textContent =  '01'
                            + '.' + '01'
                            + '.' + (datenow.getFullYear() + 1)
    }
}

if(time.textContent == '00:00'){
    NewPageInLife(now)
}