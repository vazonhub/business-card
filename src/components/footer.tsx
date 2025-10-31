import './../assets/css/components/footer.css';
import { LinkUsForm } from './LinkUsForm';
import mainLogo from './../assets/icons/mainLogo.svg';
import { useLanguage } from '../utils/useLanguage';

export const Footer = () => {
    const { t } = useLanguage();

    return (
        <footer id='support' className="footer">
            <section className='link'>
                <h3>{t('support.headline')}</h3>
                <LinkUsForm />
            </section>
            <hr className='footer-line'/>
            <section className='footer-info'>
                <section>
                    <img src={mainLogo} alt="VAZON logo" />
                    <section className='footer-info_attr'>
                        <h4>Vazon</h4>
                        <span>© 2025</span>
                    </section>
                </section>
                <section>
                    <a href='https://github.com/vazonhub' target='blanck'>https://github.com/vazonhub</a>
                </section>
            </section>
        </footer>
    )
}