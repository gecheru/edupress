import { FC } from 'react';

interface Props {
  title: string;
}

const CategoryCard: FC<Props> = ({ title }) => {
  return <div>{title}</div>;
};

export default CategoryCard;
