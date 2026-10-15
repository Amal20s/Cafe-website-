function formvalidation(){
    let phone = document.getElementById("tel").value;

    if (isNaN(phone)) {
        alert("please fill Phone number correctly");
        return false;
    }
    if (phone.length !=10 || phone[0]!="0"|| phone[1]!="5"){
        alert("enter phone number correclty");
        return false;
    }
    return true;
 }