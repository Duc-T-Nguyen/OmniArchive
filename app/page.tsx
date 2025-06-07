import Cardmodule from '../components/Cardmodule';
import NavigationBar from '../components/NavigationBar/NavigationBar';

interface HomepagecompProps {
  cardsData?: Record<string, string>;
}

function Homepagecomp ({ cardsData = {} }: HomepagecompProps) {
return (
    <div className='card_container'>
        {Object.entries(cardsData).map(([title, description], index) => (
            <Cardmodule 
            key={index} 
            title={title} 
            description={description} 
        />
        ))}
    </div>
);

}


function App() {
    const map = {
    'Title 1': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
    'Title 2': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
    'Title 3': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'

    }
    return (
        <>
            <div className="container">
              <NavigationBar />
              <Homepagecomp cardsData={map} />


            </div>
            
      </>





    );
}
export default App;