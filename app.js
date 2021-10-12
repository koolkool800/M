window = function () {
    const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

    let birthday = "Oct 14, 2021 00:00:00",
        countDown = new Date(birthday).getTime(), x = setInterval(function () {

            let now = new Date().getTime(),
                distance = countDown - now;
            document.getElementById("days").innerText = Math.floor(distance / (day)),
                document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
                document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
                document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);



            const days = document.getElementById("days").innerText
            const hours = document.getElementById("hours").innerText
            const minutes = document.getElementById("minutes").innerText
            const seconds = document.getElementById("seconds").innerText

            if (days == 0 && hours == 0 && minutes == 0 && seconds == 0) {
                document.getElementById("countdown-wrapper").style.display = "none";
                document.getElementById("day").style.display = "none"
                document.getElementById("birthday").style.display = "block";

            }

            //seconds
        }, 0)

}();


function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 2 + 3 + "s";
    heart.innerText = "💜";
    document.body.appendChild(heart);
    setTimeout(() => {
        heart.remove();
    }, 5000);
}

setInterval(createHeart, 300);
