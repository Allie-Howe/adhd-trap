import p5 from 'p5'
import { CIRCLE_SIZE, EPSILON, INITIAL_DIAMETER, INITIAL_SPEED, SPEED_MODIFIER } from './vars'
import { colours } from './colours'
import { audios } from './audio'




export function drawCircle(p5: p5, i: number) {
  const diameter = INITIAL_DIAMETER * (i + 1)
  const speed = INITIAL_SPEED * ((i + 1) * SPEED_MODIFIER)
  p5.circle(0, 0, diameter)


  const xTrans = p5.sin(p5.millis() * speed)
  const yTrans = -p5.cos(p5.millis() * speed)

  p5.push()

  const basicallyAtTop = xTrans > (-EPSILON * speed) && xTrans < (EPSILON * speed)
  const size = basicallyAtTop ? CIRCLE_SIZE * 2 : CIRCLE_SIZE

  p5.translate(xTrans * diameter/2, yTrans * diameter/2)
  p5.noStroke();
  p5.fill(colours[i]);
  p5.circle(0, 0, size)

  p5.pop()
  if (basicallyAtTop) audios[i].play()
}
