// ====================Start title Replace==================

document.addEventListener('visibilitychange', function () {
    if (document.visibilityState === 'hidden') {
        document.title = 'Social Media'
    } else {
        document.title = 'Imran Ali | Social Media';
    }
});


// ====================Start PDF Button==================

const btn = document.getElementById("downPdf");
btn.addEventListener("click", () => {
    setTimeout(() => {
        window.open("pdf/IMRAN ALI.pdf", "_blank"); // apna PDF path yahaan dalen
    }, 350);
});


// ====================Start Share Button==================

const shareBtn = document.querySelector("#shareBtn");
shareBtn.addEventListener("click", (event) => {
    if (navigator.share) {
        navigator.share({
            title: "Imran Ali | Social Media",
            url: "https://imran05.qzz.io/",
        }).then(() => {
            console.log("Thanks for sharing!");
        }).catch((err) => {
            console.log("Could not share!");
            console.log(err);
        })
    } else {
        alert("Your browser does not support the Web Share API.");
    }
});


// ====================Start Auto Typing==================

var typed = new Typed(".auto-type", {
    strings: ['MERN Stack Developer', 'Full Stack Web Developer', 'Frontend Developer.', 'Backend Developer.', 'UI &amp; UX Designer.'],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: true
});


// ====================Start Right Click Disabled==================

document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
});


// ====================Start CTRL+U Disabled====================

document.addEventListener('keydown', function (e) {
    if (e.ctrlKey && e.key.toLowerCase() === 'u') {
        e.preventDefault();
    }
});


// ====================Start CTRL+S Disabled====================

document.addEventListener("keydown", function (e) {
    // Ctrl + S ya Cmd + S detect karo
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "s") {
        e.preventDefault();
    }
});


// ====================Start Welcome Sound==================

const audio = document.getElementById("welcomeSound");

window.addEventListener("load", () => {
    audio.play().catch(() => {
        console.log("Autoplay blocked ❌, waiting for user click...");
    });
});

document.addEventListener("click", () => {
    audio.currentTime = 0;
    audio.play();
});


// ====================Disable all keys==================

function disableKeys(event) {
    if (event.key === "Tab" || event.key === "Enter") {
        return true;
    }
    event.preventDefault();
    return false;
}
window.addEventListener("keydown", disableKeys);
window.addEventListener("keypress", disableKeys);
window.addEventListener("keyup", disableKeys);

// ====================End Disable all keys==================