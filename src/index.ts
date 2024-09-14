import { range } from 'lodash'
import P5 from 'p5'

const INITIAL_DIAMETER = 100

const INITIAL_SPEED = 0.002
const SPEED_MODIFIER = 0.1

const CIRCLE_SIZE = 20

const EPSILON = 80

const colours = [
  'rgb(255, 174, 173)',
  'rgb(255, 214, 163)',
  'rgb(253, 255, 184)',
  'rgb(200, 255, 189)',
  'rgb(153, 246, 255)',
  'rgb(158, 195, 255)',
  'rgb(190, 179, 255)',
  'rgb(255, 199, 255)',
]

const sketch = (p5: P5) => {
  p5.windowResized = () => {
    p5.resizeCanvas(window.innerWidth, window.innerHeight)
  }

  p5.setup = () => {
    p5.createCanvas(window.innerWidth, window.innerHeight)
    p5.frameRate(60)

    p5.stroke(200)
    p5.noFill()
    p5.strokeWeight(2)
  }

  p5.draw = () => {
    p5.background(0);
    p5.translate(p5.width / 2, p5.height / 2)

    range(colours.length).forEach(i => {
      drawCircle(p5, colours[i], INITIAL_DIAMETER * (i + 1), INITIAL_SPEED * ((i + 1) * SPEED_MODIFIER))
    })
  }
}

new P5(sketch)


function drawCircle(p5: P5, colour: string, diameter: number, speed: number) {
  p5.circle(0, 0, diameter)


  const xTrans = p5.sin(p5.millis() * speed)
  const yTrans = -p5.cos(p5.millis() * speed)

  p5.push()

  const basicallyAtTop = xTrans > (-EPSILON * speed) && xTrans < (EPSILON * speed)
  const size = basicallyAtTop ? CIRCLE_SIZE * 2 : CIRCLE_SIZE

  p5.translate(xTrans * diameter/2, yTrans * diameter/2)
  p5.stroke(colour);
  p5.fill(colour);
  p5.circle(0, 0, size)

  p5.pop()

}
