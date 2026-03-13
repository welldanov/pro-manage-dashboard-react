import React, { type FC } from 'react';

import { ActionMenu } from '@src/shared/components/action-menu';

import type {
  IBaseTask,
  ITaskCategory,
  TaskStatus,
} from '@src/features/task/model/types.ts';
import {
  deleteTask,
  updateTaskStatus,
} from '@src/features/task/model/tasksSlice.ts';
import type { ActionItem } from '@src/shared/components/action-menu/types.ts';

import { useAppDispatch } from '@src/app/hooks.ts';

import cls from './Task.module.scss';

interface TaskProps extends IBaseTask {
  id: string;
}

interface TaskAction extends ActionItem {
  exclude: TaskStatus | null;
}

const categoryColor: Record<ITaskCategory, { text: string; color: string }> = {
  designSystem: { text: 'Design System', color: '#40A737' },
  typography: { text: 'Typography', color: '#18B0FF' },
  development: { text: 'Development', color: '#FF2473' },
};

export const Task: FC<TaskProps> = ({ id, category, title, text, status }) => {
  const dispatch = useAppDispatch();

  const TaskActions: TaskAction[] = [
    {
      label: 'Move to To do',
      onClick: () => {
        dispatch(updateTaskStatus({ id, status: 'todo' }));
      },
      exclude: 'todo',
    },
    {
      label: 'Move to In Progress',
      onClick: () => {
        dispatch(updateTaskStatus({ id, status: 'inProgress' }));
      },
      exclude: 'inProgress',
    },
    {
      label: 'Move to Done',
      onClick: () => {
        dispatch(updateTaskStatus({ id, status: 'done' }));
      },
      exclude: 'done',
    },
    {
      label: 'Delete Task',
      danger: true,
      onClick: () => {
        dispatch(deleteTask({ id }));
      },
      exclude: null,
    },
  ];

  return (
    <div className={cls.task}>
      <div className={cls.taskHeader}>
        <span
          style={
            {
              '--before-color': categoryColor[category].color,
            } as React.CSSProperties
          }
          className={cls.taskCategory}
        >
          {categoryColor[category].text}
        </span>
        <ActionMenu
          actions={TaskActions.filter((action) => action.exclude !== status)}
        />
      </div>
      <span className={cls.taskTitle}>{title}</span>
      <p className={cls.taskDescription}>{text}</p>
    </div>
  );
};
