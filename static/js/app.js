var termxBuildFlaskApp = document.querySelector('.termX-build-flask-app');

var typewriter = new Typewriter(termxBuildFlaskApp, {
    delay: 80
});

typewriter.pauseFor(3800)
    .typeString('$ buildflaskapp hello-world' + '<br/>$ ')
    .pauseFor(1000)
    .typeString('cd hello-world' + '<br/>$ ')
    .pauseFor(1500)
    .typeString('pip3 install -r requirements.txt' + '<br/>$ ')
    .pauseFor(1900)
    .typeString('python3 app.py' + '<br/>')
    .pauseFor(2500)
    .changeDelay(0.01)
    .typeString('<span class="white-text">* Serving Flask app "app" on localhost:5000</span>')
    .start();

function checkCDN() {
    var theString = "buildflaskapp hello-world";

    if (document.querySelector('.bootstrap-check').checked === true) {
        theString = theString + ' -bs';
    }

    if (document.querySelector('.gsap-check').checked === true) {
        theString = theString + ' -gsap';
    }

    if (document.querySelector('.jquery-check').checked === true) {
        theString = theString + ' -jq';
    }

    if (document.querySelector('.fontawesome-check').checked === true) {
        theString = theString + ' -fa';
    }

    if (document.querySelector('.debugger-check').checked === true) {
        theString = theString + ' -d';
    }

    if (document.querySelector('.sqlite3-check').checked === true) {
        theString = theString + ' -sl3';
    }

    if (document.querySelector('.docker-check').checked === true) {
        theString = theString + ' -dc';
        document.querySelector('.usage-runApp').innerHTML = 'docker-compose up -d';
    } else {
        document.querySelector('.usage-runApp').innerHTML = 'python3 app.py';
    }
    document.querySelector('.usage-build-flask-app').innerHTML = theString;
}

var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.querySelector(".navbar").style.top = "0";
    } else {
        document.querySelector(".navbar").style.top = "-100px";
    }
    prevScrollpos = currentScrollPos;
}

