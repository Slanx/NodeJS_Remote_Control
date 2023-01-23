import { mouse, Button, Point } from '@nut-tree/nut-js';

export const drawCircle = async (radius: number) => {
  const point = await mouse.getPosition();

  const points = [];
  for (let i = 0; i < Math.PI * 2.0; i += 0.01) {
    const axisY = point.y + radius * Math.sin(i);
    const axisX = point.x + radius * Math.cos(i) - radius;

    const waypoint: Point = { x: axisX, y: axisY };

    points.push(waypoint);
  }

  await mouse.pressButton(Button.LEFT);

  await mouse.move(points);

  await mouse.releaseButton(Button.LEFT);

  return 'draw_circle';
};

export const drawRectangle = async (width: number, height: number) => {
  let { x, y } = await mouse.getPosition();

  const points = [];

  for (let i = 0; i <= height; i += 1) {
    y += 1;
    points.push({
      x,
      y,
    });
  }

  for (let i = 0; i <= width; i += 1) {
    x += 1;
    points.push({
      x,
      y,
    });
  }

  for (let i = 0; i <= height; i += 1) {
    y -= 1;
    points.push({
      x,
      y,
    });
  }

  for (let i = 0; i <= width; i += 1) {
    x -= 1;
    points.push({
      x,
      y,
    });
  }

  await mouse.pressButton(Button.LEFT);

  await mouse.move(points);

  await mouse.releaseButton(Button.LEFT);

  return 'draw_rectangle';
};

export const drawSquare = async (width: number) => {
  await drawRectangle(width, width);
  return 'draw_square';
};
