function openingHours() {
    let now = new Date();
    let hour = now.getHours(); 
    
    let openingtime = 8;
    let closingtime = 23;
    let status = document.getElementById("status");
    status.innerHTML = "Start Your morning the right way!";
    status.style.color = 'orange';
    
    if (hour >= openingtime && hour < closingtime) {
        status.innerHTML = "Open for your service!";
        status.style.color = "saddlebrown";
    } else { 
        status.innerHTML = "Closed now";
        status.style.color = "saddlebrown";
    } 
} 

function Greetingstatement() {
    let now = new Date();
    let hour = now.getHours();
    let greetings = "";
    
    if (hour < 12) {
        greetings = "Good Morning!";
    } else if (hour < 15) {
        greetings = "Good Afternoon!";
    } else {
        greetings = "Good Evening!";
    }
     
    document.getElementById("greeting").innerHTML = greetings;
}

window.onload = function() {
    Greetingstatement();
    openingHours();
};

