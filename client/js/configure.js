Template.configure.events({
    "submit form": function (event) {
        Meteor.call("addID", Meteor.user()._id, event.target.customerid.value)
        event.target.customerid.value = ""
        return false;
    }
});

Template.configure.events({
    "click #configureprev": function() {
        Session.set("activeelement", "splash")
    },
    "click #configurenext": function() {
        Session.set("activeelement", "purchases")
    },
});
