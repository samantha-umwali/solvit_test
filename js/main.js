const data={
    username:'samantha',
    password:'1234'
}
const form = document.querySelector('#form');
form.onsubmit = (event) => {
  event.preventDefault();
  const loginData = {
    email: event.target.elements['username'].value,
    password: event.target.elements['password'].value,
  }
  if(loginData.email===data.username && loginData.password===data.password){
    console.log(loginData)
  alert("the account has been created");
  }
  else{
    alert("the account was not created");
  }
}
