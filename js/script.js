let burger = document.querySelector(".hamburger"),
    burgerLines = document.querySelectorAll('.hamburger-lines'),
    dropdown = document.querySelector('.dropdown-container'),
    dropdownLinks = document.querySelectorAll('.drop-down a');

burger.addEventListener('click', () => {
    dropdown.classList.toggle('dropdown-show');
    burger.classList.toggle('toggle');
    dropdownLinks.forEach((links, index) => {
        if (links.style.animation) {
            links.style.animation = ``
        } else {
            links.style.animation = `slideIn .4s forwards ${index*0.2 + 0.1}s`
        }

    });

})
window.addEventListener('scroll', () => {
    burger.classList.remove('toggle');
    dropdown.classList.remove('dropdown-show');
    dropdownLinks.forEach(links => {
        links.style.animation = ``;
    })
});
// Cards animation
let works = document.querySelectorAll('.work');

function scrollEffect() {
    works.forEach((work, index) => {
        if (work.getBoundingClientRect().top < window.innerHeight) {
            work.style.animation = `slideIn .4s forwards ${index/0.2}s`;
        }
    })
}
window.addEventListener('scroll', scrollEffect);
// Scroll Up effect



// Automatic Year Update
// let year = document.querySelector('.year'),
//     newDate = new Date()
// year.textContent = newDate.getFullYear();
// TypeWritting Effects 
let words = ['good design', 'photography', 'historical stuff'],
    typewritterTexts = document.querySelector('.typewritter-text');
let isDeleting = false,
    wordIndex = 0,
    letterIndex = 0,
    currentText = '',
    time = 150;

function typewritter() {
    if (isDeleting === true) {
        time = 35;
    }
    if (isDeleting === false) {
        currentText = words[wordIndex].substring(0, letterIndex++);

        if (currentText.length === words[wordIndex].length) {
            isDeleting = true;
            console.log('end');
            time = 1000;
            typewritterTexts.classList.add('wait');
        }

    } else {
        currentText = words[wordIndex].slice(0, letterIndex--);
        if (currentText.length === 0) {
            wordIndex += 1;
            isDeleting = false;
        }
    }
    if (wordIndex === words.length) {
        wordIndex = 0;
    }



    typewritterTexts.innerHTML = `${currentText}<span class="typewritter"></span>`;
    setTimeout(typewritter, time);
}
typewritter();

// Modal Sysyem
let modal = document.querySelector('.modal-container'),
    modalImage = document.querySelector('.modal-img img'),
    modalImageContainer = document.querySelector('.modal-img'),
    modalCaption = document.querySelector('.modal-caption'),
    modalClose = document.querySelector('.modal-close'),
    arrowLeft = document.querySelector('.arrow-left'),
    arrowRight = document.querySelector('.arrow-right'),
    current = 0;
works.forEach((work, index) => {

    work.addEventListener('click', () => {

        current = index;
        modal.classList.add('modal-visible');
        modalImage.src = `${works[current].children[0].getAttribute('src')}`;
        modalCaption.textContent = `${works[current].children[1].children[0].children[1].textContent}`;
        modalImageContainer.classList.add('modal-animation');
        arrowRight.addEventListener('click', next);
        window.addEventListener('keydown', (e) => {

            if (e.type === 'keydown') {
                if (e.which == 37 || e.keyCode == 37) {
                    prev();
                } else if (e.which == 39 || e.keyCode == 39) {
                    next();
                }
            }


        });

        function next() {
            if (current === works.length - 1) {
                current = -1;
            }
            modalImage.src = `${works[current+1].children[0].getAttribute('src')}`;
            modalCaption.textContent = `${works[current+1].children[1].children[0].children[1].textContent}`;
            current += 1;
        }

        function prev() {
            if (current === 0) {
                current = works.length;
            }
            modalImage.src = `${works[current-1].children[0].getAttribute('src')}`;
            modalCaption.textContent = `${works[current-1].children[1].children[0].children[1].textContent}`;
            current -= 1;
        }
        arrowLeft.addEventListener('click', prev);


    });



});
modalClose.addEventListener('click', () => {
    modal.classList.remove('modal-visible');
    modalImageContainer.classList.remove('modal-animation');

});
// text animation
let workText = document.querySelector('.work-text');
console.log(workText.getBoundingClientRect().top);
window.addEventListener('scroll', () => {
    if (workText.getBoundingClientRect().top <= 575) {
        workText.style.animation = 'workText forwards .3s';
    }

});
// Preloader System

let preloader = document.querySelector('.preloader-container');


setTimeout(() => {

    preloader.classList.add('preloader-animate');
}, 1900)

// Custom cursor

let curSor = document.querySelector('.cursor'),
    effects = document.querySelectorAll('.mouse-effect'),
    heroContainer = document.querySelector('.hero-text');
heroContainer.addEventListener('mouseover', () => {
    curSor.classList.add('cursor-effect');

})
heroContainer.addEventListener('mouseout', () => {
    curSor.classList.remove('cursor-effect');

})
burger.addEventListener('mouseover', () => {
    curSor.classList.add('cursor-effect');

})
burger.addEventListener('mouseout', () => {
    curSor.classList.remove('cursor-effect');

});
window.addEventListener('click', () => {
    curSor.classList.add('cursor-expand');
    setTimeout(() => {
        curSor.classList.remove('cursor-expand');
    }, 200)
})



document.addEventListener('mousemove', (e) => {
    curSor.setAttribute("style", `top: ${e.pageY-10}px; left: ${e.pageX -10}px;`)
});
effects.forEach((effect) => {
    console.log(effect);
    effect.addEventListener('mouseover', () => {
        curSor.classList.add('cursor-effect');
    });
    effect.addEventListener('mouseout', () => {
        curSor.classList.remove('cursor-effect');
    });
});

// burger.addEventListener('mouseover', () => {
//     // alert('true');
//     curSor.classList.toggle('cursor-effect');
// })