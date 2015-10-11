Meteor.methods({
    "addID": function(userID, id) {
        Meteor.users.upsert(userID, {$set: {customerID: id}})
    },
});
