let myForm=document.querySelector('#my-form');
let nameInput=document.querySelector('#name')
let emailInput=document.querySelector('#email');
let msg=document.querySelector('.msg');
let userList=document.querySelector('#users');

myForm.addEventListener('submit',onSubmit);
function onSubmit(e){
    e.preventDefault();
    console.log(nameInput.value);
  
    if(nameInput.value ==="" || emailInput.value===""){
        msg.classList.add();
        msg.classList.add("error");
        msg.innerHTML="fill the name or email box";
        setTimeout(() =>msg.remove(),3000);
    }else{
        let newLi=document.createElement('li');
        newLi.appendChild(document.createTextNode((nameInput.value)+"--"+" "+(emailInput.value)));

        userList.appendChild(newLi);
        nameInput.value='';
        emailInput.value='';
    }
}