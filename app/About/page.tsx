import Cardmodule from "../../components/Cardmodule";


import './About.css';

export default function About() {
    const AboutCards = {

        'What is this Project About?':  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
        'About Me': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
        'Resources Offered': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
        'Sources': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',

    }
    const ContactCards = {

        'Email': 'ductrungnguyen20034@gmail.com',
    }
    return ( 
        <div className='container'>
            <div>
                <h1  className='about_header'>About Us</h1>
            </div>

            <div className='card_container'>
                {Object.entries(AboutCards).map(([title, description], index) => (
                        <Cardmodule 
                        key={index} 
                        title={title} 
                        description={description} 
                    />
                ))}
            </div>

            <div>
                <h1 className='about_header'>Contact </h1>
            </div>

            <div className='card_container'>
                {Object.entries(ContactCards).map(([title, description], index) => (
                        <Cardmodule 
                        key={index} 
                        title={title} 
                        description={description} 
                    />
                ))}
            </div>
        
        </div>  
    );
}