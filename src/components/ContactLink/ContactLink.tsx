import { FC } from 'react';

interface Props {
  label: string;
  title: string;
  url: string;
}
const ContactLink: FC<Props> = ({ label, title, url }) => {
  return (
    <div>
      {label && <span className='mr-1'>{label}</span>}
      {url && title && <a href={url}>{title}</a>}
    </div>
  );
};

export default ContactLink;
