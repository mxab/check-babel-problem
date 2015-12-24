Books = new Mongo.Collection('Books');

if (Meteor.isClient) {

    Books.find({}, {limit: 5});
}

