// JavaScript file for checking validity of the input
document.getElementById('regForm').addEventListener('submit', function(e)
    {
        e.preventDefault();

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const age = document.getElementById('age').value.trim();
        const gender = document.getElementById('gender').value.trim();


        // Regular expression to check validity of email
        const emailRegex = /^\S+@\S+\.\S+$/;

        // Regular expression to check validity of phone number
        const phoneRegex = /^\d{10}$/;

        let isValid = true;
        document.querySelectorAll('.error').forEach(error => error.textContent = '');

        if(!name){
            document.getElementById('nameError').textContent = 'Name is required';
            isValid = false;
        }

        if(!email){
            document.getElementById('emailError').textContent = 'E-Mail is required';
            isValid = false;
        }
        else if(!emailRegex.test(email))
        {
            document.getElementById('emailError').textContent = 'Invalid E-Mail';
            isValid = false;
        }

        if(!phone){
            document.getElementById('phoneError').textContent = 'Phone is required';
            isValid = false;
        }
        else if(!phoneRegex.test(phone))
        {
            document.getElementById('phoneError').textContent = 'Invalid phone number';
            isValid = false;
        }

        if(!age){
            document.getElementById('ageError').textContent = 'Age is required';
            isValid = false;
        }
        else if(age>18)
        {
            document.getElementById('ageError').textContent = 'Invalid Age';
            isValid = false;
        }

        if(gender === '---Select---')
        {
            document.getElementById('genderError').textContent = 'Please select a gender';
            isValid = false;
        }

        // Alert for successful form submission
        if(isValid)
        {
            alert('Form submitted successfully');
        }
    }
)