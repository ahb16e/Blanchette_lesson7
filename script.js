/*
Program Name: Recipe Display Application
Author: Alexander Blanchette
Date: 11/18
Filename: script.js
*/
/*---------------------------------------------------------------------------------------------------------------------------------------------------*/

    /* global $ */
    
    // displayes the next element after the current target
    function display(event) {
        
        $ (event.currentTarget).next().fadeIn("slow");
        
    }// end of display
    
    //attach event listener to h3 elements to invoke display function on click
        $ ("h3").click(display);