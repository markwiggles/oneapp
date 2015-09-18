// components/mylink-component.js

import LinkComponent from 'ember-gestures/components/link-component';
import RecognizerMixin from 'ember-gestures/mixins/recognizers';

export default LinkComponent.extend(RecognizerMixin, {
	recognizers: 'swipe',

	didInsertElement() {},

	swipeRight() {
		// do something with pan or panLeft or panRight
		alert('swiped');
	}

})
