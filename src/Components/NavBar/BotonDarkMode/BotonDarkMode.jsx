import './BotonDarkMode.css';
import { useDarkModeContext } from '../../../Context/DarkModeContext';

const BotonDarkMode = () => {
    
    const {toggleDarMode} = useDarkModeContext()
    
    return (
        <div className='theme-switch-wrapper'>
            <label className='theme-switch' htmlFor="checkbox">
                <input type="checkbox" onInput={() => toggleDarkMode()} id="ckeckbox" />
                <div className='slider round' />
            </label>
        </div>
    );
}

export default BotonDarkMode;
