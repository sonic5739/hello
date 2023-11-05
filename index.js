gsap.to(".GK",{scale : '2', duration: 2, onComplete : ()=>{
    gsap.to(".GK",{delay : 2,scale : '1', duration: 2})
}});
gsap.to(".DF",{delay : 8, scale : '2', duration: 2, onComplete : ()=>{
    gsap.to(".DF",{delay : 2, scale : '1', duration: 2})
}});
gsap.to(".MF",{delay : 14, scale : '2', duration: 2, onComplete : ()=>{
    gsap.to(".MF",{delay : 2, scale : '1', duration: 2})
}});
gsap.to(".FW",{delay : 20, scale : '2', duration: 2, onComplete : ()=>{
    gsap.to(".FW",{delay:2, scale : '1', duration: 2})
}});