import social from './social'

export const EMAIL = 'arthuraugustozica@gmail.com'

const linkedin = social.find((s) => s.icon === 'linkedin')

const contactLinks = [
  {
    label: 'E-mail',
    href: `mailto:${EMAIL}`,
    display: EMAIL,
    prompt: 'mailto',
  },
  {
    label: 'LinkedIn',
    href: linkedin.href,
    display: linkedin.display,
    prompt: 'open',
  },
]

export default contactLinks
