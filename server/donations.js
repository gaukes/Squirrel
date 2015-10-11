Meteor.methods({
    "updatedonations": function(userID, charity, bitcoin, stock) {
        Meteor.users.upsert(userID, {$set: {charityamount: charity}})
        Meteor.users.upsert(userID, {$set: {bitcoinamount: bitcoin}})
        Meteor.users.upsert(userID, {$set: {stockamount: stock}})
    },
});
