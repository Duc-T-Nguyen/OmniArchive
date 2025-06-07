import './NavigationBar.css';
import  Link  from 'next/link';
import Togglebar from '../ToggleBar/ToggleBar';

const NavigationBar = () => {
    return (
        <nav className='header_style'>
            <ul>
                <li>
                    <Link href='/' className='link'>
                        Main
                    </Link>
                </li>
                <li>
                    <Link href='/ContentPage' className='link'>
                        Content Page
                    </Link>
                </li>

                <li>
                    <Link href='/Resource' className='link'>
                        Resource
                    </Link>
                </li>

                <li>
                    <Link href='/About' className='link'>
                        About
                    </Link>
                </li>

            </ul>

            <div className='toggle_box'>
                <Togglebar />
            </div>
        </nav>
    );
}

export default NavigationBar;