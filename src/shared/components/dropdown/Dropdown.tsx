import { useEffect, useRef, useState } from 'react';

import type { ITaskCategory } from '@src/features/task/model/types.ts';
import { combineClass } from '@src/shared/lib/CombineClass.ts';

import ArrowIcon from '@src/shared/assets/icons/ui/arrow.svg?react';

import cls from './Dropdown.module.scss';

const fromCategoryToText: Record<ITaskCategory, string> = {
  designSystem: 'Design System',
  typography: 'Typography',
  development: 'Development',
};

interface DropdownProps<T extends ITaskCategory> {
  categories: T[];
  value: T | null;
  onChange: (value: T) => void;
}

export const Dropdown = <T extends ITaskCategory>({
  categories,
  value,
  onChange,
}: DropdownProps<T>) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <div className={cls.dropdown} ref={ref}>
      <button
        className={combineClass([cls.dropdownHeader, open ? cls['open'] : ''])}
        onClick={() => setOpen((prev) => !prev)}
        type="button"
      >
        <span className={cls.dropdownInit}>
          {value !== null && value in fromCategoryToText
            ? fromCategoryToText[value]
            : (value ?? 'Task Category')}
        </span>
        <div className={cls.dropdownArrowIcon}>
          <ArrowIcon />
        </div>
      </button>

      {open && (
        <div className={cls.dropdownMenu}>
          {categories.map((category, index) => (
            <div key={category}>
              <button
                className={cls.dropdownItem}
                onClick={() => {
                  onChange(category);
                  setOpen(false);
                }}
                type="button"
              >
                {fromCategoryToText[category]}
              </button>
              {index !== categories.length - 1 && (
                <div className={cls.dropdownSeparator} />
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
