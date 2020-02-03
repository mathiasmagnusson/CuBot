import { fileURLToPath } from 'url'
import { dirname } from 'path'
let filepath = fileURLToPath(import.meta.url)
console.log(dirname(filepath))
