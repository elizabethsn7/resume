//Bio Object
var bio = {
  'name': 'Elizabeth Kipp',
  'role': 'Web Developer and Photographer',
  'contacts': {
    'mobile': '773-931-4424',
    'email': 'liz@elizabethkipp.com',
    'github': 'https://github.com/elizabethsn7',
    'twitter': 'https://twitter.com/photogirl1977',
    'location': 'Chicago'
  },
  'welcomeMessage': 'I was not born gifted but I learned perserverance.',
  'skills': [
    'HTML', 'CSS', 'JavaScript', 'JQuery', 'Github', 'Adobe Photoshop and Illustrator'
  ],
    'bioPic': 'images/me.png'
};

var formattedRole = HTMLheaderRole.replace('%data%', bio.role);
var formattedName = HTMLheaderName.replace('%data%', bio.name);

var formattedBioPic = HTMLbioPic.replace('%data%', bio.bioPic);
var formattedWelcomeMsg = HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage);

$('#header').prepend(formattedName, formattedRole);
$('#header').append(formattedWelcomeMsg);
$('#header').append(formattedBioPic);

function displayBio() {
  var formattedMobile = HTMLmobile.replace('%data%', bio.contacts.mobile);
  $('#topContacts').append(formattedMobile);

  var formattedEmail = HTMLemail.replace('%data%', bio.contacts.email);
  $('#topContacts').append(formattedEmail);

  var formattedGithub = HTMLgithub.replace('%data%', bio.contacts.github);
  $('#topContacts').append(formattedGithub);

  var formattedTwitter = HTMLtwitter.replace('%data%', bio.contacts.twitter);
  $('#topContacts').append(formattedTwitter);

  var formattedLocation = HTMLlocation.replace('%data%', bio.contacts.location);  
  $('#topContacts').append(formattedLocation);
 
};

if (bio.skills.length > 0) {
  $('#header').append(HTMLskillsStart);

  var formattedSkill = HTMLskills.replace('%data%', bio.skills[0]);
  $('#skills').append(formattedSkill);

  var formattedSkill = HTMLskills.replace('%data%', bio.skills[1]);
  $('#skills').append(formattedSkill);

  var formattedSkill = HTMLskills.replace('%data%', bio.skills[2]);
  $('#skills').append(formattedSkill);

  var formattedSkill = HTMLskills.replace('%data%', bio.skills[3]);
  $('#skills').append(formattedSkill);

  var formattedSkill = HTMLskills.replace('%data%', bio.skills[4]);
  $('#skills').append(formattedSkill);

  var formattedSkill = HTMLskills.replace('%data%', bio.skills[5]);
  $('#skills').append(formattedSkill);
};

displayBio();


//Work Object
var work = {
  'jobs': [{
    'employer': 'Elizabeth Kipp Photography',
    'title': 'Owner',
    'location': 'Chicago, Il',
    'dates': 'February 2011 to present',
    'description': 'Photograph weddings, events as well as product. Full knowledge of Adobe Photoshop, Lightroom and Bridge'
  }, {
    'employer': 'George Street Photo and Video',
    'title': 'Lead Photographer',
    'location': 'Chicago, Il',
    'dates': 'April 2012 to present',
    'description': 'Lead wedding photographer'
  }, {
    'employer': 'Parker and Evan Kipp',
    'title': 'Mommala',
    'location': 'Chicago, IL',
    'dates': 'March 2006 to Present',
    'description': 'Play with, teach, console and encourage! Cook and clean and take to places.'
  }],
};

function displayWork() {
  for (job in work.jobs) {
    $('#workExperience').append(HTMLworkStart);

    var formattedEmployer = HTMLworkEmployer.replace('%data%', work.jobs[job].employer);
    var formattedWorkTitle = HTMLworkTitle.replace('%data%', work.jobs[job].title);
    var formattedEmployerTitle = formattedEmployer + formattedWorkTitle;
    var formattedWorkDates = HTMLworkDates.replace('%data%', work.jobs[job].dates);
    var formattedWorkLocation = HTMLworkLocation.replace('%data%', work.jobs[job].location);
    var formattedWorkDescription = HTMLworkDescription.replace('%data%', work.jobs[job].description);
    $('.work-entry:last').append(formattedEmployerTitle, formattedWorkDates, formattedWorkLocation, formattedWorkDescription);
  }
};
displayWork();
$(document).click(function(loc) {
  var x = loc.pageX;
  var y = loc.pageY;

  logClicks(x, y);
});

//Projects Object

var projects = {
  'projects': [
    {
      'title': 'Portfolio',
      'dates': 'November 2015',
      'description': 'This is the first large project I completed in the Udacity Front End Wen Developer Nanodegree program. I made use of HTML, CSS, Modals and Bootstrap showcasing my photography and web development skills',
      'images': 'http://elizabethsn7.github.io/frameworks/test.html'
  }, {
      'title': 'Wedding Quiz',
      'dates': 'August 2015',
      'description': 'I created a quiz app using HTML, CSS, JQuery and JavaScript featuring my wedding photography. I was able to create a landing page as well as a results page.',
      'images': 'http://elizabethsn7.github.io/Wedding-Quiz/'
    }
  ]
}; 

  // ** Projects Display **
  projects.display = function() {
    for(project in projects.projects) {
    $('#projects').append(HTMLprojectStart);
  
    var formattedTitle = HTMLprojectTitle.replace('%data%', projects.projects[project].title);
    $('.project-entry:last').append(formattedTitle);

    var formattedDates = HTMLprojectDates.replace('%data%', projects.projects[project].dates);
    $('.project-entry:last').append(formattedDates);

    var formattedDescription = HTMLprojectDescription.replace('%data%', projects.projects[project].description);
    $('.project-entry:last').append(formattedDescription);

    if (projects.projects[project].images.length > 0) {
      for (image in projects.projects[project].images) { 
        var formattedImage = HTMLprojectImage.replace('%data%', projects.projects[project].images[image]);
        $('.project-entry:last').append(formattedImage);
      };
    }
  }
};

projects.display();

//Education Object
var education = {
  'schools': [{
    'school': 'Keller Graduate School of Management',
    'location': 'Tinley Park, Il',
    'degree': 'MBA',
    'major': ['Marketing'],
    'years': 2002
  }, {
    'name': 'Columbia College Chicago',
    'location': 'Chicago, Il',
    'degree': 'BA',
    'major': ['Photography']
  }],

  'Online Courses': [{
    'title': 'Front End Nanodegree',
    'school': 'Udacity',
    'dates': 2015,
    'url': 'https//www.udacity.com/course/ud804'
  }],
}

function inName(name) {
  name = bio.name.trim().split(' ');
  console.log(name);
  name[1] = name[1].toUpperCase();
  name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
  return name[0] + ' ' + name[1];
}
$('#main').append(internationalizeButton);

