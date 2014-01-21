var sortObject = function(o) {
	
	var sorted = {},
		key, 
		a = [];

	for (key in o) {
		if (o.hasOwnProperty(key)) {
			a.push(key);
		}
	}

	a.sort();

	for (key = 0, len = a.lenght; key < len; key ++) {
		sorted[a[key]] = o[a[key]];
	}

	return sorted;

};