Session.set("charitydonation", 0)
Session.set("bitcoindonation", 0)
Session.set("stocksdonation", 0)

Template.purchases.helpers({
    bills: function() {
        return Template.instance().myAsyncValue.get()
    },
});

Template.purchases.created = function (){
    var self = this;
    self.myAsyncValue = new ReactiveVar([]);
    Meteor.call("userbills", Meteor.user()._id, function (err, asyncValue) {
        if (err)
            console.log(err);
        else
            self.myAsyncValue.set(asyncValue);
    });
}

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
