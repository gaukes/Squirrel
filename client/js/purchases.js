Session.set("charitydonation", 0)
Session.set("bitcoindonation", 0)
Session.set("stocksdonation", 0)

Template.purchases.helpers({
    bills: function() {
        customerID = Meteor.users.findOne(Meteor.user()._id).customerID
        return Purchases.find({customerID: customerID}).fetch()
    },
});

Template.purchases.events({
    'click button': function () {
        Meteor.call("getpurchases", Meteor.user()._id)
    },
    "click #purchasesprev": function() {
        Session.set("activeelement", "configure")
    },
    "click #purchasesnext": function() {
        Session.set("activeelement", "donations")
    },
});
