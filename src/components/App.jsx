import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from './ContactList/ContactList';
import { FilterContact } from './FilterContact/FilterContact';
import { Section } from './Section/Section';

export const App = () => {

     return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        background: 'linear-gradient( 45deg, #8cc8e6, #f1f389)'
      }}
       >
         <Section
         title="Phonebook"
         />
         <ContactForm />
         <Section
         title="Contacts"
         />
         <FilterContact />
         <ContactList />
    </div>
  );

  }

  

  
 
 