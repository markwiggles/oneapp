import Ember from 'ember';

export default Ember.Controller.extend({

	beforeModel: function() {


		var newUser = {
			name: 'rennie',
			email: 'jj@here.com',
			devices_attributes: [{
				token: 'qersadfdsdsdaesdqwerqwe'
			}]
		};

		$.ajax({
			type: 'POST',
			url: 'http://localhost:3000/v1/users',
			data: {
				user: newUser
			},
			success: function(data) {
				console.log('DATA: ', data);
			}
		})

	}.observes('model')


});
