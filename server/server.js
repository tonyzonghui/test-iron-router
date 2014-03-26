Posts = new Meteor.Collection('posts');

Meteor.startup(function () {
	if ( Posts.find().count() > 0 ) return;

	for (var i = 0; i < 4; i++) {
		Posts.insert({
			'title': "Posts " + i,
			'text': "Hello you there. Haven't seen you for a long time."
		})
	};
});

Meteor.publish('posts', function(){
	return Posts.find();
});