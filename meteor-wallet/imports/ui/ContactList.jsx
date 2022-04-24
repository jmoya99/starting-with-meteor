import React from "react";
import { ContactsColletion } from "../api/ContactsCollection";
import {useTracker} from 'meteor/react-meteor-data';

export const ContactList = () => {
    const contacts = useTracker(() => {
        return ContactsColletion.find({}).fetch();
    });
    return (
        <>
            <h3>Contact List</h3>
            {contacts.map(contact => (
                <li key={contact._id}>{contact.name} - {contact.email}</li>
            ))}
        </>
    )
}