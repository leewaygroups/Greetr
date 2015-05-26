(function (global, $) {
    var Greetr = function (firstName, lastName, language) {
        return new Greetr.init(firstName, lastName, language);
    };

    var supportedLangs = ["en", "es"];

    var greetings = {
        en: "Hello",
        es: "Hola"
    };

    var formalGreetings = {
        en: "Greetings",
        es: "Saludos"
    };

    var logMessages = {
        en: "Logged in",
        es: "Inicio sesion"
    };

    Greetr.prototype = {

        fullName: function () {
            return this.firstName + " " + this.lastName;
        },

        validate: function () {
            if (supportedLangs.indexOf(this.language) === -1) {
                throw "language not supported yet!";
            }
        },

        greeting: function () {
            return greetings[this.language] + " " + this.firstName;
        },

        formalGreeting: function () {
            return formalGreetings[this.language] + ", " + this.fullName();
        },

        greet: function (formal) {
            var msg;

            if (!formal) {
                msg = this.greeting();
            } else {
                msg = this.formalGreeting();
            }

            if (console) {
                console.log(msg);
            }

            return this;
        },

        log: function () {
            if (console) {
                console.log(logMessages[this.language] + ": " + this.fullName());
            }

            return this;
        },

        setLanguage: function (newlanguage) {
            if (newlanguage) {
                if (supportedLangs.indexOf(newlanguage) === -1) {
                    throw "\"" + newlanguage + "\"" + " is not supported yet.";
                } else {
                    this.language = newlanguage;
                }
            } else {
                this.language = supportedLangs[0];
            }

            this.validate();

            return this;
        },
        
        HTMLGreeting: function(selector, formal){
            if(!$){
                throw "JQuery not loaded.";
            }
            
            if(!selector){
                throw "Missing JQuery selector";
            }
            
            var msg;
            
            if(formal){
                msg = this.formalGreeting();
            }
            else{
                msg = this.greeting();
            }
            
            $(selector).html(msg);
            
            return this;
        }
    };

    Greetr.init = function (firstName, lastName, language) {
        var self = this;
        self.firstName = firstName || "";
        self.lastName = lastName || "";
        self.language = language || "en";
    };

    Greetr.init.prototype = Greetr.prototype;

    global.Greetr = global.G$ = Greetr;

}(window, jQuery));