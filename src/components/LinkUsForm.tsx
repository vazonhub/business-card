import { useLanguage } from '../utils/useLanguage';
import './../assets/css/components/link-us.css';

export const LinkUsForm = () => {
    const { t } = useLanguage();

    return (
        <form className="link-us-form">
            <label className='form-field'>
                {t('support.form.firstName.title')}
                <input name='firstName' type='text' placeholder={t('support.form.firstName.placeholder')} />
            </label>
            <label className='form-field'>
                {t('support.form.lastName.title')}
                <input name='lastName' type='text' placeholder={t('support.form.lastName.placeholder')} />
            </label>
            <label className='form-field'>
                {t('support.form.email.title')}
                <input name='email' type='text' placeholder={t('support.form.email.placeholder')} />
            </label>
            <label className='form-field message'>
                {t('support.form.message.title')}
                <textarea name='message' placeholder={t('support.form.message.placeholder')} />
            </label>
            <button className='apply-button'>
                {t('support.form.submit')}
            </button>
        </form>
    )
}