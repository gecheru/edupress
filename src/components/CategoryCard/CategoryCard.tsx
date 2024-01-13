import Icon from '@components/Icon/Icon';
import { IconName } from '@components/Icon/assets';
import { RouterPaths } from '@constants/routerPaths';
import { FC } from 'react';
import { Link } from 'react-router-dom';

interface Props {
  title: string;
  iconName?: IconName;
}

const CategoryCard: FC<Props> = ({ title, iconName }) => {
  return (
    <Link
      to={RouterPaths.Courses}
      className='flex h-[234px] w-[234px] flex-col items-center justify-center rounded-3xl border border-gray-light transition-all hover:-translate-y-4 hover:text-primary hover:shadow-hover'
    >
      {iconName && (
        <div className='mb-5 flex justify-center'>
          <Icon name={iconName} className='text-primary' size='32px' />
        </div>
      )}
      <h4>{title}</h4>
    </Link>
  );
};

export default CategoryCard;
