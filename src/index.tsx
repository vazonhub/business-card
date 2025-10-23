import { createRoot } from 'react-dom/client';
import './assets/css/fonts.css';
import './assets/css/index.css';
import './assets/css/reset.css';
import { Projects } from './components/projects';
import { Header } from './components/header';
import { ProjectsTabsProvider } from './utils/useProjectsTabs';
import { LanguageProvider } from './utils/useLanguage';

createRoot(document.getElementById('root')!).render(
  <ProjectsTabsProvider>
    <LanguageProvider>
      <section className='start'>
        <Header />
        <Projects />
      </section>
      <section id='about'>

      </section>
      <footer id='support'>

      </footer>
    </LanguageProvider>
  </ProjectsTabsProvider>
)
