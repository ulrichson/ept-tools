import { Schema as JsonSchema } from 'ajv'

import { Schema } from '../schema'
import { View } from '../view'

import { Binary } from './binary'
import { Laszip } from './laszip'

export type DataType = 'binary' | 'laszip'
const schema: JsonSchema = {
  title: 'Data type',
  description: 'Point data encoding',
  type: 'string',
  enum: ['binary', 'laszip'],
}
export const DataType = { schema, extension, view }

const extensions = { binary: 'bin', laszip: 'laz' }
function extension(type: DataType): string {
  return extensions[type]
}

async function view(
  dataType: DataType,
  buffer: Buffer,
  schema: Schema
): Promise<View.Readable> {
  switch (dataType) {
    case 'binary':
      return Binary.view(buffer, schema)
    case 'laszip':
      return Laszip.view(buffer)
    default:
      throw new Error(`Invalid data type ${dataType}`)
  }
}
