"use client";

import { useState, useEffect } from "react";
import './ToggleBar.css';
import dark_mode from '../../assets/night.png';
import light_mode from '../../assets/day.png';

const Togglebar: React.FC = () => {
    const [toggled, set_toggled] = useState<boolean>(false);

    useEffect(()=>{
        const savedState = localStorage.getItem('toggleState');
        if (savedState !== null){
            set_toggled(JSON.parse(savedState));
        }

    }, []);
    
    const toggle_image = (): void => {
        set_toggled(!toggled);
        localStorage.setItem('toggleState', JSON.stringify(!toggled));
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