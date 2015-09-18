/* jshint node: true */

var os = require('os');
var ifaces = os.networkInterfaces();

var addresses = [];
for (var dev in ifaces) {
	ifaces[dev].forEach(function(details) {
		if (details.family === 'IPv4' && details.address !== '127.0.0.1') {
			addresses.push(details.address);
		}
	});
}

module.exports = function(environment) {
	var ENV = {
		modulePrefix: 'oneapp',
		environment: environment,
		baseURL: '/',
		defaultLocationType: 'auto',
		EmberENV: {
			FEATURES: {
				// Here you can enable experimental features on an ember canary build
				// e.g. 'with-controller': true
			}
		},

		contentSecurityPolicy: {
			'default-src': "'none'",
			'script-src': "'self' 'unsafe-inline' 'unsafe-eval' use.typekit.net connect.facebook.net maps.googleapis.com maps.gstatic.com  https://api.flickr.com/services/rest",
			'font-src': "'self' data: use.typekit.net https://fonts.gstatic.com https://fonts.googleapis.com",
			'connect-src': "'self' ws://localhost:35729/livereload https://api.flickr.com/services/rest",
			'img-src': "'self' data: https://api.flickr.com/services/rest *.flickr.com",
			'style-src': "'self' 'unsafe-inline' use.typekit.net  https://fonts.googleapis.com",
			'frame-src': "s-static.ak.facebook.com static.ak.facebook.com www.facebook.com"
		},

		APP: {
			// Here you can pass flags/options to your application instance
			// when it is created
		},
		//CORDOVA
		cordova: {
			rebuildOnChange: false,
			emulate: false,
			emberUrl: 'http://' + addresses[0] + ':4200',
			liveReload: {
				enabled: false,
				platform: 'ios'
			}
		}
	};

	if (environment === 'development') {
		// ENV.APP.LOG_RESOLVER = true;
		// ENV.APP.LOG_ACTIVE_GENERATION = true;
		// ENV.APP.LOG_TRANSITIONS = true;
		// ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
		// ENV.APP.LOG_VIEW_LOOKUPS = true;
	}

	if (environment === 'test') {
		// Testem prefers this...
		ENV.baseURL = '/';
		ENV.locationType = 'none';

		// keep test console output quieter
		ENV.APP.LOG_ACTIVE_GENERATION = false;
		ENV.APP.LOG_VIEW_LOOKUPS = false;

		ENV.APP.rootElement = '#ember-testing';
	}

	if (environment === 'production') {

	}

	ENV.mobileTouch = {

		//which gesture families to allow, will create a recognizer for each
		//a minimum of tap must be present, turning off unused gestures can help performance
		use: ['tap', 'press', 'swipe', 'pan'],

		//whether to alias "press" to tap within Ember's eventing
		// very useful if you don't need to distinguish and don't want to lose
		// taps from people who tap longer
		alwaysTapOnPress: false,

		//whether links and actions should trigger tap behavior on press as well
		// if eventName or "on" has not been explicitly defined
		// currently does not work with actions
		defaultTapOnPress: true,

		//passed to new Hammer.Manager(element, options)
		options: {
			domEvents: true
		},

		//passed to the respective recognizer
		tune: {
			tap: {
				time: 250,
				threshold: 9
			}, //Hammer default is 250 / 2
			press: {
				time: 251,
				threshold: 9
			}, //Hammer default is 500 / 5
			swipe: {
				direction: 6,
				velocity: 0.1,
				threshold: 10
			},
			pan: {
				direction: 6
			},
			pinch: {},
			rotate: {}
		},

		//what default Ember events should be disabled
		events: [
			'touchstart',
			'touchmove',
			'touchend',
			'touchcancel',
			'mousedown',
			'mouseup',
			'click', //not removed, re-aliased to internalClick.  Use cautiously.
			'dblclick',
			'mousemove',
			'mouseenter',
			'mouseleave'
		]

	};


	return ENV;
};
