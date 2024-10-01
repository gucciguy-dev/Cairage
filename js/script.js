const toggleNavColor = () => {
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('mouseover' , () => {
            link.style.color = '#FF8343';
        });
        link.addEventListener('mouseout' , () => {
            link.style.color = '#FFEFD5';
        });
    });
};

const updateContent = (sectionId, content) => {
    const section = document.getElementById(sectionId);
    if(section) {
        section.innerHTML =`<p>${content}</p>`;
    }
};

toggleNavColor();

function* countUp() {
    let count = 1;
    while (true) {
        yield count++;
    }
}

const generator = countUp();

document.getElementById('start').addEventListener('click', () => {
    const { value } = generator.next();
    document.getElementById('output').textContent = `Count: ${value}`;
});


