const subscribers = {};

export function subscribe(event, callback) {
	if (!subscribers[event]) {
		subscribers[event] = [];
	}

	subscribers[event].push(callback);
}

export function publish(event, data) {
	const eventSubscribers = subscribers[event];
	if (eventSubscribers) {
		eventSubscribers.forEach((callback) => {
			callback(data);
		});
	}
}
