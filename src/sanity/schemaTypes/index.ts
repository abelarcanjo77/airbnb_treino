import { type SchemaTypeDefinition } from 'sanity'
import acomodacao from './acomodacaoType'
import icone from './iconeType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [acomodacao, icone],
}
