import styles from '../styles/ContactCode.module.css';

const contactItems = [
  {
    social: 'website',
    link: 'nurealam.me',
    href: '#',
  },
  {
    social: 'email',
    link: 'nur42658@gmail.com',
    href: 'mailto:nur42658@gmail.com',
  },
  {
    social: 'github',
    link: 'nur165024',
    href: 'https://github.com/nur165024',
  },
  {
    social: 'linkedin',
    link: 'Nure Alam',
    href: 'https://www.linkedin.com/in/nur165024',
  },
  {
    social: 'twitter',
    link: 'Nure Alam',
    href: 'https://www.twitter.com',
  },
  {
    social: 'instagram',
    link: 'Nure Alam',
    href: 'https://www.instagram.com',
  },
  {
    social: 'polywork',
    link: 'Nure Alam',
    href: 'https://www.polywork.com',
  },
  {
    social: 'telegram',
    link: 'Nure Alam',
    href: 'https://t.me/',
  },
  {
    social: 'codepen',
    link: 'Nure Alam',
    href: 'https://codepen.io/',
  },
  {
    social: 'codesandbox',
    link: 'Nure Alam',
    href: 'https://codesandbox.io/u/',
  },
];

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
      </p>
      {contactItems.slice(0, 8).map((item, index) => (
        <p className={styles.line} key={index+1}>
          &nbsp;&nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      {contactItems.slice(8, contactItems.length).map((item, index) => (
        <p className={styles.line} key={index+1}>
          &nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;
