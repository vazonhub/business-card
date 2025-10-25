import { Dispatch, SetStateAction } from "react";
import { ABOUT } from "../about";
import { useLanguage } from "../../utils/useLanguage";
import './../../assets/css/components/about-switch.css';

interface AboutSwitchProps {
    selected: ABOUT;
    setSelected: Dispatch<SetStateAction<ABOUT>>;
}

export const AboutSwitch = ({
    selected,
    setSelected
}: AboutSwitchProps) => {
    const { t } = useLanguage();

    return (
        <section className="about-switch">
            <button className={`about-switch-button
                ${selected === ABOUT.WHAT 
                    ? 'about-switch-button_active'
                    : 'about-switch-button_disable'}
                `}
                onClick={() => setSelected(ABOUT.WHAT)}
            >
                {t('about.what.button')}
            </button>
            <button className={`about-switch-button
                ${selected === ABOUT.HOW 
                    ? 'about-switch-button_active'
                    : 'about-switch-button_disable'}
                `}
                onClick={() => setSelected(ABOUT.HOW)}
            >
                {t('about.how.button')}
            </button>
        </section>
    )
}