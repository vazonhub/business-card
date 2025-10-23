import { Icon } from "./icons"
import { NavMenu } from "./nav"
import './../assets/css/components/header.css';
import { ProjectsSwitch } from "./switches/ProjectsSwitch";
import { useProjectsTabs } from "../utils/useProjectsTabs";

export const Header = () => {
    const { activeTab, setActiveTab, small: hide } = useProjectsTabs();

    return (
        <header className='header'>
            <Icon />
            <ProjectsSwitch small={true} hide={!hide} selected={activeTab} onChange={setActiveTab} />
            <NavMenu />
        </header>
    )
}

