import { createRoot } from 'react-dom/client';
import './assets/css/fonts.css';
import './assets/css/index.css';
import './assets/css/reset.css';
import { ProjectsTabsProvider } from './utils/useProjectsTabs';
import { LanguageProvider } from './utils/useLanguage';
import { About } from './components/about';
import { Main } from './components/main';
import { Footer } from './components/footer';

createRoot(document.getElementById('root')!).render(
  <ProjectsTabsProvider>
    <LanguageProvider>
      <Main />
      <About />
      <Footer />
    </LanguageProvider>
  </ProjectsTabsProvider>
)
