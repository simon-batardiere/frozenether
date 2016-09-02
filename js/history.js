const FROZEN_ETHER_HISTORY_MAX = 8;

frozenether.History = function(max) {
	if (typeof max === 'integer') {
		this.max = max;
	} else {
		this.max = FROZEN_ETHER_HISTORY_MAX;
	}
	this.msgs = [];
}

frozenether.History.prototype.push = function(msg) {
	if (typeof msg === 'undefined') {
		return;
	}
	if (this.msgs.length >= this.max) {
		this.shift();
	}
	this.msgs.push(msg);
}

frozenether.History.prototype.pop = function() {
	var msg = this.msgs.pop();
	if (typeof msg === 'undefined') {
		return undefined;
	}
	this.remove(msg);
	return msg;
}

frozenether.History.prototype.shift = function() {
	var msg = this.msgs.shift();
	if (typeof msg === 'undefined') {
		return undefined;
	}
	this.remove(msg);
	return msg;
}

frozenether.History.prototype.empty = function() {
	while (typeof this.pop() !== 'undefined') {
	}
}

frozenether.History.prototype.add = function(msg) {
	if (typeof msg === 'undefined') {
		return;
	}
}

frozenether.History.prototype.remove = function(msg) {
	if (typeof msg === 'undefined') {
		return;
	}
}

frozenether.History.prototype.selector = function(string) {
	var selector = '#' + this.msg.args.owner;
	selector += '_' + this.msg.args.id.toString();
	selector += '_' + this.msg.event;
	selector += '_' + this.msg.blockNumber;
	if (typeof suffix === 'string') {
		selector += '_' + suffix;
	}
	return selector;
}

frozenether.History.prototype.createHtml = function() {
	var html = '<div id="' + this.selector('event') + '">'
	html += '<p>'
	html += 'Event: ' + this.msg.event + '</br>'
	html += '</p>'
	html += '</div>'
	$('#history').after(html);
}


