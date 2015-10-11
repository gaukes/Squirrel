Meteor.methods({
    "updatecharity": function(userID, charity) {
        Meteor.users.upsert(userID, {$set: {charity: charity}})
    },
});
