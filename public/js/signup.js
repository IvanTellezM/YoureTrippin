$(document).ready(function() {
    $(".signup_form").on("submit", function handleFormSubmit(event){
        event.preventDefault();
    
        //if any form input is empty, don't submit
        if (!$("#firstName").val().trim() || !$("#lastName").val().trim() || !$("#exampleInputEmail").val().trim() || !$("#exampleInputPassword1").val().trim()) {
            return;
        }
    
        // Creating an object to be pushed up to user table
        var newUser = {
            firstName: $("#firstName").val().trim(),
            lastName: $("#lastName").val().trim(),
            username: $("#exampleInputEmail").val().trim(),
            password: $("#exampleInputPassword1").val().trim()
        }
        
        registerUser(newUser);
    })
    
    function registerUser(user){
        $.post("/api/register", user, function(data) {
            console.log(data);
            window.location.href = "/login";
        })
    }
})
