// Dit script maakt gebruik van de voorbeeldcode uit LES 3.

var APP = APP || {};

(function () {
	// Data objecten
	APP.schema = {
		titel:'Schema',
		wedstrijden: [
	    { datum: "Maandag, 9:00am", team1: "Chasing", team1Score: "13", team2: "Amsterdam Money Gang", team2Score: "9"},
	    { datum: "Maandag, 9:00am", team1: "Boomsquad", team1Score: "15", team2: "Beast Amsterdam", team2Score: "11"},
	    { datum: "Maandag, 10:00am", team1: "Beast Amsterdam", team1Score: "14", team2: "Amsterdam Money Gang", team2Score: "12"},
	    { datum: "Maandag, 10:00am", team1: "Chasing", team1Score: "5", team2: "Burning Snow", team2Score: "15"},
	    { datum: "Maandag, 11:00am", team1: "Boomsquad", team1Score: "11", team2: "Amsterdam Money Gang", team2Score: "15"},    
	    { datum: "Maandag, 11:00am", team1: "Burning Snow", team1Score: "15", team2: "Beast Amsterdam", team2Score: "6"},
	    { datum: "Maandag, 12:00pm", team1: "Chasing", team1Score: "8", team2: "Beast Amsterdam", team2Score: "15"},
	    { datum: "Maandag, 12:00pm", team1: "Boomsquad", team1Score: "15", team2: "Burning Snow", team2Score: "8"},
	    { datum: "Maandag, 1:00pm", team1: "Chasing", team1Score: "15", team2: "Boomsquad", team2Score: "14"},
	    { datum: "Maandag, 1:00pm", team1: "Burning Snow", team1Score: "15", team2: "Amsterdam Money Gang", team2Score: "11"}
	    ]
	};

	APP.stand = {
		titel:'Stand',
		ranglijst: [
	    { team: "Chasing", Win: "2", Lost: "2", Sw: "7", Sl: "9", Pw: "35", Pl: "39"},
	    { team: "Boomsquad", Win: "2", Lost: "2", Sw: "9", Sl: "8", Pw: "36", Pl: "34"},
	    { team: "Burning Snow", Win: "3", Lost: "1", Sw: "11", Sl: "4", Pw: "36", Pl: "23"},
	    { team: "Beast Amsterdam", Win: "2", Lost: "2", Sw: "6", Sl: "8", Pw: "30", Pl: "34"},
	    { team: "Amsterdam Money Gang", Win: "1", Lost: "3", Sw: "6", Sl: "10", Pw: "30", Pl: "37"}
	    ]
	};

	APP.spel = {
		titel:'Spel',
		programma: [
    { score: "1", team1: "Boomsquad", team1Score: "1", team2: "Burning Snow", team2Score: "0"},
    { score: "2", team1: "Boomsquad", team1Score: "2", team2: "Burning Snow", team2Score: "0"},
    { score: "3", team1: "Boomsquad", team1Score: "2", team2: "Burning Snow", team2Score: "1"},
    { score: "4", team1: "Boomsquad", team1Score: "2", team2: "Burning Snow", team2Score: "2"},
    { score: "5", team1: "Boomsquad", team1Score: "3", team2: "Burning Snow", team2Score: "2"},
    { score: "6", team1: "Boomsquad", team1Score: "4", team2: "Burning Snow", team2Score: "2"},
    { score: "7", team1: "Boomsquad", team1Score: "5", team2: "Burning Snow", team2Score: "2"},
    { score: "8", team1: "Boomsquad", team1Score: "5", team2: "Burning Snow", team2Score: "3"},
    { score: "9", team1: "Boomsquad", team1Score: "6", team2: "Burning Snow", team2Score: "3"},
    { score: "10", team1: "Boomsquad", team1Score: "7", team2: "Burning Snow", team2Score: "3"},
    { score: "11", team1: "Boomsquad", team1Score: "7", team2: "Burning Snow", team2Score: "4"},
    { score: "12", team1: "Boomsquad", team1Score: "8", team2: "Burning Snow", team2Score: "4"},
    { score: "13", team1: "Boomsquad", team1Score: "8", team2: "Burning Snow", team2Score: "5"},
    { score: "14", team1: "Boomsquad", team1Score: "8", team2: "Burning Snow", team2Score: "6"},
    { score: "15", team1: "Boomsquad", team1Score: "9", team2: "Burning Snow", team2Score: "6"},
    { score: "16", team1: "Boomsquad", team1Score: "9", team2: "Burning Snow", team2Score: "7"},
    { score: "17", team1: "Boomsquad", team1Score: "10", team2: "Burning Snow", team2Score: "7"},
    { score: "18", team1: "Boomsquad", team1Score: "11", team2: "Burning Snow", team2Score: "7"},
    { score: "19", team1: "Boomsquad", team1Score: "12", team2: "Burning Snow", team2Score: "7"},
    { score: "20", team1: "Boomsquad", team1Score: "13", team2: "Burning Snow", team2Score: "7"},
    { score: "21", team1: "Boomsquad", team1Score: "14", team2: "Burning Snow", team2Score: "7"},
    { score: "22", team1: "Boomsquad", team1Score: "14", team2: "Burning Snow", team2Score: "8"},
    { score: "23", team1: "Boomsquad", team1Score: "15", team2: "Burning Snow", team2Score: "8"}
    ]
	};
	
	// Controller Init
	APP.controller = {
		init: function () {
			// Initialize router
			APP.router.init();
		}
	};

	// Router
	APP.router = {
		init: function () {
	  		routie({
			    '/schema': function() {
			    	APP.page.schema();
			    	console.log(1);
				},
			    '/stand': function() {
			    	APP.page.stand();
			    },

			    '/spel': function() {
			    	APP.page.spel();
			    },
			    '*': function() {
			    	APP.page.schema();
			    }
			});
		},

		change: function () {
            var route = window.location.hash.slice(2),
                sections = qwery('section[data-route]'),
                section = qwery('[data-route=' + route + ']')[0];  

            // Show active section, hide all other
            if (section) {
            	for (var i=0; i < sections.length; i++){
            		sections[i].classList.remove('active');
            	}
            	section.classList.add('active');
            }

            // Default route
            if (!route) {
            	sections[0].classList.add('active');
            }

		}
	};

	// Page
	APP.page = {
		schema: function () {
			Transparency.render(qwery('[data-route=schema]')[0], APP.schema);
			APP.router.change();
		},

		stand: function () {
			Transparency.render(qwery('[data-route=stand]')[0], APP.stand);
			APP.router.change();
		},

		spel: function () {
			Transparency.render(qwery('[data-route=spel]')[0], APP.spel);
			APP.router.change();
		}
	}
	// DOM ready
	domready(function () {
		// Kickstart application
		APP.controller.init();
	});
	
})();
