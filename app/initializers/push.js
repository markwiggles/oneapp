
export default {
	name: 'push',
	initialize: function(container, app) {

		this.bindEvents();
	}, //end initialize

	// Bind any events that are required on startup. Common events are:
	// 'load', 'deviceready', 'offline', and 'online'.
	bindEvents: function() { // Bind Event Listeners
    document.addEventListener('deviceready', this.onDeviceReady, false);
	},

	onDeviceReady: function(data) {
		console.log('device ready: ', JSON.stringify(data));

    var push = PushNotification.init({
        "android": {
            "senderID": "38233646065" // the Google GCM
        },
        "ios": {},
        "windows": {}
    });

    push.on('registration', function(data) {
        // document.getElementById("regId").innerHTML = data.registrationId;
        console.log(JSON.stringify(data));

        //register the device
        var newUser = {
    			name: 'new guy',
    			email: 'newguy@here.com',
    			devices_attributes: [{
    				token: data.registrationId // the device registration id
    			}]
    		};

    		$.ajax({
    			type: 'POST',
    			url: 'http://jolart.com/v1/users',
    			data: {
    				user: newUser
    			},
    			success: function(data) {
    				console.log('DATA: ', data);
    			}
    		});
    });

    push.on('notification', function(data) {//when notification is recieved
        console.log('notification: ', JSON.stringify(data));
        //write in the modal dialog
        $('#modal-title').html(data.title);
        $('#modal-message').html(JSON.stringify(data));
        $('#push-modal').modal('show');
    });

    push.on('error', function(e) {
        console.log("push error");
    });
	}

}; //end export
