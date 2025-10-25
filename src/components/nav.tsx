import { useCallback, useMemo, useState } from 'react';
import langIcon from './../assets/icons/lang.svg';
import helpIcon from './../assets/icons/help.svg';
import usIcon from './../assets/icons/us.svg';
import { LANGUAGE, useLanguage } from '../utils/useLanguage';
import burgerIcon from './../assets/icons/burger.svg';

export const NavMenu = () => {
    const { t, language, setLanguage } = useLanguage();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleLanguage = useCallback(() => {
        setLanguage(prev => prev === LANGUAGE.EN ? LANGUAGE.RU : LANGUAGE.EN);
    }, []);

    const handleMouseEnter = () => {
        setIsMenuOpen(true);
    };

    const handleMouseLeave = () => {
        setIsMenuOpen(false);
    };

    let ITEMS = useMemo(() => [
        {
            href: '#about',
            icon: usIcon,
            label: t('about.navTitle')
        },
        {
            href: '#support',
            icon: helpIcon,
            label: t('support.navTitle')
        },
        {
            icon: langIcon,
            label: language,
            styles: { width: '17px' },
            onClick: toggleLanguage
        }
    ], [t, language, toggleLanguage]);
    
    return (
        <nav className='navigation' onMouseLeave={handleMouseLeave}>
            <button className='burger-icon' onMouseEnter={handleMouseEnter}>
                <img src={burgerIcon} alt="burger icon" />
            </button>
            <ul className={`${isMenuOpen ? 'open-nav' : 'disable-nav'}`}>
                {ITEMS.map((item, index) => 
                    <li key={index}>
                        <a
                            href={item.href}
                            onClick={() => 
                                item.onClick && item.onClick()
                            }
                        >
                        <img src={item.icon} alt={`${item.label} icon`} />
                        <span style={item.styles}>{item.label}</span>
                    </a></li>
                )}
            </ul>
        </nav>
    )
}