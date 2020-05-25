$(document).ready(function(){
    $("#signup-form").validate({
        rules:{
        
            fname:{
                required:true,
                minlength:4,
                maxlength:10
                
           },
           sname:{
            required:true,
            minlength:4
           },
           ema:{
            required:true,
            email:true
            
           },
           pass:{
               minlength:8
             },
             day:{
                 required:true
             },
             gender:{
                required:true 
             }
        },
        messages:{
            fname:{
            required:"enter the first name",
            minlength:"min 4 characyers"
         
         }
        }   
        
    })
})