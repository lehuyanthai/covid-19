import clsx from 'clsx';
import React, { ReactNode } from 'react';

import './styles.scss';

interface IIconButton {
  icon: ReactNode;
  border?: boolean;
  transparent?:boolean;
  onClick: () => void;
}

const IconButton = ({ icon, border = false ,onClick,transparent=false}: IIconButton) => {
  return (
    <div
      className={clsx({
        'icon-button': true,
        "border": border,
        'transparent':transparent
      })}
      onClick={onClick}
    >
      {icon}
    </div>
  );
};

export default IconButton;
