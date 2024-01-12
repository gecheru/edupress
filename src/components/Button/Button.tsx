import classNames from 'classnames';
import { ButtonHTMLAttributes, ReactNode, forwardRef } from 'react';
import { Link, To } from 'react-router-dom';

type ButtonVariant = 'primary' | 'secondary';
type ButtonSize = 'sm' | 'md';

interface Props extends ButtonHTMLAttributes<HTMLAnchorElement> {
  variant?: ButtonVariant;
  pill?: boolean;
  children?: ReactNode;
  className?: string;
  size?: ButtonSize;
  to?: To;
}

const ButtonVariants: { [key in ButtonVariant]: string } = {
  primary: 'bg-primary text-white hover:bg-primary-hover hover:text-white',
  secondary: '',
};

const ButtonSizes: { [key in ButtonSize]: string } = {
  sm: '',
  md: 'px-5 py-2 font-medium text-lg',
};

const Button = forwardRef<HTMLAnchorElement, Props>(
  (
    {
      children,
      variant = 'primary',
      size = 'md',
      pill = true,
      className,
      to,
      ...props
    },
    ref,
  ) => {
    const classes = classNames(
      'inline-block',
      ButtonSizes[size],
      ButtonVariants[variant],
      pill ? 'rounded-full' : '',
      className,
    );

    if (to) {
      return (
        <Link to={to} className={classes} ref={ref} {...props}>
          {children}
        </Link>
      );
    }
    return (
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      <button className={classes} ref={ref} {...props}>
        {children}
      </button>
    );
  },
);

export default Button;
