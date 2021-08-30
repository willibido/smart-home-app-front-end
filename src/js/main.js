// BULBS SWITCHER
let bulbs = document.querySelectorAll('.device.bulb');

bulbs.forEach(bulb => {
    bulb.addEventListener('click', () => {
        bulb.childNodes[1].classList.toggle('u-bg-orange');
    })
});

// TV SWITCHER
let smartTvs = document.querySelectorAll('.device.smart-tv');

smartTvs.forEach(tv => {
    tv.addEventListener('click', () => {
        tv.childNodes[1].classList.toggle('u-bg-green');
    })
});

// AIR CONDITIONER SWITCHER
let airConditioner = document.querySelectorAll('.device.air-conditioner');

airConditioner.forEach(air => {
    air.addEventListener('click', () => {
        air.childNodes[1].classList.toggle('u-bg-blue');
    })
});

// SCENE SWITCHER
let scenes = document.querySelectorAll('.scene');

scenes.forEach(scene => {
    scene.addEventListener('click', () => {
        scenes.forEach(el => {
            el.classList.remove('active');
        })

        if (scene.classList.contains('movie')) {
            scene.classList.add('active');
        }

        if (scene.classList.contains('music')) {
            scene.classList.add('active');
        }

        if (scene.classList.contains('run')) {
            scene.classList.add('active');
        }

        if (scene.classList.contains('sleep')) {
            scene.classList.add('active');
        }

        if (scene.classList.contains('night')) {
            scene.classList.add('active');
        }
    })
});