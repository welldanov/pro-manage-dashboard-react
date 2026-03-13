import { type FC } from 'react';

import { useAppDispatch } from '@src/app/hooks.ts';

import { Task } from '@src/features/task';
import { ActionMenu } from '@src/shared/components/action-menu/ActionMenu.tsx';

import type { TaskEntity, TaskStatus } from '@src/features/task/model/types.ts';
import { deleteAllStatusTasks } from '@src/features/task/model/tasksSlice.ts';
import type { ActionItem } from '@src/shared/components/action-menu/types.ts';
import { fromStatusToTitle } from '@src/widgets/tasks-card/types.ts';
import { combineClass } from '@src/shared/lib/CombineClass.ts';

import PlusIcon from '@src/shared/assets/icons/ui/plus.svg?react';
import cls from './TasksCard.module.scss';

interface TasksCardProps {
  tasks: TaskEntity[];
  status: TaskStatus;
  onOpenModal: (status: TaskStatus) => void;
}

export const TasksCard: FC<TasksCardProps> = ({
  tasks,
  status,
  onOpenModal,
}) => {
  const dispatch = useAppDispatch();

  const TaskActions: ActionItem[] = [
    {
      label: 'Delete All',
      danger: true,
      onClick: () => {
        dispatch(deleteAllStatusTasks({ status }));
      },
    },
  ];

  return (
    <div
      className={combineClass([
        cls.tasksCard,
        tasks.length ? cls.tasksCardGap : undefined,
      ])}
    >
      <div className={cls.tasksCardHeader}>
        <span className={cls.tasksCardHeaderTitle}>
          {fromStatusToTitle[status]}
        </span>
        <div className={cls.tasksCardHeaderActions}>
          <button
            style={{ width: 14, height: 14 }}
            className={cls.tasksCardHeaderAction}
            type={'button'}
            onClick={() => onOpenModal(status)}
          >
            <PlusIcon />
          </button>
          <ActionMenu actions={TaskActions} />
        </div>
      </div>
      <div className={cls.tasksCardTasks}>
        {tasks.map((task) => (
          <Task key={task.id} {...task} />
        ))}
      </div>
    </div>
  );
};
