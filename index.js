//IIFE
window.dome = (function(){
    
    function Dome(els){


    }
    
    var dome = {
        get:function(selector){
            var els;
            if(typeof selector == "string"){
                els = document.querySelectorAll(selector);

            } else if(selector.length){
                els = selector;
            } else {
                els = [selector];
            }
            return new Dome(els);
        }
    };

    return dome;
}());