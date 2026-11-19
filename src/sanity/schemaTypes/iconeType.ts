import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'icone',
  title: 'Ícone',
  type: 'document',
  fields: [
    defineField({ name: 'id', title: 'ID', type: 'string' }),
    defineField({ name: 'description', title: 'Descrição', type: 'string' }),
    defineField({ name: 'source', title: 'Origem', type: 'string' }),
    defineField({ name: 'url', title: 'URL do Ícone', type: 'string' }),
  ],
})