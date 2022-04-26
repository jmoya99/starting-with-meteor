import { ContactsCollection } from "./ContactsCollection";
import { Meteor } from 'meteor/meteor';

Meteor.publish('allContacts', function publishAllContacts(argument) {
    return ContactsCollection.find();
});

Meteor.publish('contacts', function publishAllContacts(argument) {
    return ContactsCollection.find({archived:{$ne:true}});
});