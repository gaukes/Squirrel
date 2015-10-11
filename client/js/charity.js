Session.set("charitychoice", "no charity yet")

Template.charity.helpers({
    "charitychoice": function() {
        return Session.get("charitychoice")
    },
});

Template.charity.events({
    'click .charitychoice': function(event) {
        Session.set("charitychoice", event.target.name)
    },
    "click #save": function() {
        Meteor.call("updatecharity", Meteor.user()._id,
            Session.get("charitychoice")
        )
    },
    "click #charityprev": function() {
        Session.set("activeelement", "donations")
    },
    "click #charitynext": function() {
        Session.set("activeelement", "done")
    },

});
