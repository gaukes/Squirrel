Template.donations.helpers({
    charitydonation: function() {
        return Session.get("charitydonation")
    },
    bitcoindonation: function() {
        return Session.get("bitcoindonation")
    },
    stocksdonation: function() {
        return Session.get("stocksdonation")
    },
});

Template.donations.events({
    'input input[name=charitydonationslider]': function(event) {
        Session.set("charitydonation", event.currentTarget.value)
    },
    'input input[name=bitcoindonationslider]': function(event) {
        Session.set("bitcoindonation", event.currentTarget.value)
    },
    'input input[name=stocksdonationslider]': function(event) {
        Session.set("stocksdonation", event.currentTarget.value)
    },
    "click #donationsprev": function() {
        Session.set("activeelement", "purchases")
    },
    "click #donationsnext": function() {
        Session.set("activeelement", "charity")
    },
});
