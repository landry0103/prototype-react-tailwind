import React from 'react';
import { Icon } from '@iconify/react';

const ICON_SIZE = {
  width: 30,
  height: 30
};

export default function ControlArrows({ arrowLine, onNext, onPrevious, ...other }) {
  return (
    <div className="top-0 bottom-0 z-10 h-[48px] m-auto flex absolute justify-between" style={{ width: 'calc(100% + 30px)', transform: 'translate(-15px, 20px)' }} {...other}>
      <button className="w-[48px] h-[48px] flex cursor-pointer items-center justify-center text-gray-100 bg-transparent border border-blue-500 rounded-full transition hover:bg-blue-500" onClick={onPrevious}>
        <Icon icon="eva:arrow-ios-back-fill" {...ICON_SIZE} />
      </button>

      <button className="w-[48px] h-[48px] flex cursor-pointer items-center justify-center text-gray-100 bg-transparent border border-blue-500 rounded-full transition hover:bg-blue-500" onClick={onNext}>
        <Icon icon="eva:arrow-ios-forward-fill" {...ICON_SIZE} />
      </button>
    </div>
  );
}
