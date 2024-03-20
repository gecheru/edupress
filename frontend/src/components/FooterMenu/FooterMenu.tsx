import { LinkItem } from '@/types/LinkItem';
import { FC } from 'react';
import { Link } from 'react-router-dom';

interface Props {
  links?: LinkItem[];
}

const FooterMenu: FC<Props> = ({ links }) => {
  return (
    <>
      {links && links.length ? (
        <ul>
          {links?.map((link, key) => (
            <li key={key} className='first:-mt-2'>
              <Link to={link.path} className='block py-2'>
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      ) : null}
    </>
  );
};

export default FooterMenu;
