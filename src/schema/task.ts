import {
  objectType, extendType
} from "nexus";

export const Task = objectType({
  name: "Task",
  description: "task",
  definition(t) {
    t.nonNull.int("id", {description: "task id"})
    t.nonNull.string("title", {description: "task title"})
    t.field('category', {
      type: 'Category',
    })
    t.nonNull.int("priority", {description: "task priority"})
    t.nonNull.boolean("done", {description: "task status"})
  }
})

export const TasksQuery = extendType({
  type: "Query",
  definition(t) {
    t.nonNull.list.field("tasks", {
      description: "get all tasks",
      type: "Task",
      resolve(_parent, _args, ctx) {
        return [
          {
            id: 1,
            title: 'task 1',
            category: {
              id: 1,
              name: "category 1"
            },
            priority: 5,
            done: false,
          },
          {
            id: 2,
            title: 'task 2',
            category: {
              id: 2,
              name: "category 2"
            },
            priority: 5,
            done: false,
          },
        ]
      },
    });
  },
});