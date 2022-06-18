import {Header} from "../ContactsModule"
import {ContactsBook } from './ContactsBook';

import './ContactsBookApp.css';

export function ContactsBookApp (){
    return(
        <div className="ContactsBookApp">
            <Header />
            <ContactsBook />
        </div>
    )
}