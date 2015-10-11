Purchases = new Meteor.Collection( "Purchases" );
if (Meteor.isClient) {
    Meteor.subscribe("userData");
    Meteor.subscribe("Purchases")

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

if (Meteor.isServer) {
    Meteor.publish("userData", function() {
        if (this.userId) {
            return Meteor.users.find(
                {_id: this.userId}
            );
        }
    });

    Meteor.publish("Purchases", function () {
        return Purchases.find();
    });

}
