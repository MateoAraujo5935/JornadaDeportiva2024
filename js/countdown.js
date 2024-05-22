const getRemainTime = deadline => {
    let now = new Date(),
        remainTime = (new Date(deadline) - now + 1000) /1000, 
        remainSeconds = ('0' + Math.floor(remainTime % 60)).slice(-2),
        remainMinutes = ('0' + Math.floor(remainTime / 60 % 60)).slice(-2),
        remainHours = ('0' + Math.floor(remainTime / 3600 % 24)).slice(-2),
        remainDays = Math.floor(remainTime / (3600 * 24));

    return {
        remainTime,
        remainSeconds,
        remainMinutes,
        remainHours,
        remainDays
    }
};

const countdown = (deadline, elem, finalMessage) => {
    const el = document.getElementById(elem);

    const timerupdate = setInterval( () => {
    let t = getRemainTime(deadline);
    el.innerHTML = `${t.remainDays} D : ${t.remainHours} HS : ${t.remainMinutes} MINS`

    if (t.remainTime <= 1) {
        clearInterval(timerupdate);
        el.innerHTML = finalMessage;
    }
    }, 1000)
};

countdown('Sep 21 2024 7:20:00 GMT-0300', 'contador', 'LLEGÓ LA JORNADA!' )