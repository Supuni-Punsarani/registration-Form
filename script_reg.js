function validateForm(){
    let name = document.getElementById("uname").value;
    let age = document.getElementById("age").value;
    let number = document.getElementById("number").value;
    //let radioButtons = document.getElementsByName("gender").value;
    //let isChecked = false;
    let password =document.getElementById("password").value;
    let copassword=document.getElementById("copassword").value;
    /*let password = document.getElementById("password").value;*/
    if(name===""){
        alert("Name must be filled out");
        return false;
    }
    if(age===""){
        alert("Age must be filled out");
        return false;
    }
    else if (isNaN(age) || age <= 0) {
        alert("Age must be a valid positive number");
        return false;
    }
    /*for (let i = 0; i < radioButtons.length; i++) {
        if (radioButtons[i].checked) {
            isChecked = true;
            break;
        }
    }
    if (!isChecked) {
        alert("Please select a gender");
        return false;
    }*/
    if(number ===""){
        alert("Mobile number must be filled out:");
        return false;
    }
    if(number.length !==10){
        alert("Phone number must have exactly 10 digits");
        return false;
    }
    if(password===""){
        alert("password must be filled out : ");
        return false;
    }
    if(password<=8){
        alert("password must be greater than 8 characters");
        return false;
    }
    if(copassword===""){
        alert("Comfirm password must be filled out : ");
        return false;
    }
    if(password!==copassword){
        alert("Enter correct password :");
        return false;
    }
    
    
    /*return true;
    // After validation passes
    if (validationPassed) {
        // Display the success message
        document.getElementById("successMessage").style.display = "block";
    }*/

}
function handleFormSubmit() {
    // Display a success message after the form is submitted
    alert("Form submitted successfully");
}