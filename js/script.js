document.querySelector('.control-one');
document.querySelector('.control-two');
document.querySelector('.control-three');
document.querySelector('.site-wrapper');
document.querySelector('.slider-one');
document.querySelector('.slider-two');
document.querySelector('.slider-three');
let site_wrapper = document.querySelector('.site-wrapper');
let control_one  = document.querySelector('.control-one');
let control_two  = document.querySelector('.control-two');
let control_three  = document.querySelector('.control-three');
let slider_one  = document.querySelector('.slider-one');
let slider_two  = document.querySelector('.slider-two');
let slider_three  = document.querySelector('.slider-three');

control_one.onclick =function(){
    site_wrapper.classList.remove('slide-wrapper-2');
    site_wrapper.classList.remove('slide-wrapper-3');
    site_wrapper.classList.add('slide-wrapper-1');

    control_one.classList.add('current');
    control_two.classList.remove('current');
    control_three.classList.remove('current');

    slider_one.classList.add('slide-current');
    slider_two.classList.remove('slide-current');
    slider_three.classList.remove('slide-current');
};

control_two.onclick =function(){
    site_wrapper.classList.remove('slide-wrapper-1');
    site_wrapper.classList.remove('slide-wrapper-3');
    site_wrapper.classList.add('slide-wrapper-2');

    control_two.classList.add('current');
    control_one.classList.remove('current');
    control_three.classList.remove('current');
    
    slider_two.classList.add('slide-current');
    slider_one.classList.remove('slide-current');
    slider_three.classList.remove('slide-current');
};

control_three.onclick =function(){
    site_wrapper.classList.remove('slide-wrapper-1');
    site_wrapper.classList.remove('slide-wrapper-2');
    site_wrapper.classList.add('slide-wrapper-3');

    control_three.classList.add('current');
    control_one.classList.remove('current');
    control_two.classList.remove('current');

    slider_three.classList.add('slide-current');
    slider_one.classList.remove('slide-current');
    slider_two.classList.remove('slide-current');
};