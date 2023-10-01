function scrollToElement(elementSelector, instance = 0) {
    // Select all elements that match the given selector
    const elements = document.querySelectorAll(elementSelector);
    // Check if there are elements matching the selector and if the requested instance exists
    if (elements.length > instance) {
        // Scroll to the specified instance of the element
        elements[instance].scrollIntoView({ behavior: 'smooth' });
    }
}

const link1 = document.getElementById("link1");
const link2 = document.getElementById("link2");
const link3 = document.getElementById("link3");

link1.addEventListener('click', () => {
    scrollToElement('.header');
});

link2.addEventListener('click', () => {
    // Scroll to the second element with "header" class
    scrollToElement('.header', 1);
});

link3.addEventListener('click', () => {
    scrollToElement('.column');
});

// Adicionando eventos aos botões
document.addEventListener('DOMContentLoaded', function () {
    const btn1 = document.getElementById('btn1');
    const btn2 = document.getElementById('btn2');
    const btn3 = document.getElementById('btn3');

    btn1.addEventListener('click', function () {
        const link = btn1.getAttribute('data-link');
        window.location.href = link;
    });

    btn2.addEventListener('click', function () {
        const link = btn2.getAttribute('data-link');
        window.location.href = link;
    });

    btn3.addEventListener('click', function () {
        const link = btn3.getAttribute('data-link');
        window.location.href = link;
    });

    btn4.addEventListener('click', function () {
        const link = btn4.getAttribute('data-link');
        window.location.href = link;
    });

    btn5.addEventListener('click', function () {
        const link = btn5.getAttribute('data-link');
        window.location.href = link;
    });
});
