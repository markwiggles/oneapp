/*
Cordova plugin for Push Notifications
https://github.com/phonegap/phonegap-plugin-push
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },

    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {  // Bind Event Listeners
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        var push = PushNotification.init({
            "android": {
                "senderID": "38233646065"
            },
            "ios": {},
            "windows": {}
        });

        push.on('registration', function(data) {
            // document.getElementById("regId").innerHTML = data.registrationId;
            console.log(JSON.stringify(data));
        });

        push.on('notification', function(data) {//when notification is recieved
            console.log('notification: ', JSON.stringify(data));
            $('#modal-title').html(data.title);
            $('#modal-message').html(JSON.stringify(data));
            $('#push-modal').modal('show');
        });

        push.on('error', function(e) {
            console.log("push error");
        });
    }
};
//
app.initialize();
