$(document).ready(function() {
    var inputEl = $("#userInput");
    var mess = $(".message");
    
    $("h1").css("color", "blue");
    
    $("p").each(function() {
        var current = $(this);
        if (current.html().length >= 40) {
            current.css("font-style", "italic");
        }
        else {
            current.css("font-weight", "bold");
        }
    });
    
    
    $(".run").click(function () {
        $("p").css("color", "red");
        console.log(inputEl.val());
        
        mess.html("Message: " + inputEl.val());
        
        var pcopy = $("#p1").clone();
        
        $("h1").remove();
        
        mess.after(pcopy);
        
    });
    
});