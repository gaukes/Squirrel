Purchases = new Meteor.Collection( "Purchases" );
if (Meteor.isClient) {
    Session.set("activeelement", "splash")

    Template.body.helpers({
        "active": function(element) {
            if (Session.get("activeelement") == element) {
                return true
            }
            return false
        },
    });
}
