import { FOOTER, SOCIAL_MEDIA } from '../../constant';
import {
  LogoIcon
} from '../../icons';

import './styles.scss';

const Footer = () => {
  const renderedSocialMediaIcon = SOCIAL_MEDIA.map((item) => (
    <div key={item.label} className='social-media__item'>
      {item.icon}
    </div>
  ));

  const renderedFooterLink = (links: string[] | undefined) => {
    if (!!links)
      return links.map((link) => (
        <div key={link} className='column__item'>
          {link}
        </div>
      ));
  };

  const renderedFooterImage = (images: string[] | undefined) => {
    if (!!images)
      return (
        <div className='grid__image'>
          {images.map((image,index) => (
            <div key={index} className='grid__image--item'>
              <img src={image} alt='' />
            </div>
          ))}
        </div>
      );
  };

  const renderedFooterContent = FOOTER.map((item) => (
    <div key={item.label} className='column'>
      <div className='column__header'>{item.label}</div>
      {renderedFooterLink(item.links)}
      {renderedFooterImage(item.images)}
    </div>
  ));

  return (
    <div className='footer'>
      <div className='footer__wrapper'>
        <div className='footer__content--leftside'>
          <LogoIcon />
          <div className='footer__content--leftside--text'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt
            officia provident facere{' '}
          </div>
          <div className='social-media__list'>{renderedSocialMediaIcon}</div>
        </div>
        <div className='footer__content--rightside'>
          {renderedFooterContent}
        </div>
      </div>
      <div className='footer__copyright'>© Copyright, Company, 2020</div>
    </div>
  );
};

export default Footer;
