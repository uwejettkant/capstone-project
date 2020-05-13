import React from 'react'
import TaskList from './TaskList'
import withMobileWrapper from '../.storybook/preview'

export default {
  component: TaskList,
  title: 'TaskList',
  decorators: [withMobileWrapper],
}

export const firstTasks = () => <TaskList match={{ params: { taskId: 1 } }} />
