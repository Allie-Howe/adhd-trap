import { range } from 'lodash'
import { colours } from './colours'

export const audios = range(colours.length).map(i => {
  const a = new Audio()
  a.src = new URL('../assets/click.mp3', import.meta.url).toString()
  return a
})
