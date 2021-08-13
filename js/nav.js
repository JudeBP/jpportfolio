// Header navigation responsiveness
const toggleBtn = document.querySelector('.hamburger-menu');
const links = document.querySelector('.links-container')
const header = document.querySelector('.header')

toggleBtn.addEventListener('click', () => {
    const linksHeight = links.getBoundingClientRect().height
    const height = document.querySelector('.header-links').getBoundingClientRect().height;
    if (linksHeight == 0) {
        links.style.height = `${height}px`;
        toggleBtn.style.transform = "rotate(90deg)";
    } else {
        links.style.height = "0";
        toggleBtn.style.transform = "rotate(0deg)";
    }
})


window.addEventListener('scroll', () => {
    let scrollHeight = window.pageYOffset;
    let headerHeight = header.getBoundingClientRect().height;

    if (scrollHeight > headerHeight) {
        header.classList.add('fixed-header')
    } else {
        header.classList.remove('fixed-header')
    }
})

const scrollBtns = document.querySelectorAll('.scroll');
scrollBtns.forEach((btn) => {
    // let id = btn
    btn.addEventListener('click', (ev) => {
        ev.preventDefault();
        const id = ev.currentTarget.getAttribute("href").slice(1)
        const element = document.getElementById(id);

        const navHeight = header.getBoundingClientRect().height;
        const linksHeight = links.getBoundingClientRect().height;
        const fixedNav = header.classList.contains('fixed-header');
        let position = element.offsetTop - navHeight;

        if (!fixedNav) {
            position -= navHeight;
        }
        if (navHeight > 88) {
            position += linksHeight;
        }

        // console.log(fixedNav)
        window.scrollTo({
            left: 0,
            top: position
        });
        links.style.height = '0';
        toggleBtn.style.transform = "rotate(0deg)";
    })
})

document.querySelector('.home-btn').addEventListener('click', function(){
    window.scrollTo({
        top: 0
    });
})
