import cn from 'classnames';
import { HTMLProps, forwardRef } from 'react';

export interface ButtonProps extends HTMLProps<HTMLButtonElement> {
  text: string;
  px?: string;
  py?: string;
  icon?: React.ReactNode;
  bg_color?: string;
  text_color?: string;
  className?: string;
  rounded?: string;
  border?: string;
  width?: string;
  height?: string;
  bg_colorHover?: string;
  text_colorHover?: string;
  onClick?: () => void;
}
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      text,
      icon,
      px = 'px-[10px]',
      py = 'py-[5px]',
      width,
      height,
      border,
      bg_color = '',
      text_color = 'text-black',
      rounded = 'rounded-md',
      className = '',
      onClick,
      ...props
    }: ButtonProps,
    ref,
  ) => {
    return (
      <button
        ref={ref}
        className={cn(
          className,
          `${px} ${py} ${border} ${bg_color} ${rounded}`,
          `${text_color} ${width} ${height} text-center`,
          `hover:${props.bg_colorHover} hover:${props.text_colorHover}}`,
        )}
        onClick={onClick}
      >
        {icon && <div className="px-1">{icon}</div>}
        {text}
      </button>
    );
  },
);
