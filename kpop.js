

// this is what the outside sees. kpop is what outside sees.
window.kpop = (function(){
    
    // element holder function : like class
    function KPOP(el){
        for(var i = 0; i < el.length; i++ ) {
            console.log(el[i]);
            this[i] = el[i];
        }
        this.length = el.length;
        console.log(el.length);
    }

    // ========= UTILS =========
    KPOP.prototype.forEach = function (callback) {
        this.map(callback);
        return this; 
    };
    KPOP.prototype.map = function (callback) {
        var results = [];
        for (var i = 0; i < this.length; i++) {
            results.push(callback.call(this, this[i], i));
        }
        return results; //.length > 1 ? results : results[0];
    };
    KPOP.prototype.mapOne = function (callback) {
        var m = this.map(callback);
        return m.length > 1 ? m : m[0];
    };

    // ========== DOM MANIPULATION ==========
    KPOP.prototype.text = function (text) {
        if (typeof text !== "undefined") {
            return this.forEach(function (el) {
                el.innerText = text;
            });
        } else {
            return this.mapOne(function (el) {
                return el.innerText;
            });
        }
    };

    var kpop = {
        get: function (selector) {
            var els;
            if (typeof selector === 'string') {
                els = document.querySelectorAll(selector);
            } else if (selector.length) { 
                els = selector;
            } else {
                els = [selector];
            }
            return new KPOP(els);
        }, 

        create: function (tagName, attrs) {
            var el = new KPOP([document.createElement(tagName)]);
            if (attrs) {
                if (attrs.className) { 
                    el.addClass(attrs.className);
                    delete attrs.className;
                }
                if (attrs.text) { 
                    el.text(attrs.text);
                    delete attrs.text;
                }
                for (var key in attrs) {
                    if (attrs.hasOwnProperty(key)) {
                        el.attr(key, attrs[key]);
                    }
                }
            }
            return el;
        }
    };

    return kpop;

})();