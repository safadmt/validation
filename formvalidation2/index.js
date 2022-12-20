

let alertbox = document.getElementById('alertbox');

function checkboxValidation() {
    let checkboxarray = 0
    //let form = document.getElementById('formdiv')
    let hobbies = document.getElementsByName('hobbies[]') 
    for(let i = 0; i < hobbies.length; i++) {
        let item = hobbies[i]
        if(item.checked && item.name === "hobbies[]") {
            checkboxarray++
        }
    }
    if(checkboxarray === 0) {
        return false
    }else{
        return true
    }
}
document.getElementById('submitbutton').addEventListener('click', function() {

    let fname = document.getElementById('fname');
    let lname = document.getElementById('lname');
    let streetAddress = document.getElementById('staddress');
    let streetAddress2 = document.getElementById('staddress2');
    let city = document.getElementById('city');
    let region = document.getElementById('region');
    let postalcode = document.getElementById('postalcode');
    let country = document.getElementById('country');
    let phone = document.getElementById('phone');
    let email = document.getElementById('email');
    let gender_male = document.getElementById('gendermale');
    let gender_famale = document.getElementById('genderfemale');
    

    if(fname.value === "" || fname.value.length < 4) {
        
        if(fname.value === "") {
            alertbox.innerHTML = "First name must be fillde out"
            
        }else{
            alertbox.innerHTML = "Atleast minimum 4 charators long"
            
        }
        
    }else if(lname.value === "") {
        alertbox.innerHTML = "Last name must be fillde out"

    }else if(streetAddress.value === "" || streetAddress2.value === "" || city === "") {
        alertbox.innerHTML = "Address ie required"
    }else if(postalcode.value.length != 6 ) {
        alertbox.innerHTML = "Enter a valid postal code"
    }else if(country.selectedIndex === 0) {
        alertbox.innerHTML = "Please selcet Country"
    }else if(phone.value === "" || phone.value.length != 10) {
        if(phone.value === "") {
            alertbox.innerHTML = "Phone number is required"
        }else {
            alertbox.innerHTML = "Phone number must be 10 charators long"
        }
    }else if(email.value === "") {
        alertbox.innerHTML = "Email id is required"
    }else if(gender_male.checked != true && gender_famale.checked != true) {
        alertbox.innerHTML = "Please select the gender"
    }else if(checkboxValidation() === false) {
        
        alertbox.innerHTML = "Please select Hobbies"
        
    }else {
        document.getElementById('formsubmit').submit()
        alertbox.innerHTML = "Form submitted successfully"
        
    }

})

