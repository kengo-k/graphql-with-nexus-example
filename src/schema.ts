import { makeSchema } from 'nexus'
import { join } from 'path'

import * as types from './schema/index'

export const schema = makeSchema({
  types,
  outputs: {
    // 型定義ファイルをnode_modules/@types/nexus-typegen/index.d.tsに生成する設定
    typegen: join(
      process.cwd(),
      'node_modules',
      '@types',
      'nexus-typegen',
      'index.d.ts'
    ),
    // GraphQL SDLファイルを生成する設定
    schema: join(process.cwd(), 'src', 'schema.graphql'),
  },
})
