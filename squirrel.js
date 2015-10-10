Purchases = new Meteor.Collection( "Purchases" );

if (Meteor.isClient) {

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

}

if (Meteor.isServer) {
  Meteor.methods({
      "getpurchases": function() {
          key = "726a20f1447f51a0446ab6295674c661"
          url = "http://api.reimaginebanking.com"
          customers = HTTP.get(url + "/accounts?type=Checking&key=" + key)
          id = customers.data[2].customer_id
          bills = HTTP.get(url + "/customers/" + id + "/bills?key=" + key)
          for (i in bills.data) {
              bill = bills.data[i]
              Purchases.upsert({_id: bill._id}, {$set: {payee: bill.payee}});
              Purchases.upsert({_id: bill._id}, {$set: {payment_amount: bill.payment_amount}});
              Purchases.upsert({_id: bill._id}, {$set: {payment_date: bill.payment_date}});
          }
      },

  });
}
