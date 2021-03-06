
const links = document.querySelectorAll('.alternate-style'),
    totalLinks = links.length;

function setActiveStyle(color) {
    for (let i = 0; i < totalLinks; i++) {
        if (color === links[i].getAttribute('title')) {
            links[i].removeAttribute('disabled');
        } else {
            links[i].setAttribute('disabled', true);
        }
    }
}

function setSkin() {

    if (document.getElementById("dark").checked == true) {
        document.getElementById("dark").checked = true;
        document.getElementById("light").checked = false;
    } else {
        document.getElementById("light").checked = true;
        document.getElementById("dark").checked = false;
    }
}

// body skin

const bodySkin = document.querySelectorAll('.body-skin'),
    totalBodySkin = bodySkin.length;

for (let i = 0; i < totalBodySkin; i++) {
    bodySkin[i].addEventListener('change', function () {
        console.log(this);
        if (this.value !== 'dark') {
            document.body.className = '';
        } else {
            document.body.className = 'dark';
        }
    });
}

document.querySelector('.toggle-style-switcher').addEventListener('click', () => {
    document.querySelector('.style-switcher').classList.toggle('open');
});