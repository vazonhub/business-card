import vazon from './../../assets/icons/V.svg';
import { RhizomeIcon } from './../icons/Rhizome';
import { NewsIcon } from './../icons/News';
import { TABS } from '../../utils/useProjectsTabs';
import { forwardRef } from "react";
import './../../assets/css/components/project-switch.css';

interface ProjectsSwitchProps {
    selected: TABS;
    small?: boolean;
    hide?: boolean;
    onChange: (newSelect: TABS) => void;
}
export const ProjectsSwitch = forwardRef<HTMLDivElement, ProjectsSwitchProps>(({
    selected,
    small = false,
    hide = false,
    onChange
}: ProjectsSwitchProps, ref) => {
    return (
        <>
            {!hide && 
                <section ref={ref} className={`projects-switch`}>
                {!small && <img src={vazon} alt="Vazon image" />}
                <section className='projects-switch-container'>
                    <button className={`projects-switch-button ${small ? 'projects-switch-button--small' : ''}
                        projects-switch-button__${selected === TABS.RHIZOME ? 'active' : 'not-active'}`} 
                        onClick={() => onChange(TABS.RHIZOME)}
                    >
                        <RhizomeIcon color={selected === TABS.RHIZOME ? '#0D131D' : '#C0D6F9'} />
                        Rhizome
                    </button>
                    <button className={`projects-switch-button ${small ? 'projects-switch-button--small' : ''}
                        projects-switch-button__${selected === TABS.NEWS ? 'active' : 'not-active'}`}
                        onClick={() => onChange(TABS.NEWS)}
                    >
                        <NewsIcon color={selected === TABS.NEWS ? '#0D131D' : '#C0D6F9'} />
                        News
                    </button>
                </section>
            </section>
            }
        </>
    )
});