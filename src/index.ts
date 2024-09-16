import { range } from 'lodash'
import P5 from 'p5'
import { colours } from './colours'
import { drawCircle } from './drawCircle'
import { INITIAL_RADIUS } from './vars'

const sketch = (p5: P5) => {
  p5.windowResized = () => {
    p5.resizeCanvas(window.innerWidth, window.innerHeight)
  }

  p5.setup = () => {
    p5.createCanvas(window.innerWidth, window.innerHeight)
    p5.pixelDensity(1)

    p5.stroke(200)
    p5.noFill()
    p5.strokeWeight(2)
  }

  p5.draw = () => {
    p5.background(0);
    p5.translate(p5.width / 2, p5.height / 2)

    p5.push()
    p5.drawingContext.setLineDash([5]);
    p5.line(0, INITIAL_RADIUS, 0, INITIAL_RADIUS * colours.length);
    p5.line(0, -INITIAL_RADIUS, 0, -INITIAL_RADIUS * colours.length);
    p5.pop()


    range(colours.length).forEach(i => {
      drawCircle(p5, i)
    })
  }
}

new P5(sketch)
