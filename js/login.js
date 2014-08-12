jQuery(document).ready(function($){
    if(localStorage.getItem("userLogged") != null){
        document.location = "app.html";
    }
    
    $("#login").on('submit', function(e){
        e.preventDefault();
        if ($("#userid").val().trim() == '') {
            alert('Enter your user id.');
            return false;
        }
        if ($("#password").val().trim() == '') {
            alert('Enter your password.');
            return false;
        }
        
        var input = {
            username: $("#userid").val(),
            password: $("#password").val()
        };
        
        
        /* change this user check method to ur own */
        $.ajax({
            url: 'temp-data/users.json',
            //data: input,
            success: function(response){
                var user = {};
                $.each(response, function(index, each){
                    if (each.username == input.username && each.password == input.password) {
                        user = each;
                        return;
                    }
                });
                console.log(user);
                if (typeof user.username != "undefined") {
                    delete(user.password)
                    var LUser = JSON.stringify(user)
                    localStorage.setItem('userLogged',LUser);
                    document.location = "app.html";
                }
                else{
                    alert('Invalid login.')
                }
                
            },
            error: function(){
                alert('Error')
            }
        });
        
    })
});