import { useMemo, useState } from 'react';
import { useLanguage } from '../utils/useLanguage';
import './../assets/css/components/about.css';
import { AboutSwitch } from './switches/AboutSwitch';
import { AboutBlock } from './about-block';

export enum ABOUT {
    WHAT = 'what',
    HOW = 'how'
}

export const About = () => {
    const { t } = useLanguage();
    const [selected, setSelected] = useState(ABOUT.WHAT);

    const ABOUT_WHAT = useMemo(() => [
        {
            title: t('about.what.independence.title'),
            content: t('about.what.independence.content')
        },
        {
            title: t('about.what.freedom.title'),
            content: t('about.what.freedom.content')
        },
        {
            title: t('about.what.safety.title'),
            content: t('about.what.safety.content')
        },
        {
            title: t('about.what.trust.title'),
            content: t('about.what.trust.content')
        },
        {
            title: t('about.what.comfort.title'),
            content: t('about.what.comfort.content')
        },
    ], [t]);

    const ABOUT_HOW = useMemo(() => [
        {
            title: t('about.what.independence.title'),
            content: t('about.what.independence.content')
        },
        {
            title: t('about.what.freedom.title'),
            content: t('about.what.freedom.content')
        },
        {
            title: t('about.what.safety.title'),
            content: t('about.what.safety.content')
        },
        {
            title: t('about.what.trust.title'),
            content: t('about.what.trust.content')
        },
        {
            title: t('about.what.comfort.title'),
            content: t('about.what.comfort.content')
        },
    ], [t]);

    return (
        <section id='about'>
            <section className='about'>
                <section className='about-header'>
                    <h1 className='about-headline'>{t('about.headline')}</h1>
                    <AboutSwitch selected={selected} setSelected={setSelected}/>
                </section>
                {selected === ABOUT.WHAT &&
                    <>
                        {ABOUT_WHAT.map((about, index) => <AboutBlock
                            key={index}
                            index={index}
                            title={about.title}
                            content={about.content}
                        />)}
                    </>
                }
                {selected === ABOUT.HOW &&
                    <>
                        {ABOUT_HOW.map((about, index) => <AboutBlock
                            key={index}
                            index={index}
                            title={about.title}
                            content={about.content}
                        />)}
                    </>
                }
            </section>
        </section>
    )
}