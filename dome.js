//IIFE
window.dome = (function(){
    
    // create instance of dome
    function Dome(els){
        for(var i = 0; i< els.length;i++){
            this[i] = els[i];
        }
        this.length = els.length;

    }
    
    var dome = {
        // getting elements
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