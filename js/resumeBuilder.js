var name = 'Elizabeth Kipp';
var formattedName = HTMLheaderName.replace('%data%', name);


var role = 'Web Developer';
var formattedRole = HTMLheaderRole.replace('%data%', role);

$('#header').prepend(formattedRole);
$('#header').prepend(formattedName);

var bio = {
	'name' : 'Elizabeth Kipp',
	'role' : 'Wev Developer and Photographer',
	'contacts' : {
		'mobile' : '773-931-4424',
		'email' : 'liz@elizabethkipp.com',
		'github' : 'https://github.com/elizabethsn7',
		'location' : 'Chicago'
	},
	'photo' : 'images/fry.jpg',
	'message' : 'I was not born with a gift but I learned perserverance',
};

$('#header').prepend(bio);
console.log(bio);