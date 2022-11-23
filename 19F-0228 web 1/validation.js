function validateForm()
{

	var input_user,input_pass;
	input_user = document.getElementById("user").value;
    input_pass = document.getElementById("pass").value;

	if (input_user==""|| input_pass=="")
	{
		alert("All Required Feilds must be filled");
		return false;
	}
    if (user.value.length < 3)
    {
	alert("Name Length is Not Valid must be greater then 3");
	return false; 
    }
    if (pass.value.length < 8)
    {
	alert("Password Length is Not Valid must be greater then 8");
	return false; 
    }
}