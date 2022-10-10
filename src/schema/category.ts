import { objectType } from 'nexus'

export const Category = objectType({
  name: 'Category',
  description: 'task category',
  definition(t) {
    t.nonNull.int('id', { description: 'category id' })
    t.nonNull.string('name', { description: 'category name' })
  },
})
