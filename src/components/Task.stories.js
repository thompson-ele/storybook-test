import React from 'react';
import Task from './Task';

export default {
  component: Task,
  title: 'Task', // This is the name that will show up in the sidebar of storybook
};

// Task({ task: { id, title, state }, onArchiveTask, onPinTask })
const Template = args => <Task {...args} />;

export const Default = Template.bind({});
Default.args = {
  task: {
    id: '1',
    title: 'Test Task',
    state: 'TASK_INBOX',
    updatedAt: new Date(2021, 0, 1, 9, 0),
  }
}

export const Pinned = Template.bind({});
Pinned.args = {
  task: {
    ...Default.args.task,
    state: 'TASK_PINNED',
  }
}

export const Archived = Template.bind({});
Archived.args = {
  task: {
    ...Default.args.task,
    state: 'TASK_ARCHIVED',
  }
}
