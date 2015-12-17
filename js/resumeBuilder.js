// var role = 'Web Developer'
// var formattedRole = HTMLheaderRole.replace('%data%', role);

// var formattedName = HTMLheaderName.replace('%data%', name);
// $('#header').prepend(formattedName, formattedRole)

var bio = {
	'name' : 'Elizabeth Kipp',
	'role' : 'Wev Developer and Photographer',
	'contacts' : {
		'mobile' : '773-931-4424',
		'email' : 'liz@elizabethkipp.com',
		'github' : 'https://github.com/elizabethsn7',
		'twitter' : 'https://twitter.com/photogirl1977',
		'location' : 'Chicago'
	},
	'pictureURL' : 'images/fry.jpg',
	'welcomeMsg' : 'I was not born with a gift but I learned perserverance',
	'skills' : [
		'Web Developer, Photographer, Momma'
	]
};
$('#main').append(bio.name);




//Work Object
var work = {
   'jobs': [
      {
        'employer': 'Elizabeth Kipp Photography',
        'title': 'Owner',
        'location': 'Chicago, Il',
        'dates': 'February 2011 to present',
        'description': 'Photographer, Editor, Sales'
      }
   ]
}

//Projects Object
var projects = {
   'projects': [
   {
     'title': 'portfolio',
     'dates': 'November 2015',
     'description': 'first large project completed in the Udacity Nanodegree program. Made use of HTML, CSS, Modals and Bootstrap showcasing my photography and web development skills',
     'images': 'http://elizabethsn7.github.io/frameworks/test.html'
   }
     'titel': 'Wedding Quiz',
     'dates': 'August 2015',
     'description': 'Created a quiz app using HTML, CSS, JQuery and JavaScript featuring my wedding photography. I was able to create a landing page as well as a results page.',
     'images': 'http://elizabethsn7.github.io/Wedding-Quiz/'
   ]
}

//Education Object
var education = {
      'schools': [ 
      {
         'school': 'Keller Graduate School of Management',
         'location': 'Tinley Park, Il',
         'degree': 'MBA',
         'major': ['Marketing'],
         'years': 2002
      }, 
      {
         'name': 'Columbia College Chicago',
         'location': 'Chicago, Il',
         'degree': 'BA',
         'major': ['Photography']
      }
   ]
      'Online Courses': [
      {
         'title': 'JavaScript Basics',
         'school': 'Udacity',
         'dates': 2015,
         'url': 'https//www.udacity.com/course/ud804'
      }
   ]
} 


// $('#main').append(work['position']);
// $('#main').append(education.name);



// var formattedContacts = HTMLcontactGeneric.replace('%contact%', bio.contacts);
// var formattedMobile = HTMLmobile.replace('%data%', bio.mobile);
// var formmattedEmail = HTMLemail.replace('%data%', bio.email);
// var formattedGithub = HTMLgithub.replace('%data%', bio.github);
// var formattedLocation = HTMLlocation.replace('%data%', bio.location);
// var formattedTwitter = HTMLtwitter.replace('%data%', bio.twitter);
// var formattedSkills = HTMLskills.replace('%data%', bio.skills);

// $('#header').append(formattedMobile, formattedGithub, formattedLocation, formattedTwitter, formattedSkills);

// $('#header').append(formattedContactGeneric, formattedMobile, formmattedEmail, formattedGithub, formattedLocation, formattedTwitter, formattedSkills);
console.log(bio);


