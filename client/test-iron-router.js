// ============================================
// Data handling
// ============================================
Posts = new Meteor.Collection("posts");
Meteor.subscribe('posts');

Template.posts.helpers({
	posts: function() {
		return Posts.find();
	}
});



// ============================================
// Router settings
// ============================================
Router.configure({
	layoutTemplate: 'layout'
});

Router.map(function() { 
	this.route('home', {
		path: '/', 
		template: 'home',
		action: function () {
			activateNavButton('#nav-home');
			this.render();
		},
	});

	this.route('posts', {
		path: '/posts',
		action: function () {
			activateNavButton('#nav-posts');
			this.render();
		},
	});

	this.route('postDetail', {
		path: '/posts/:_id'
	});

	this.route('About Us', {
		path: 'aboutus',
		template: 'aboutus',
		action: function () {
			activateNavButton('#nav-about');
			this.render();
		},
	});
});


// ============================================
// Helper functions
// ============================================

function activateNavButton(buttonID) {
	console.log('activate');
	deactivateAllNavButtons();
	$(buttonID).addClass('active');
}

function deactivateAllNavButtons() {
	console.log('remove');
	$('#navbar-menu-collapse').find("li").each(function(index) {
		$(this).removeClass('active');
	});
}