function setup() {
  createCanvas(710, 400, WEBGL);
  angleMode(DEGREES);
  strokeWeight(3);
  noFill();
  stroke(55, 65, 100);

  describe(
    'A sphere of geometric shapes with a soft cream background.'
  );
}

function draw() {
  background(238, 232, 220);

  orbitControl();

  for (let zAngle = 0; zAngle < 180; zAngle += 30) {
    for (let xAngle = 0; xAngle < 360; xAngle += 30) {
      push();

      rotateZ(zAngle);
      rotateX(xAngle);

      translate(0, 400, 0);

      // Only change the shapes on the two outermost rings
      if (zAngle === 0 || zAngle === 150) {
        cone(18, 30, 3);
      } else {
        // Keep the original cubes unchanged
        box();
      }

      pop();
    }
  }
}