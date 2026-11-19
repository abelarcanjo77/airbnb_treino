import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'acomodacao',
  title: 'Acomodação',
  type: 'document',
  fields: [
    defineField({ name: 'number', title: 'Número', type: 'number' }),
    defineField({ name: 'date', title: 'Data', type: 'string' }),
    defineField({ name: 'host', title: 'Anfitrião', type: 'string' }),
    defineField({ name: 'id', title: 'ID', type: 'string' }),
    defineField({ name: 'title', title: 'Título', type: 'string' }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
    }),
    defineField({
      name: 'location',
      title: 'Localização',
      type: 'object',
      fields: [
        { name: 'description', title: 'Descrição', type: 'string' },
        { name: 'city', title: 'Cidade', type: 'string' },
        { name: 'state', title: 'Estado', type: 'string' },
        { name: 'country', title: 'País', type: 'string' },
      ],
    }),
    defineField({
      name: 'detailsAccommod',
      title: 'Detalhes da Acomodação',
      type: 'object',
      fields: [
        { name: 'montainView', title: 'Vista para a Montanha', type: 'boolean' },
        { name: 'workspace', title: 'Área de Trabalho', type: 'boolean' },
        { name: 'kitchen', title: 'Cozinha', type: 'boolean' },
        { name: 'pivatePool', title: 'Piscina Privativa', type: 'boolean' },
        { name: 'alertCarbon', title: 'Alerta de Monóxido de Carbono', type: 'boolean' },
        { name: 'watersView', title: 'Vista para a Água', type: 'boolean' },
        { name: 'wifi', title: 'Wi-Fi', type: 'boolean' },
        { name: 'parking', title: 'Estacionamento', type: 'boolean' },
        { name: 'animals', title: 'Permite Animais', type: 'boolean' },
        { name: 'AlertSmoke', title: 'Alerta de Fumo', type: 'boolean' },
        { name: 'guest', title: 'Hóspedes', type: 'number' },
        { name: 'room', title: 'Quartos', type: 'number' },
        { name: 'bed', title: 'Camas', type: 'number' },
        { name: 'bathroom', title: 'Banheiros', type: 'number' },
      ],
    }),
    defineField({ name: 'comodidades', title: 'Comodidades', type: 'string' }),
    defineField({ name: 'hasBadge', title: 'Possui Selo (Badge)', type: 'boolean' }),
    defineField({ name: 'price', title: 'Preço por Noite', type: 'number' }),
    defineField({ name: 'rating', title: 'Avaliação Média', type: 'number' }),
    defineField({
      name: 'testimonials',
      title: 'Avaliações',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'id', title: 'ID', type: 'string' },
            { name: 'name', title: 'Nome do Cliente', type: 'string' },
            { name: 'image', title: 'Foto do Cliente', type: 'string' },
            { name: 'comment', title: 'Comentário', type: 'text' },
            { name: 'rating', title: 'Nota', type: 'number' },
            { name: 'customerTime', title: 'Tempo como Cliente', type: 'number' },
            { name: 'createdAt', title: 'Criado em', type: 'number' },
            { name: 'stayedAt', title: 'Estadia em', type: 'number' },
          ],
        },
      ],
    }),
    defineField({
      name: 'photos',
      title: 'Fotos',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'id', title: 'ID', type: 'string' },
            { name: 'source', title: 'URL da Imagem', type: 'string' },
            { name: 'description', title: 'Descrição da Foto', type: 'string' },
          ],
        },
      ],
    }),
  ],
})