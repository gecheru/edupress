import { FC } from 'react';
import { To } from 'react-router-dom';
import { Button } from 'shared/ui/Button';

interface Props {
  title: string;
  subtitle: string;
  btnText: string;
  btnPath: To;
}

export const SectionHeading: FC<Props> = ({
  title,
  subtitle,
  btnText,
  btnPath,
}) => {
  return (
    <div className='mb-12 items-center justify-between sm:flex'>
      <div className='mb-3 sm:mb-0'>
        <h2 className='mb-2'>{title}</h2>
        <div className='text-lg text-gray-dark'>{subtitle}</div>
      </div>
      <Button variant='secondary' to={btnPath}>
        {btnText}
      </Button>
    </div>
  );
};
