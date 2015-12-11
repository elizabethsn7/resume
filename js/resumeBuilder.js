
var formattedName = HTMLheaderName.replace('%data%', name);
$('#header').prepend(formattedName)
var role = 'Web Developer'
var formattedRole = HTMLheaderRole.replace('%data%', role);

$('#header').prepend(formattedRole);

var bio = {
	'name' : 'Elizabeth Kipp',
	'role' : 'Wev Developer and Photographer',
	'contacts' : {
		'mobile' : '773-931-4424',
		'email' : 'liz@elizabethkipp.com',
		'github' : 'https://github.com/elizabethsn7',
		'location' : 'Chicago'
	},
	'bioPic' : 'images/fry.jpg',
	'welcomeMsg' : 'I was not born with a gift but I learned perserverance',
};

var formattedMobile = HTMLmobile.replace('%data%', bio.mobile);
var formmattedEmail = HTMLemail.replace('%data%', bio.email);
var formattedContactGeneric = HTMLcontactGeneric.replace('$data', bio.contact);
var formattedGithub = HTMLgithub.replace('%data%', bio.github);
var formattedLocation = HTMLlocation.replace('%data%', bio.location);

$('#main').append(bio.bioPic, bio.welcomeMsg, formattedMobile, formmattedEmail, formattedGithub, formattedLocation);
console.log(bio);


