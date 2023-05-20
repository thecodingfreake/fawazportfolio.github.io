let selections=document.querySelectorAll('section');
let navlinks=document.querySelectorAll('header nav a');


window.onscroll=()=>{
    selections.forEach(sec =>{
        let top=window.scrollY;
        let offset=sec.offsetTop-150;
        let height=sec.offsetHeight;
        let id=sec.getAttribute('id');

        if(top>= offset && top < offset+height){
            navlinks.forEach(links=>{
                links.classList.remove('active');
                console.log('yes')
                document.querySelector('header nav a[href*='+ id +']').classList.add('active');
            });
        };
    });
    let header=document.querySelector('header');
    header.classList.toggle('sticky',window.scrollY >100);
};
ScrollReveal({ reset: true ,distance:'80px',duration:2000,delay:200});
ScrollReveal().reveal('.home-content, .heading ', { origin:'top'});
ScrollReveal().reveal('.home-img, .service-container,.portfolio-box, .contact form,.about-content', { origin:'bottom'});
ScrollReveal().reveal('.home-content p, .about-content ', { origin:'right'});
ScrollReveal().reveal('.home-content h1, .about-img ', { origin:'left'});

const typed=new Typed('.multiple-text',{
    strings:['FullStack Developer','Blogger','AppDeveloper Developer'],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});

const typed2=new Typed('.multiple-text2',{
    strings:['A coding freak with 2 stars in Code chef and solved over 100 problems in Leetcode platform.', ' My hobbies are reading books ,web development and developing small projects related to Artifical Intelligence realted Stuff'],
    typeSpeed:100,
    backSpeed:100,
    backDelay:100,
    loop:true
});