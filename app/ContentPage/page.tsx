import './ContentPage.css'
import {SearchBar} from '../../components/Search/SearchBar';

function ContentPage() {

  return (

      <>
        <div className="container">

          <h1 className="content_header">Content Page</h1>

          <SearchBar />

        </div>

        <div>
          <table className='w-full border-collapse text-sm text-gray-800 bg-gray-50'>
            <thead>
              <tr>
               header
              </tr>
            </thead>

          </table>
        </div>
      </>

  );
};

export default ContentPage;