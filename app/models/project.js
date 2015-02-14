import DS from 'ember-data';


var Project = DS.Model.extend({
	title: DS.attr('string'),
	description: DS.attr('string'),
	tagline: DS.attr('string'),
	url: DS.attr('string'),
	img: DS.attr('string')
});

Project.reopenClass({
	FIXTURES: [
		{
			"id": 1,
			"title": "Dragon Oath V: Pu Liu",
			"tagline": "The final game in the Dragon Oath™ series.",
			"description": "Terrible Java game I made in high school using Swing and AWT. I like to keep it around to remind myself what not to do. At least the level saving works.",
			"url": "https://github.com/kevinjstewart/PuLiu",
			"img": "https://raw.githubusercontent.com/kevinjstewart/PuLiu/master/dragon%20oath%20v.png"
		},
		{
			"id": 2,
			"title": "Game Library",
			"tagline": "Game database without a database.",
			"description": "RandomAccessFile based game database/library without a database written in Java. It's more of a proof of concept thing, definitely would have been a lot faster to make and more useful if I had used a DBMS, but I had to use writing to flat files in some way for that project.",
			"url": "https://github.com/kevinjstewart/GameLibrary",
			"img": "http://www.bestmastersprograms.org/wp-content/uploads/2012/10/long-room-trinity-college.jpg"
		},
		{
			"id": 3,
			"title": "kevinstewart.me",
			"tagline": "The site you're on right now. Built with Ember js.",
			"description": "First ember app I've ever made. Uses ember-cli structure and ember design patterns. It's also responsive, resize the window! The part that really takes advantage of the Ember framework is actually this page. I can very easily just add another record to this fixture I used here and this entire page would update with the data. Truly sane web development.",
			"url": "https://github.com/kevinjstewart/kevinjs",
			"img": "http://media.mediatemple.netdna-cdn.com/wp-content/uploads/2013/11/emberjs-logo.png"
		}

	]
});
// export default DS.Model.extend({


	
// 	title: DS.attr('string'),
// 	description: DS.attr('string'),
// 	url: DS.attr('string'),
// 	img: DS.attr('string')
// });


export default Project;