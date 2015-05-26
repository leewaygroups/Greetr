//Demo use of Greetr.js mini lib

$("#login").click(function(){
    
    //This vanilla user is for demo purpose. In real life, getting user detail is more sophisticated 
    //and is very much based on your implementation choice  
    var greetUser = G$("Jane", "Doe");
    $("#loginDiv").hide();
    
    greetUser.setLanguage($("#lang").val()).HTMLGreeting("#greeting", true).log();
});