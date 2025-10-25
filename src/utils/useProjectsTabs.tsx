import React, { createContext, useContext, useState } from "react";

export enum TABS {
  RHIZOME = 0,
  NEWS = 1,
}

interface ProjectsTabsContextType {
  activeTab: TABS;
  setActiveTab: (tab: TABS) => void;
  small: boolean;
  setSmall: (small: boolean) => void;
}

const ProjectsTabsContext = createContext<ProjectsTabsContextType | null>(null);

export const ProjectsTabsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [activeTab, setActiveTab] = useState<TABS>(TABS.RHIZOME);
  const [small, setSmall] = useState<boolean>(false);

  const handleSetActiveTab = (tab: TABS) => {
    setActiveTab(tab);
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  }

  return (
    <ProjectsTabsContext.Provider value={{ activeTab, setActiveTab: handleSetActiveTab, small, setSmall }}>
      {children}
    </ProjectsTabsContext.Provider>
  );
};

export const useProjectsTabs = (): ProjectsTabsContextType => {
  const context = useContext(ProjectsTabsContext);
  if (!context) {
    throw new Error("useProjectsTabs must be used within a ProjectsTabsProvider");
  }
  return context;
};