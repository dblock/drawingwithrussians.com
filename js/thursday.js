function firstThur(d) {
    const firstThur = new Date(d.getFullYear(), d.getMonth(), 1, 15, 0, 0, 0); // first of the month
    for (let i = 1; i < 7; i++) {
        if (firstThur.getDay() === 4) break;
        firstThur.setDate(firstThur.getDate() + 1)
    }
    return firstThur;
};

function getThursday() {
    const now = new Date();
    now.setHours(15, 0, 0, 0); // normalise
    let ft = firstThur(now);
    return now.getTime() <= ft.getDate ? ft : firstThur(new Date(now.getFullYear(), now.getMonth() + 1, 1, 15, 0, 0, 0))
};

function getFormattedDate(date) {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return days[date.getDay()] + ', ' + months[date.getMonth()] + ' ' + date.getDate().toString();
}

const updateThursday = () => {
    // var nextDrawing = getThursday();
    // document.getElementById("next").innerHTML = "next drawing is " + getFormattedDate(nextDrawing);
}
