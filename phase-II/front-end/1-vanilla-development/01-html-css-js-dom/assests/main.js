console.log("JS is connected from main.js");

const pageTitle = document.querySelector("#page-title");
const statusMessage = document.querySelector("#status-message")
const changeTitleButton = document.querySelector("#change-title-button")
const userForm = document.querySelector("#user-form")
const formOutput = document.querySelector("#form-output")
const dynamicContainer = document.querySelector("#dynamic-container")
const addBoxButton = document.querySelector("#add-box-button")
const removeBoxButton = document.querySelector("#remove-box-button")

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


const addDemoDiv=()=>{
    const demoDiv = document.createElement("div");
    demoDiv.innerText= "I was created by JavaScript";
    demoDiv.className = "demo-box";
    dynamicContainer.appendChild(demoDiv);
    statusMessage.innerText="JavaScript created a new div and appended it to the page."
}

addBoxButton.addEventListener("click", addDemoDiv)

const removeDemoDiv=()=>{
    const lastBox = dynamicContainer.lastElementChild
    console.log(lastBox)
    if (lastBox === null){
        statusMessage.innerText = "There is no div to remove"
        return;
    }
    lastBox.remove();
    statusMessage.innerText = "JS removed a div from the page."
}
removeBoxButton.addEventListener("click", removeDemoDiv)

