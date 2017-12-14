import * as API from './index';

API.timeline.get().then(data => {
	// data is 10 latest activities
});

API.project(0).get(new Date()).then(data => {
	// data is 10 activities before now for project 0
});

const subscription = API.user(3).subscribe((value) => {
	// value is new activity in user 3
});

subscription.unsubscribe(); // do not forget to unsubscribe