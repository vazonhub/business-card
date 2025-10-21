import { createRoot } from 'react-dom/client'
import './index.css';
import { NavMenu } from './components/nav';
import { Icon } from './components/icons';

createRoot(document.getElementById('root')!).render(
  <>
    <section className='start'>
      <header className='header'>
        <Icon />
        <NavMenu />
      </header>
    </section>
    <main>

    </main>
    <footer>

    </footer>
  </>
)
