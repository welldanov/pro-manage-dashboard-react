import { type FC, useEffect, useState } from 'react';

import { Dropdown } from '@src/shared/components/dropdown';
import { SimpleButton } from '@src/shared/components/buttons/simple-button';

import type {
  IBaseTask,
  ITaskCategory,
  TaskStatus,
} from '@src/features/task/model/types.ts';
import { fromStatusToTitle } from '@src/widgets/tasks-card/types.ts';
import { useAppDispatch } from '@src/app/hooks.ts';
import { combineClass } from '@src/shared/lib/CombineClass.ts';
import { addTask } from '@src/features/task/model/tasksSlice.ts';

import ExitIcon from '@src/shared/assets/icons/ui/exit.svg?react';

import cls from './AddTaskModal.module.scss';

const dropdownCategories: ITaskCategory[] = [
  'designSystem',
  'typography',
  'development',
];

interface AddTaskModalProps {
  isOpen: boolean;
  onClose: () => void;
  status: TaskStatus;
}

export const AddTaskModal: FC<AddTaskModalProps> = ({
  isOpen,
  onClose,
  status,
}) => {
  const dispatch = useAppDispatch();

  const [category, setCategory] = useState<ITaskCategory | null>(null);
  const [title, setTitle] = useState<string>('');
  const [text, setText] = useState<string>('');

  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const createTask = () => {
    if (!category || title === '' || text === '') {
      setIsError(true);
      return;
    }

    const forwardData: IBaseTask = {
      category,
      title,
      text,
      status,
    };
    dispatch(addTask(forwardData));
    onClose();
  };

  return (
    <div
      className={combineClass([
        cls.modalBackground,
        isOpen ? cls['open'] : cls['closed'],
      ])}
    >
      <div className={cls.modalContainer}>
        <div className={cls.modalRelative}>
          <div className={cls.modalExit} onClick={onClose}>
            <button className={cls.modalIcon}>
              <ExitIcon />
            </button>
          </div>
          <div className={cls.modalForm}>
            <span className={cls.modalTitle}>{fromStatusToTitle[status]}</span>
            <Dropdown<ITaskCategory>
              categories={dropdownCategories}
              value={category}
              onChange={(c) => setCategory(c)}
            />
            <input
              name={'taskTitle'}
              className={cls.modalInput}
              placeholder={'Enter task title'}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
              name={'taskText'}
              className={cls.modalTextArea}
              placeholder={'Enter task text'}
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <SimpleButton title={'Create'} onClick={createTask} />
            {isError && (
              <span className={cls.errorMessage}>
                Проверьте корректность введенных данных
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
