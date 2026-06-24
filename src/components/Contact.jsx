import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, MapPin, CheckCircle2, AlertCircle, Send, Check } from 'lucide-react';
import { developerInfo } from '../data/portfolioData';

export default function Contact() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'webapp',
    budget: 'tier1',
    details: ''
  });
  const [status, setStatus] = useState('idle'); // idle, loading, success, error

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    try {
      // Simulate network request
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setStatus('success');
      setFormData({
        name: '',
        email: '',
        projectType: 'webapp',
        budget: 'tier1',
        details: ''
      });
    } catch (err) {
      setStatus('error');
    }
  };

  const getProjectLabel = (value) => {
    switch (value) {
      case 'webapp': return t("contact.form.typeWebapp");
      case 'ecommerce': return t("contact.form.typeEcommerce");
      case 'api': return t("contact.form.typeApi");
      default: return t("contact.form.typeOther");
    }
  };

  return (
    <section id="contact" className="py-28 bg-brand-dark-gray border-t border-white/8 relative overflow-hidden">
      
      {/* Background glow overlay */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute bottom-[-10%] right-[10%] w-[500px] h-[350px] bg-accent-purple/5 blur-[120px] rounded-full" />
      </div>

      <div className="container mx-auto px-6 max-w-[1100px] relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Contact Details & Trust Builders */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col gap-10"
          >
            <div>
              <span className="inline-block text-[10px] uppercase tracking-wider text-accent-blue font-bold mb-3">
                {t("contact.title")}
              </span>
              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white tracking-tight leading-tight">
                {t("contact.headline")}
              </h2>
              <p className="text-zinc-400 text-xs sm:text-sm mt-4 leading-relaxed">
                {t("contact.desc")}
              </p>
            </div>

            {/* Availability Widget */}
            <div className="bg-brand-black/40 border border-white/8 p-5 rounded-md flex gap-4 items-center select-none">
              <div className="w-2.5 h-2.5 rounded-full bg-accent-emerald shadow-[0_0_10px_#10b981] animate-pulse flex-shrink-0" />
              <div>
                <span className="block text-[10px] font-bold text-zinc-400 uppercase tracking-wider mb-0.5">
                  {t("contact.statusTitle")}
                </span>
                <span className="text-xs font-semibold text-white">
                  {t("contact.statusValue")}
                </span>
              </div>
            </div>

            {/* Details Cards */}
            <div className="flex flex-col gap-6">
              <div className="flex gap-4 items-start">
                <div className="w-9 h-9 bg-accent-blue/10 border border-accent-blue/15 rounded-md flex items-center justify-center flex-shrink-0">
                  <Mail className="w-4 h-4 text-accent-blue" />
                </div>
                <div>
                  <span className="block text-[9px] uppercase tracking-wider text-zinc-500 font-bold mb-1">
                    {t("contact.emailLabel")}
                  </span>
                  <a 
                    href={`mailto:${developerInfo.email}`} 
                    className="text-white hover:text-accent-blue font-semibold text-sm transition-colors duration-150"
                  >
                    {developerInfo.email}
                  </a>
                </div>
              </div>
              
              <div className="flex gap-4 items-start">
                <div className="w-9 h-9 bg-accent-blue/10 border border-accent-blue/15 rounded-md flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4 text-accent-blue" />
                </div>
                <div>
                  <span className="block text-[9px] uppercase tracking-wider text-zinc-500 font-bold mb-1">
                    {t("contact.locLabel")}
                  </span>
                  <span className="text-white font-semibold text-sm">
                    {developerInfo.city}, {developerInfo.location}
                  </span>
                </div>
              </div>
            </div>

            {/* Trust-Building Pitch */}
            <div className="border-t border-white/5 pt-8">
              <span className="block text-[9px] uppercase tracking-wider text-zinc-500 font-bold mb-3">
                {t("contact.whyTitle")}
              </span>
              <ul className="flex flex-col gap-3">
                <li className="flex gap-2.5 items-center text-xs text-zinc-400">
                  <Check className="w-3.5 h-3.5 text-accent-blue flex-shrink-0" />
                  <span>{t("contact.why1")}</span>
                </li>
                <li className="flex gap-2.5 items-center text-xs text-zinc-400">
                  <Check className="w-3.5 h-3.5 text-accent-blue flex-shrink-0" />
                  <span>{t("contact.why2")}</span>
                </li>
                <li className="flex gap-2.5 items-center text-xs text-zinc-400">
                  <Check className="w-3.5 h-3.5 text-accent-blue flex-shrink-0" />
                  <span>{t("contact.why3")}</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Form Block */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 w-full bg-surface-card border border-white/8 p-8 rounded-md shadow-2xl"
          >
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="name" className="text-[10px] font-bold text-zinc-450 uppercase tracking-wide">
                    {t("contact.form.name")}
                  </label>
                  <motion.input 
                    whileFocus={{ scale: 1.01, borderColor: 'rgba(99, 91, 255, 0.4)' }}
                    type="text" 
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={t("contact.form.namePlaceholder")}
                    className="bg-brand-black border border-white/8 rounded-sm p-3.5 text-white text-xs focus:outline-none transition-all"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="text-[10px] font-bold text-zinc-450 uppercase tracking-wide">
                    {t("contact.form.email")}
                  </label>
                  <motion.input 
                    whileFocus={{ scale: 1.01, borderColor: 'rgba(99, 91, 255, 0.4)' }}
                    type="email" 
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={t("contact.form.emailPlaceholder")}
                    className="bg-brand-black border border-white/8 rounded-sm p-3.5 text-white text-xs focus:outline-none transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="projectType" className="text-[10px] font-bold text-zinc-455 uppercase tracking-wide">
                    {t("contact.form.type")}
                  </label>
                  <motion.select 
                    whileFocus={{ scale: 1.01, borderColor: 'rgba(99, 91, 255, 0.4)' }}
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className="bg-brand-black border border-white/8 rounded-sm p-3.5 text-white text-xs focus:outline-none transition-all appearance-none bg-[url('data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%23a1a1aa%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[right_14px_center] bg-[length:14px] pr-10 rtl:bg-[left_14px_center]"
                  >
                    <option value="webapp">{t("contact.form.typeWebapp")}</option>
                    <option value="ecommerce">{t("contact.form.typeEcommerce")}</option>
                    <option value="api">{t("contact.form.typeApi")}</option>
                    <option value="other">{t("contact.form.typeOther")}</option>
                  </motion.select>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="budget" className="text-[10px] font-bold text-zinc-455 uppercase tracking-wide">
                    {t("contact.form.budget")}
                  </label>
                  <motion.select 
                    whileFocus={{ scale: 1.01, borderColor: 'rgba(99, 91, 255, 0.4)' }}
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="bg-brand-black border border-white/8 rounded-sm p-3.5 text-white text-xs focus:outline-none transition-all appearance-none bg-[url('data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%23a1a1aa%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[right_14px_center] bg-[length:14px] pr-10 rtl:bg-[left_14px_center]"
                  >
                    <option value="tier1">&lt; €3,000</option>
                    <option value="tier2">€3,000 - €5,000</option>
                    <option value="tier3">€5,000 - €10,000</option>
                    <option value="tier4">€10,000+</option>
                  </motion.select>
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="details" className="text-[10px] font-bold text-zinc-450 uppercase tracking-wide">
                  {t("contact.form.goals")}
                </label>
                <motion.textarea 
                  whileFocus={{ scale: 1.01, borderColor: 'rgba(99, 91, 255, 0.4)' }}
                  id="details"
                  name="details"
                  required
                  rows={4}
                  value={formData.details}
                  onChange={handleChange}
                  placeholder={t("contact.form.goalsPlaceholder")}
                  className="bg-brand-black border border-white/8 rounded-sm p-3.5 text-white text-xs focus:outline-none transition-all resize-y"
                />
              </div>

              <motion.button 
                type="submit" 
                disabled={status === 'loading'}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="self-start inline-flex items-center gap-2 bg-white text-black font-body font-bold text-xs py-3 px-6 rounded-md hover:bg-white/95 disabled:opacity-55 transition-all cursor-pointer shadow-lg select-none"
              >
                {status === 'loading' ? (
                  <>
                    <span>{t("contact.form.submitLoading")}</span>
                    <div className="spinner"></div>
                  </>
                ) : (
                  <>
                    <span>{t("contact.form.submit")}</span>
                    <Send className="w-3.5 h-3.5 rtl:rotate-180" />
                  </>
                )}
              </motion.button>

              {/* Status Notifications */}
              <AnimatePresence>
                {status === 'success' && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex gap-3 p-4 bg-emerald-500/5 border border-emerald-500/20 text-emerald-200 text-xs rounded-sm mt-2"
                  >
                    <div className="w-5 h-5 rounded-full bg-emerald-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                    </div>
                    <div>
                      <strong className="block text-white mb-0.5">{t("contact.form.successTitle")}</strong> 
                      {t("contact.form.successText")}
                    </div>
                  </motion.div>
                )}

                {status === 'error' && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex gap-3 p-4 bg-rose-500/5 border border-rose-500/20 text-rose-200 text-xs rounded-sm mt-2"
                  >
                    <div className="w-5 h-5 rounded-full bg-rose-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <AlertCircle className="w-3.5 h-3.5 text-rose-500" />
                    </div>
                    <div>
                      <strong className="block text-white mb-0.5">{t("contact.form.errorTitle")}</strong> 
                      {t("contact.form.errorText")}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
