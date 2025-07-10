const popupButton = document.querySelector('.popup_btn');
const mainForm = document.querySelector('.mainLogin');
const closeIcon = document.querySelector('.closeIcon');
const registerMe = document.querySelector('.registerNow');
const accountExist = document.querySelector('.accountExist');

// Toggle popup
popupButton.addEventListener('click', () => {
    mainForm.classList.toggle('popup_btn');
    if (mainForm.classList.contains('popup_btn')) {
        mainForm.style.transform = 'scale(1)';
    } else {
        mainForm.style.transform = 'scale(0)';
    }
});

// Close icon
closeIcon.addEventListener('click', () => {
    mainForm.classList.remove('popup_btn');
    mainForm.style.transform = 'scale(0)';
});

// Switch to registration
registerMe.addEventListener('click', () => {
    mainForm.classList.add('active');
});

// Switch to login
accountExist.addEventListener('click', () => {
    mainForm.classList.remove('active');
});
