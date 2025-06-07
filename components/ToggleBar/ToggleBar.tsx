"use client";

import { useState } from "react";
import './ToggleBar.css';
import dark_mode from '../../assests/night.png';
import light_mode from '../../assests/day.png';

const Togglebar: React.FC = () => {
    const [toggled, set_toggled] = useState<boolean>(false);
    
    const toggle_image = (): void => {
        set_toggled(!toggled);
    }
    
    return (
        <div>
            <button 
                className={`toggle-btn ${toggled ? 'toggled' : ''}`} 
                onClick={toggle_image}
            >
                <div className="thumb">
                    <img 
                        src={toggled ? dark_mode.src : light_mode.src} 
                        alt={toggled ? 'dark_mode' : 'light_mode'}
                        style={{ width: '100%', height: '100%' }}
                    />
                </div>
            </button>
        </div>
    );
}

export default Togglebar;