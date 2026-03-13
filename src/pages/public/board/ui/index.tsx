import { useState } from 'react';

import { HeroSection } from '@src/features/hero-section';
import { TasksCard } from '@src/widgets/tasks-card/TasksCard.tsx';
import { AddTaskModal } from '@src/widgets/add-task-modal';

import type { TaskStatus } from '@src/features/task/model/types.ts';
import { useAppSelector } from '@src/app/hooks.ts';
import { type RootState } from '@src/app/store.ts';

import cls from '../styles/Board.module.scss';

export const Board = () => {
  const tasks = useAppSelector((state: RootState) => state.tasks.items);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeStatus, setActiveStatus] = useState<TaskStatus>('todo');

  const handleOpenModal = (status: TaskStatus) => {
    setActiveStatus(status);
    setIsModalOpen(true);
  };

  return (
    <main className={cls.board}>
      <AddTaskModal
        key={isModalOpen ? 'open' : 'closed'}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        status={activeStatus}
      />
      <HeroSection title={'Board'} />
      <section className={cls.progressSection}>
        <TasksCard
          tasks={tasks.filter((task) => task.status === 'todo')}
          status={'todo'}
          onOpenModal={handleOpenModal}
        />
        <TasksCard
          tasks={tasks.filter((task) => task.status === 'inProgress')}
          status={'inProgress'}
          onOpenModal={handleOpenModal}
        />
        <TasksCard
          tasks={tasks.filter((task) => task.status === 'done')}
          status={'done'}
          onOpenModal={handleOpenModal}
        />
      </section>
    </main>
  );
};
