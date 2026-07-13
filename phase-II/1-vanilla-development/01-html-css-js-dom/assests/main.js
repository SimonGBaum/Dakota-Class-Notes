console.log("JS is connected from main.js");

const pageTitle = document.querySelector("#page-title");
const statusMessage = document.querySelector("#status-message")
const changeTitleButton = document.querySelector("#change-title-button")
const userForm = document.querySelector("#user-form")
const formOutput = document.querySelector("#form-output")


console.log("Selected Element", pageTitle)

const changeTitle = ()=>{
    pageTitle.innerText="JavaScript changed the DOM";
    statusMessage.innerText="The page did not reload., JS Changed existing element"
}

changeTitleButton.addEventListener("click",  changeTitle )

const handleFormSubmit=(event)=>{
    event.preventDefault()
    const formData = new FormData(event.target);
    const userData = Object.fromEntries(formData);
    console.log(userData)

    const reminderText = userData.wantsNewsletter === "yes" 
    ? "You asked for reminder" 
    :  "You did not ask for reminder"

    formOutput.innerText = `Hello ${userData.userName}. 
    Your favorite color is ${userData.favColor}. ${reminderText}`
    formOutput.style.color= userData.favColor
}

userForm.addEventListener("submit", handleFormSubmit);
