Session.set("charitydonation", 0)
Session.set("bitcoindonation", 0)
Session.set("stocksdonation", 0)

Template.purchases.helpers({
    bills: function() {
        return Purchases.find({})
    },
});

Template.purchases.events({
    'click button': function () {
        Meteor.call("getpurchases")
    },
});
