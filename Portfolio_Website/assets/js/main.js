/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

if(navToggle){
    navToggle.addEventListener('click', ()=>{
        navMenu?.classList.add('show-menu')
    })
}

if(navClose){
    navClose.addEventListener('click', ()=>{
        navMenu?.classList.remove('show-menu')
    })
}
/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction =() =>{
    const navMenu = document.getElementById('nav-menu')
    navMenu?.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


/*=============== ADD BLUR TO HEADER ===============*/
const blurHeader = ()=>{
    const header = document.getElementById('header')
    this.scrollY >= 50 ? header?.classList.add('blur-header')
                       : header?.classList.remove('blur-header')
}
window.addEventListener('scroll', blurHeader)

/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'),
      contactMessage = document.getElementById('contact-message')

const sendMail = (e)=>{
    e.preventDefault()
    emailjs.sendForm('service_bk5qqe8', 'template_wn2eouo', '#contact-form', 'HKW5KeNtd8nOl6y7W')
       .then(()=>{
        contactMessage.textContent = 'Message sent successfully'

        setTimeout(()=>{
            contactMessage.textContent = ''
        }, 3000)
        contactForm.reset()
       }, ()=>{
        contactMessage.textContent = 'Message not sent'
        setTimeout(()=>{
            contactMessage.textContent = ''
        }, 3000)
       })
}
contactForm?.addEventListener('submit', sendMail)
/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp =()=>{
    const scrollUp = document.getElementById('scroll-up')
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                                            : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
})
sr.reveal('home__data, .home__social, .contact__container, .footer__container')
sr.reveal('home__image', {orgin: 'bottom'})
sr.reveal('about__data, .skills__data', {orgin: 'left'})
sr.reveal('about__image, .skills__content', {orgin: 'right'})
sr.reveal('services__card, .project__card', {interval: 100})