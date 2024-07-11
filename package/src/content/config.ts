import { defineCollection, z } from 'astro:content'
import { pageSchema, pathSchema } from '../schemas/collection-old-schemas'

const references = {
  page: pathSchema('pages'),
  pages: pathSchema('pages').array(),
}

const collection = defineCollection({
  type: 'content',
  schema: pageSchema(references),
})

export const collections = {
  pages: collection,
  globals: {
    type: 'data',
    schema: z.any(),
  },
  blocks: {
    type: 'data',
    schema: z.any(),
  },
}
