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
        scene.classList.toggle('active');

        console.log(scene.classList.contains('active'));

        // if (scenes.classList.contains('active') > 1) {
        //     scenes.forEach(el => {
        //         el.classList.remove('active');
        //     })
        // }
        
        // scenes.forEach(el => {
        //     el.classList.toggle('active');
        // })

        // if (scene.classList.contains('movie')) {
        //     scene.classList.add('active');
        // }

        // if (scene.classList.contains('music')) {
        //     scene.classList.add('active');
        // }

        // if (scene.classList.contains('run')) {
        //     scene.classList.add('active');
        // }

        // if (scene.classList.contains('sleep')) {
        //     scene.classList.add('active');
        // }

        // if (scene.classList.contains('night')) {
        //     scene.classList.toggle('active');
        // }
    })
});

const microphoneModalContainer = document.querySelector('.modal-container');
const microphoneBtn = document.getElementById('microphone');
const microphoneModal = document.getElementById('microphone_modal');
const modalOverlay = document.querySelector('.modal-overlay');

const openModal = () => {
    modalOverlay.classList.remove('fade-out');
    microphoneModal.classList.remove('fade-out');
    
    microphoneModalContainer.classList.remove('hide');
    
    modalOverlay.classList.add('fade-in');

    microphoneModal.classList.add('anim-move-up');
    microphoneModal.classList.remove('anim-move-down');
}

const closeModal = () => {
    modalOverlay.classList.remove('fade-in');
    modalOverlay.classList.add('fade-out');

    microphoneModal.classList.remove('anim-move-up');
    microphoneModal.classList.add('anim-move-down');

    setTimeout(()=>{
        microphoneModalContainer.classList.add('hide');
    }, 300)
}

microphoneBtn.addEventListener('click', () => {
    if (microphoneModalContainer.classList.contains('hide')) {
        openModal();
        console.log('Open');
    } else {
        closeModal();
        console.log('Close');
    }
})

microphoneModalContainer.addEventListener('click', () => {
    closeModal();
})

const contextMenuBtn = document.getElementById('context-menu');
const contextMenuContainer = document.querySelector('.contextual-menu');
const appContainer = document.querySelector('.app-container');
let menuIsOpen = false;

const closeCotextualMenu = () => {
    contextMenuContainer.classList.remove('anim-move-up');
    contextMenuContainer.classList.add('hide');
}

const openCotextualMenu = () => {
    contextMenuContainer.classList.add('anim-move-up');
    contextMenuContainer.classList.remove('hide');
}

contextMenuBtn.addEventListener('click', () => {
    openCotextualMenu();
})

appContainer.addEventListener('click', () => {
    closeCotextualMenu();
}, true)