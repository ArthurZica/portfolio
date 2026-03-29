import social from './social'

export const EMAIL = 'arthuraugustozica@gmail.com'
export const WHATSAPP_NUMBER = '5531981158239'

const linkedin = social.find((s) => s.icon === 'linkedin')

const contactLinks = [
  {
    label: 'E-mail',
    href: `mailto:${EMAIL}`,
    display: EMAIL,
    prompt: 'mailto',
  },
  {
    label: 'WhatsApp',
    href: `https://wa.me/${WHATSAPP_NUMBER}`,
    display: `${WHATSAPP_NUMBER}`,
    prompt: 'chat',
  },
  {
    label: 'LinkedIn',
    href: linkedin.href,
    display: linkedin.display,
    prompt: 'open',
  },
]

export default contactLinks
