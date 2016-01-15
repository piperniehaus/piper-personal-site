Router.route('/resume');
Router.route('/code-samples');
setSessionTab = function setSessionTab(){
  var tabs = ["resume", "codeSamples"];
  var windowTab = window.location.hash;
  var selectedTab = "";
  if($.inArray(windowTab, tabs)) {
    selectedTab = windowTab;
  } else {
    selectedTab =  "Resume"
  }
  Session.set("sessionTab", selectedTab)
}
getSessionTab = function getSessionTab(){
  return Session.get("sessionTab")
}

if (Meteor.isClient) {
  Template.navBar.events({
    "click .nav-link": function(event){
      setSessionTab;
    }
  });
  Template.currentTab.helpers({
    selectedTab: function(){
      setSessionTab;
      return getSessionTab;
    }
  })
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
