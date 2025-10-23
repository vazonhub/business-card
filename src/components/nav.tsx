import { useCallback, useMemo, useState } from 'react';
import langIcon from './../assets/icons/lang.svg';
import helpIcon from './../assets/icons/help.svg';
import usIcon from './../assets/icons/us.svg';
import { LANGUAGE } from '../utils/useLanguage';

export const NavMenu = () => {
    const [language, setLanguage] = useState(LANGUAGE.RU)

    const toggleLanguage = useCallback(() => {
        setLanguage(prev => prev === LANGUAGE.EN ? LANGUAGE.RU : LANGUAGE.EN);
    }, []);

    let ITEMS = useMemo(() => [
        {
            href: '#about',
            icon: usIcon,
            label: 'О нас'
        },
        {
            href: '#support',
            icon: helpIcon,
            label: 'Поддержка'
        },
        {
            icon: langIcon,
            label: language,
            styles: { width: '17px' },
            onClick: toggleLanguage
        }
    ], [language]);
    return (
        <nav className='navigation'>
            <ul>
                {ITEMS.map((item) => 
                    <li>
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