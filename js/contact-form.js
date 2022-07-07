const sendBtn = document.querySelector(".btn-send");
const formSentSection = document.querySelector(".sent");
const cancelBtn = document.querySelector(".reset");
const sendSuccessBtn = document.querySelector(".sent-ok");

const msgValidation = () => {
  userMsg = document.querySelector("#msg");

  if (userMsg.value.trim() === "") {
    addError(userMsg, "write your", "message");
  }
};
const formValidation = () => {
  userDataValidation("name", "number", "email");
  msgValidation();
  console.log("dupa");
};

const clearErrors = () => {
  userName = document.querySelector("#name");
  userPhone = document.querySelector("#number");
  userEmail = document.querySelector("#email");
  userMsg = document.querySelector("#msg");

  inputs = [userName, userPhone, userEmail, userMsg];
  console.log(inputs);

  for (const input of inputs) {
    if (
      input.classList.contains("error") ||
      input.nextElementSibling.classList.contains("error-msg")
    ) {
      removeError(input);
    }
  }
};

// const clearMsgError = () => {
//   const userMsg = document.querySelector("#msg");
//   if (
//     userMsg.classList.contains("error") ||
//     userMsg.nextElementSibling.classList.contains("error-msg")
//   ) {
//     removeError(userMsg);
//   }

//   console.log(userMsg);
// };

clearErrors();
// clearMsgError();

const clearForm = () => {
  inputs = [userName, userPhone, userEmail, userMsg];

  for (const input of inputs) {
    input.value = "";
  }
};

const submitForm = (e) => {
  e.preventDefault();
  formValidation();

  if (
    !userName.value ||
    !userPhone.value ||
    !userEmail.value ||
    !userMsg.value
  ) {
    return;
  } else {
    elementDisplay(formSentSection, "block");
    clearForm();
  }
};

function formSuccessfullySent() {
  elementDisplay(formSentSection, "none");
}

sendBtn.addEventListener("click", submitForm);
sendSuccessBtn.addEventListener("click", formSuccessfullySent);
