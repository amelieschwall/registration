

// var submitButton=document.getElementById('submit-button')
// var firstNameUI=document.getElementById('first-name') 
// var lastNameUI=document.getElementById('last-name') 
// var passwordUI=document.getElementById ('password')
// var checkboxUI=document.getElementById('checkbox')

// // console.log(submitButton)

// // console.log (users)

// //trigger click button, submit function
// submitButton.onclick = function() {
//     console.log ('clicked')
//     console.log (users)

//     if (firstNameUI.value.length == 0) {
//         return flase
//     }

// // var firstName = firstNameInput.value
// // var lastName= lastNameInput.value
// // user.push (new User (firstName, lastName))

// }


// if (passwordUI.value.length < 8) {
//     document.getElementById('resultSpan').innerText ="Password too short, please have a longer password"
//     return false // so that it does not continue and stop the execution 
// }

// // if user has agreed to terms and conditions

// if(checkboxUI.checked) {
//     var firstName = firstNameUI.value
//     var lastName = lastNameUI.value
//     var username = usernameUI.value
//     var password = passwordUI.value


// for (let i=0; i<user.length; i++){
//     // if (usernameUI.value === users [i].username)
//     // {update the span to let the user know that he has choosen a diferent and return false
// }
// }

// users.push (new User (firstName,lastName,username,password))
// console.log(users)


// // redirect
// // window.location.assign("./login.html")



// Because I will have to perform multiple actions with the various
// elements of our HTML form, I create a binding for each input element
// so I will not have to use the 'document' object each time

console.log ("registration.js loaded")

const firstNameUI = document.getElementById('first-name')
const lastNameUI = document.getElementById('last-name')
const usernameUI = document.getElementById('username') 
const passwordUI = document.getElementById('password')
const checkboxUI = document.getElementById('checkbox')
const submitBtnUI = document.getElementById('submit-button')


// To respond to the users click, I make use of the onclick property
// of the submit button and attach a function to it
submitBtnUI.onclick = function () {

    console.log('clicked')

    // If the user has agreed to the terms and conditions,
    // I create a new user object from his input
    if(checkboxUI.checked) {
        var firstName = firstNameUI.value
        var lastName = lastNameUI.value
        var username = usernameUI.value
        var password = passwordUI.value

        // To store the user I add him to the array of users (DB)
        users.push(new User(firstName, lastName, username, password))
    }
}


function filledOut () {
    if(firstNameUI.value.length == 0 || lastNameUI.value.length == 0 || usernameUI.value.length ===0 || passwordUI.value.length===0){
        // We set the resultspan with a new text and return false to get out of this function
        resultSpan.innerText = "You need to fill out the empty boxes in order to use the system";
        return false;
      }

}

function pwCheck (){
if (passwordUI.value.length < 8) {
        resultSpan.innerText ="Password too short, please have a longer password"
        // return false // so that it does not continue and stop the execution 
        return false
    }
}