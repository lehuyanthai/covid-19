import { SetStateAction } from 'react';
import { AddIcon, MinusIcon } from '../../icons';

import './styles.scss';

interface IGroupButton {
  value: number;
  onIncrease?: () => void;
  onDecrease?: () => void;
  setValue?: React.Dispatch<SetStateAction<number>>;
}

const GroupButton = ({
  value,
  onDecrease,
  onIncrease,
  setValue,
}: IGroupButton) => {
  const handleDecrease = () => {
    if (!!onDecrease) {
      onDecrease();
      return;
    }

    if (!!setValue) {
      setValue(value - 1);
      return;
    }
  };
  const handleIncrease = () => {
    if (!!onIncrease) {
      onIncrease();
      return;
    }

    if (!!setValue) {
      setValue(value + 1);
      return;
    }
  };
  return (
    <div className='group-value-button'>
      <div className='group-value-button__btn' onClick={handleDecrease}>
        <MinusIcon />
      </div>
      <div className='group-value-button__value'>{value}</div>
      <div className='group-value-button__btn' onClick={handleIncrease}>
        <AddIcon />
      </div>
    </div>
  );
};

export default GroupButton;
