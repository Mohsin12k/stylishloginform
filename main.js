const popupButton = document.querySelector('.popup_btn');
const mainForm = document.querySelector('.mainLogin');
const closeIcon = document.querySelector('.closeIcon');
const registerMe = document.querySelector('.registerNow');
const accountExist = document.querySelector('.accountExist');

popupButton.addEventListener('click', ()=>{
    mainForm.classList.toggle('popup_btn');
    mainForm.classList.remove('active');
});

closeIcon.addEventListener('click', ()=>{
    mainForm.classList.remove('popup_btn');
    mainForm.classList.remove('active');
});

registerMe.addEventListener('click', ()=>{
    mainForm.classList.add('active');
});

accountExist.addEventListener('click', ()=>{
    mainForm.classList.remove('active');
})