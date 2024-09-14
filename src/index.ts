import P5 from 'p5'

const DIAMETER = 100
const SPEED = 0.002

const sketch = (p5: P5) => {
  p5.windowResized = () => {
    p5.resizeCanvas(window.innerWidth, window.innerHeight)
  }

  p5.setup = () => {
    p5.createCanvas(window.innerWidth, window.innerHeight)
    p5.frameRate(60)

    p5.stroke(255)
    p5.noFill()
    p5.strokeWeight(2)
  }

  p5.draw = () => {
    p5.background(0);
    p5.translate(p5.width / 2, p5.height / 2)

    p5.circle(0, 0, DIAMETER)


    const xTrans = p5.sin(p5.millis() * SPEED) * DIAMETER/2
    const yTrans = -p5.cos(p5.millis() * SPEED) * DIAMETER/2
    p5.translate(xTrans, yTrans)

    p5.push()
    p5.fill(255)
    p5.circle(0, 0, 20)
    p5.pop()
  }
}

new P5(sketch)
