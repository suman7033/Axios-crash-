const adduserbtn = document.getElementById('adduser');
const btntext = adduserbtn.innerText;
const usernametextfield =document.getElementById('username');
const recordsdisplay = document.getElementById('records');
let userarray = [];
let edit_id=null;
let objstr = localStorage.getItem('users');
if(objstr!=null){
   userarray = JSON.parse(objstr);
}
displayinfo()
adduserbtn.onclick =()=>{
    const name = usernametextfield.value;
    if(edit_id!=null){
        //edit
        userarray.splice(edit_id,1,{'name' :name})
        edit_id=null;
    }else{
        //insert
         
     alert("sure! you want to Add");
     userarray.push({'name':name});
    }
      
     saveinfo(userarray);
     usernametextfield.value ="";
     displayinfo()
     adduserbtn.innerText =btntext;
}
function saveinfo(userarray){
    let str = JSON.stringify(userarray);  //change the string 
    localStorage.setItem('users',str);
}
function displayinfo(){
     let statement ="";
     userarray.forEach((user,i)=>{
        statement+=`<tr>
        <th scope="row">${i+1}</th>
        <td>${user.name}</td>
        <td><i class="btn text-white fa fa-edit btn-info mx-3" onclick='editinfo(${i})'></i> &nbsp;&nbsp;<i class="btn text-white fa fa-trash btn-danger mx-3" onclick='deleteinfo(${i})'></i></td>
      </tr>`;
     });
     recordsdisplay.innerHTML = statement;
}
function editinfo(id){
    edit_id = id;
    usernametextfield.value = userarray[id].name;
    adduserbtn.innerText ='save change';

}
function deleteinfo(id){
    userarray.splice(id,1);
    saveinfo(userarray);
    displayinfo();
}