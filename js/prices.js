let bookNowBtsClass;
const bookNowBts = document.querySelectorAll('.open-form-btn');
const bookNowBtsArr = Array.from(bookNowBts);
console.log(bookNowBtsArr)

const currentSection = document.querySelector('.prices');


for(const bookNowBtn of bookNowBtsArr) {
    bookNowBtn.addEventListener('click', openBookNowForm);
}

cancelBtn.addEventListener('click', closeForm);
formSentBtn.addEventListener('click', formSuccessfullySent);