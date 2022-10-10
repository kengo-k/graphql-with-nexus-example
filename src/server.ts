import { ApolloServer } from 'apollo-server'
import {schema} from './schema'

export function init() {
  const server = new ApolloServer({schema})

  return {
    start: async () => {
      const { url } = await server.listen()
      console.log(`🚀  Server ready at ${url}`)
    },
    stop: async () => {
      await server.stop()
    },
  }
}