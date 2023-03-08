'use strict';

$(window).on('load',function(){
	  
	  //assuming an email containing charcters : a-z , A-Z, 0-9 and underscore. And from either a .com or .net account
	  const email_RegEx = /\w+@\w+\.{1}(com|net){1}/;
	  const name_RegEx = /[a-z | A-Z]+/;
	  const password_RegEx = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
	  let check = '';
	  const colors = {
		  'Red': 'hsl(0, 100%, 74%)',
		  'Dark Blue': 'hsl(249, 10%, 26%)',
	  };
	  
	  //get first-name label id to display error message if needed, and get first-name element.
	  const first_error = document.getElementById('first-error');
	  const first = document.getElementById('first-name');
	  
	  //get last name label id to display error message if needed, and get last-name element
	  const last_error = document.getElementById('last-error');
	  const last = document.getElementById('last-name');
	  
	  //get email label id to display error message if needed, and get email element
	  const email_error = document.getElementById('email-error');
	  const email = document.getElementById('email');
	  
	  //get password label id to display error message if needed, and get password element
	  const password_error = document.getElementById('password-error');
	  const password_el = document.getElementById('password');
	  
	  
	  document.querySelector('#first-name').addEventListener('focus',function(){
		      //on focus, set the first-name input field to empty
		      first.placeholder='';
	  });
	  document.querySelector('#last-name').addEventListener('focus',function(){
		      //on focus, set the last-name input field to empty
		      last.placeholder='';
	  });
	  document.querySelector('#email').addEventListener('focus',function(){
		      //on focus, set the email input field to empty
		      email.placeholder='';
	  });
	  document.querySelector('#password').addEventListener('focus',function(){
		      //on focus, set the password input field to empty.
		      password_el.placeholder='';
	  });
	  
	  
	  //the user clicked the 'claim your free trial' button, and may or may not have filled out the form correctly or at all.
	  document.querySelector('.btn').addEventListener('click',function(){
		   event.preventDefault();
		   console.log('in .btn');
		   
		   //check first name 
		   const first_value = first.value;
		   console.log('First name value:',first_value);
		   //check to see if it validates 
		   check = name_RegEx.test(first_value);
		   if(check=== false){
			    console.log("first name Error!");
				//display the input element inner red error icon when the user leaves this field blank;
				$('#first-name').addClass('icon-error');
				//Display an error message when the user leaves this field blank;
				first_error.innerHTML= '<p>' + 'First name field cannot be empty' + '</p>';
		   }
		   
		   //check last name
		   const last_value = last.value;
		   console.log('last name value:',last_value);
		   //check to see if it validates 
		   check = name_RegEx.test(last_value);
		   if(check=== false){
			    console.log("last name Error!");
				//display the input element inner red error icon when the user leaves this field blank;
				$('#last-name').addClass('icon-error');
				//Display an error message when the user leaves this field blank;
			    last_error.innerHTML= '<p>' + 'Last name field cannot be empty' + '</p>';
		   }
		   
		   
		   //reset the email color , in case user has had to retype their email to correct format this time and re-pressed the button.
		   $('#email').css('color',colors["Dark Blue"]);
		   //check email address, get the entered email input value first
		   const email_value = email.value;
		   console.log('email value:',email_value);
		   //check to see if it validates 
		   check = email_RegEx.test(email_value);
		   if(check=== false){
			    console.log("email Error!");
				//display the input element inner red error icon when the user leaves this field blank;
				$('#email').addClass('icon-error');
				//display the users wrong email entry in red
				$('#email').css('color',colors["Red"]);
				//Display an error message when the user leaves this field blank or enters the wrong format email.
			    email_error.innerHTML='<p>' + 'Email field cannot be empty or the wrong format' + '</p>';
		   }
		   
		   
		   //reset the password color, in case user has had to retype their password to correct format this time and re-pressed the button
		   $('#password').css('color',colors["Dark Blue"]);
		   //check password, get the entered password input value first
		   const password_value = password_el.value;
		   console.log('password value:',password_value);
		   //check to see if it validates 
		   check = password_RegEx.test(password_value);
		   if(check=== false){
			    console.log("password Error!");
				//display the input element inner red error icon when the user leaves this field blank;
				$('#password').addClass('icon-error');
				//display the users wrong password entry in red
				$('#password').css('color',colors["Red"]);
				//Display an error message when the user leaves this field blank or in the wrong format
			    password_error.innerHTML='<p>' + 'Password field cannot be empty or the wrong format' + '</p>';
		   }
		   
	  });
	  document.querySelector('#first-name').addEventListener('change',function(){
		      //when the user has typed something new, reset the error messag/icon
		      first_error.textContent='';
			  $('#first-name').removeClass('icon-error');
	  });
	  document.querySelector('#last-name').addEventListener('change',function(){
		      //when the user has typed something new, reset the error messag/icon
			  last_error.textContent='';
			  $('#last-name').removeClass('icon-error');
	  });
	  document.querySelector('#email').addEventListener('change',function(){
		      //when the user has typed something new, reset the error messag/icon
			  email_error.textContent='';
			  $('#email').removeClass('icon-error');
	  });
	  document.querySelector('#password').addEventListener('change',function(){
		      //when the user has typed something new, reset the error messag/icon
			  password_error.textContent='';
			  $('#password').removeClass('icon-error');
	  });
	  
});