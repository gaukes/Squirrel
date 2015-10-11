Purchases = new Meteor.Collection( "Purchases" );
if (Meteor.isClient) {
    Session.set("activeelement", "purchases")

    Template.body.helpers({
        "active": function(element) {
            console.log(element)
            if (Session.get("activeelement") == element) {
                return true
            }
            return false
        },
    });
}
