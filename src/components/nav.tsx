import { useState } from 'react';

export enum LANGUAGE {
    RU = 'RU',
    EN = 'EN'
}

export const NavMenu = () => {
    const [language, setLanguage] = useState(LANGUAGE.RU)

    let ITEMS = [
        { label: 'О нас' },
        { label: 'Помощь' },
        {
            label: language,
            onClick: () => setLanguage(
                prev => prev === LANGUAGE.EN ? LANGUAGE.RU : LANGUAGE.EN
            ),
        }
    ]
    return (
        <nav className='navigation'>
            <ul>
                {ITEMS.map((item) => 
                    <li><a>
                        {item.label}
                    </a></li>
                )}
            </ul>
        </nav>
    )
}