import { FC } from 'react';
import { IconName, Icons } from './assets';
import classNames from 'classnames';

interface Props {
  name: IconName;
  color?: string;
  size?: string;
  className: string;
}

const Icon: FC<Props> = ({
  name,
  color = 'inherit',
  size = '24px',
  className,
  ...props
}) => {
  const IconComponent = Icons[name];
  const classes = classNames(color, className);
  return (
    <IconComponent className={classes} width={size} height={size} {...props} />
  );
};

export default Icon;
