Meteor.methods({
    "getpurchases": function(userid) {
        key = "726a20f1447f51a0446ab6295674c661"
        url = "http://api.reimaginebanking.com"
        id = Meteor.users.findOne(userid).customerID
        bills = HTTP.get(url + "/customers/" + id + "/bills?key=" + key)
        for (i in bills.data) {
            bill = bills.data[i]
            Purchases.upsert({_id: bill._id}, {$set: {customerID: id}});
            Purchases.upsert({_id: bill._id}, {$set: {payee: bill.payee}});
            Purchases.upsert({_id: bill._id}, {$set: {payment_amount: bill.payment_amount}});
            Purchases.upsert({_id: bill._id}, {$set: {payment_date: bill.payment_date}});
        }
    },
});
