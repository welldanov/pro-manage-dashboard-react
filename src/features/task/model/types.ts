export type ITaskCategory = 'designSystem' | 'typography' | 'development';

export type TaskStatus = 'todo' | 'inProgress' | 'done';

export interface IBaseTask {
  category: ITaskCategory;
  title: string;
  text: string;
  status: TaskStatus;
}

export interface TaskEntity extends IBaseTask {
  id: string;
}
