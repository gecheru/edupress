import Icon from '@components/Icon/Icon';
import { IconName } from '@components/Icon/assets';
import { RouterPaths } from '@constants/routerPaths';
import { FC } from 'react';
import { Link, createSearchParams } from 'react-router-dom';

interface Props {
  categoryLink: { name: string; iconName?: IconName; slug: string };
}

const CategoryCard: FC<Props> = ({ categoryLink }) => {
  const params = { categories: [categoryLink.slug] };
  return (
    <Link
      to={{
        pathname: RouterPaths.Courses,
        search: `?${createSearchParams(params)}`,
      }}
      className='flex h-[234px] w-[234px] flex-col items-center justify-center rounded-3xl border border-gray-light transition-all hover:-translate-y-4 hover:text-primary hover:shadow-hover'
    >
      {categoryLink.iconName && (
        <div className='mb-5 flex justify-center'>
          <Icon
            name={categoryLink.iconName}
            className='text-primary'
            size='32px'
          />
        </div>
      )}
      <h4>{categoryLink.name}</h4>
    </Link>
  );
};

export default CategoryCard;
