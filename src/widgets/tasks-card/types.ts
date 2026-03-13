import type { TaskStatus } from '@src/features/task/model/types.ts';

export const fromStatusToTitle: Record<TaskStatus, string> = {
  todo: 'To do',
  inProgress: 'In progress',
  done: 'Done',
};
