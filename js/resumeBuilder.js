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
  'welcomeMessage': 'The best way to predict the future is to create it. Peter Drucker ',
  'skills': [
    'HTML', 'CSS', 'JavaScript', 'JQuery', 'Github', 'Adobe Photoshop and Illustrator'
  ],
  'biopic': 'images/me.png'
}

bio.display = function() {
  var formattedBioPic = HTMLbioPic.replace('%data%', bio.biopic);
  $('#header').prepend(formattedBioPic);

  var formattedRole = HTMLheaderRole.replace('%data%', bio.role);
  var formattedName = HTMLheaderName.replace('%data%', bio.name);
  $('#header').prepend(formattedName, formattedRole);

  var formattedWelcomeMsg = HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage);
  $('#header').append(formattedWelcomeMsg);

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
  $("#footerContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile))
    .append(HTMLemail.replace("%data%", bio.contacts.email))
    .append(HTMLgithub.replace("%data%", bio.contacts.github))
    .append(HTMLtwitter.replace("%data%", bio.contacts.twitter))
    .append(HTMLlocation.replace("%data%", bio.contacts.location));

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
  }
};
bio.display();

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
}

work.display = function () {
  for (var job in work.jobs) {
    if (work.jobs.hasOwnProperty(job)) {
      $('#workExperience').append(HTMLworkStart);

      var formattedEmployer = HTMLworkEmployer.replace('%data%', work.jobs[job].employer);
      var formattedWorkTitle = HTMLworkTitle.replace('%data%', work.jobs[job].title);
      var formattedEmployerTitle = formattedEmployer + formattedWorkTitle;
      $('.work-entry:last').append(formattedEmployerTitle);

      var formattedWorkDates = HTMLworkDates.replace('%data%', work.jobs[job].dates);
      var formattedWorkLocation = HTMLworkLocation.replace('%data%', work.jobs[job].location);
      var formattedWorkDescription = HTMLworkDescription.replace('%data%', work.jobs[job].description);
      $('.work-entry:last').append(formattedWorkDates, formattedWorkLocation, formattedWorkDescription);
    }
  }
};
work.display ();

$(document).click(function(loc) {
  var x = loc.pageX;
  var y = loc.pageY;

  logClicks(x, y);
});

//Projects Object

var projects = {
  'projects': [{
    'title': 'Portfolio',
    'dates': 'November 2015',
    'description': 'This is the first large project I completed in the Udacity Front End Wen Developer Nanodegree program. I made use of HTML, CSS, Modals and Bootstrap showcasing my photography and web development skills.',
    'images': ['images/logo.png', 'images/shoes.png', 'images/lifestyle.png', 'images/product.png']
  }, {
    'title': 'Modern, Timeless, Romantic or Glam Wedding Quiz',
    'dates': 'August 2015',
    'description': 'I created a quiz app using HTML, CSS, JQuery and JavaScript featuring my wedding photography. I was able to create a landing page as well as a results page.',
    'images': ['images/projects-img-1.jpg', 'images/projects-img-2.jpg', 'images/projects-img-3.jpg', 'images/projects-img-4.jpg']
  }]
}

projects.display = function() {
  for (var project in projects.projects) {
    if (projects.projects.hasOwnProperty(project)) {
      $('#projects').append(HTMLprojectStart);

      var formattedTitle = HTMLprojectTitle.replace('%data%', projects.projects[project].title);
      $('.project-entry:last').append(formattedTitle);

      var formattedDates = HTMLprojectDates.replace('%data%', projects.projects[project].dates);
      $('.project-entry:last').append(formattedDates);

      var formattedDescription = HTMLprojectDescription.replace('%data%', projects.projects[project].description);
      $('.project-entry:last').append(formattedDescription);

      for (var image in projects.projects[project].images) {
        if (projects.projects[project].images.length > 0) {
          var formattedImage = HTMLprojectImage.replace('%data%', projects.projects[project].images[image]);
          $('.project-entry:last').append(formattedImage);
        }
      }
    }
  }
};
projects.display();

//Education Object
var education = {
  'schools': [{
    'name': 'Keller Graduate School of Management',
    'location': 'Tinley Park, Il',
    'degree': 'MBA',
    'majors': ['Marketing'],
    'dates': 'June 2010',
    'url': 'https//www.keller.edu'
  }, {
    'name': 'Columbia College Chicago',
    'location': 'Chicago, Il',
    'degree': 'BA',
    'majors': ['Photography'],
    'dates': 'June 2002',
    'url': 'https//www.colum.edu'
  }],
  'onlineCourses': [{
    'title': 'Front End Nanodegree',
    'school': 'Udacity',
    'date': 'Expected completion April 2016',
    'url': 'https//www.udacity.com/course/ud804'
  }]
}
education.display = function() {
  var schoolsLength = education.schools.length;
  for (var i = 0; i < schoolsLength; i++) {
    $('#education').append(HTMLschoolStart);
    var formattedSchoolName = HTMLschoolName.replace('%data%', education.schools[i].name);
    var formattedSchoolLocation = HTMLschoolLocation.replace('%data%', education.schools[i].location);
    var formattedSchoolDegree = HTMLschoolDegree.replace('%data%', education.schools[i].degree);
    var formattedSchoolDates = HTMLschoolDates.replace('%data%', education.schools[i].dates);
    var formattedSchoolMajor = HTMLschoolMajor.replace('%data%', education.schools[i].majors)
    $('.education-entry:last').append(formattedSchoolName, formattedSchoolLocation, formattedSchoolDegree, formattedSchoolDates, formattedSchoolMajor);
  }
  if (education.onlineCourses.length > 0) {
    $('#education').append(HTMLonlineClasses);
    var onlineCourseLength = education.onlineCourses.length;
    for (i = 0; i < onlineCourseLength; i++) {
      $('#education').append(HTMLschoolStart);
      var formattedOnlineTitle = HTMLonlineTitle.replace('%data%', education.onlineCourses[i].title);
      var formattedOnlineSchool = HTMLonlineSchool.replace('%data%', education.onlineCourses[i].school);
      var formattedOnlineDate = HTMLonlineDates.replace('%data%', education.onlineCourses[i].date);
      var formattedOnlineURL = HTMLonlineURL.replace('%data%', 'Visit Website');
      var formattedOnlineLinkedURL = formattedOnlineURL.replace('#', education.onlineCourses[i].url);

      $('.education-entry:last').append(formattedOnlineTitle, formattedOnlineSchool, formattedOnlineDate, formattedOnlineURL);
    }
  }
};

education.display();

$('#mapDiv').append(googleMap);