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
    'change input[name=charitydonationslider]': function(event) {
        Session.set("charitydonation", event.currentTarget.value)
    },
    'change input[name=bitcoindonationslider]': function(event) {
        Session.set("bitcoindonation", event.currentTarget.value)
    },
    'change input[name=stocksdonationslider]': function(event) {
        Session.set("stocksdonation", event.currentTarget.value)
    },
});
