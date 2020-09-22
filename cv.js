

		function getCV(){
			localStorage["name"] = document.getElementById("name").value;
			localStorage["Mname"]= document.getElementById("Mname").value;
			localStorage["lname"]= document.getElementById("lname").value;
			localStorage["gender"]= document.getElementById("gender").value;
			localStorage["Contact"]= document.getElementById("Contact").value;
			localStorage["email"]= document.getElementById("email").value;
			localStorage["address"]= document.getElementById("address").value;
		
			window.location.replace("next.html") 
		}	
		
   
    
        function lettersOnly(input){
			var  regex= /[^a-z]/gi;
			input.value =input.value.replace(regex, "")
		}

		function NumbersOnly(){
			var inputbox = document.getElementById('Contact');
			if(isNaN(parseFloat(input.value))){
			inputbox.className= "red";
			}
			else{
				inputbox.className='green';
			}
		}




