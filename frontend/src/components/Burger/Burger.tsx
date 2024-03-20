import { FC } from 'react';

interface Props {
  isOpened: boolean;
  onClick: (value: boolean) => void;
  extraClass?: string;
}

const Burger: FC<Props> = ({ isOpened, onClick, extraClass }) => {
  return (
    <button className={extraClass} onClick={() => onClick(!isOpened)}>
      {isOpened ? (
        <img src='/burger.svg' className='h-7 w-7' />
      ) : (
        <img src='/burger.svg' className='h-7 w-7' />
      )}
    </button>
  );
};

export default Burger;
