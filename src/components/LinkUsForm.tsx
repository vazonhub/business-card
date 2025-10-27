import { useLanguage } from '../utils/useLanguage';
import './../assets/css/components/link-us.css';


export const LinkUsForm = () => {
    const { t } = useLanguage();

    return (
        <form 
            className="link-us-form"
            action="https://formsubmit.co/faq@vazon.by" 
            method="POST"
        >
            <label className='form-field'>
                {t('support.form.firstName.title')}
                <input name='firstName' required type='text' placeholder={t('support.form.firstName.placeholder')} />
            </label>
            <label className='form-field'>
                {t('support.form.lastName.title')}
                <input name='lastName' required type='text' placeholder={t('support.form.lastName.placeholder')} />
            </label>
            <label className='form-field'>
                {t('support.form.email.title')}
                <input name='email' required type='email' placeholder={t('support.form.email.placeholder')} />
            </label>
            <label className='form-field message'>
                {t('support.form.message.title')}
                <textarea name='message' placeholder={t('support.form.message.placeholder')} />
            </label>
            <button className='apply-button' type='submit'>
                {t('support.form.submit')}
            </button>
            <input type="hidden" name="_subject" value="FAQ" />
        </form>
    )
}