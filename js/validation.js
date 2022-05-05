function validation(){
    let a = document.getElementById('username').value 
   // alert(a);

   if(a == ''){
document.getElementById('error').innerText='please enter the value'
document.getElementById('username').style.border="2px solid red"
    return false;
   }

else if (a.trim()== ''){
    document.getElementById('error').innerText='do not take space'
document.getElementById('username').style.border="2px solid red"
    return false;
}
else if (a.length<5){
    document.getElementById('error').innerText='plz type greater than 5 '
    document.getElementById('username').style.border="2px solid red"
    return false;
}
}