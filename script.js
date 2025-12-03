/*Header*/
const header = document.querySelector('header');
document.addEventListener('scroll', ()=>{
    const scrollValue = window.scrollY;
    if(scrollValue > 50){
        header.style.background = "#262020"
    }
    else{
        header.style.background = "transparent"
    }
})


const about_link =  Array.from(document.querySelectorAll('.about-link'));
const about_image = document.querySelector('.about-image-box img');

const about_image_change = (n,e)=>{
    about_image.src = `./assests/about${n}.jpg`;
    about_link.forEach((elem)=>elem.classList.remove('active'));
    const element = e.target;
    element.classList.add('active')
}
console.log(about_image)