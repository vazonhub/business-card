import { FormEvent, useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { useLanguage } from '../utils/useLanguage';
import './../assets/css/components/link-us.css';

export const LinkUsForm = () => {
  const { t } = useLanguage();
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<'success' | 'error' | 'loading' | null>('success');
  const [visible, setVisible] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    const form = formRef.current;
    if (!form) return;

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      form.reset();
      setStatus('success');
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  // Появление и исчезновение с плавной анимацией
  useEffect(() => {
    if (status === 'success' || status === 'error') {
      // показываем блок с анимацией
      setVisible(true);
      const hideTimer = setTimeout(() => setVisible(false), 2400);
      const clearTimer = setTimeout(() => setStatus(null), 3000);
      return () => {
        clearTimeout(hideTimer);
        clearTimeout(clearTimer);
      };
    }
  }, [status]);

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="link-us-form">
      <label className="form-field">
        {t('support.form.firstName.title')}
        <input
          name="firstName"
          required
          type="text"
          placeholder={t('support.form.firstName.placeholder')}
        />
      </label>
      <label className="form-field">
        {t('support.form.lastName.title')}
        <input
          name="lastName"
          required
          type="text"
          placeholder={t('support.form.lastName.placeholder')}
        />
      </label>
      <label className="form-field">
        {t('support.form.email.title')}
        <input
          name="email"
          required
          type="email"
          placeholder={t('support.form.email.placeholder')}
        />
      </label>
      <label className="form-field message">
        {t('support.form.message.title')}
        <textarea
          name="message"
          required
          placeholder={t('support.form.message.placeholder')}
        />
      </label>

      {status === 'loading' && (
        <div className="status-overlay loading show">
          <div className="circular-progress"></div>
        </div>
      )}

      <button className='apply-button' type="submit" disabled={status === 'loading'}>
        {status === 'loading'
          ? t('support.form.sending')
          : t('support.form.submit')}
      </button>

      {(status === 'success' || status === 'error') && (
        <div
          className={`status-overlay ${status} ${visible ? 'show' : 'hide'}`}
        >
          <p>{t(`support.form.${status}`)}</p>
        </div>
      )}
    </form>
  );
};