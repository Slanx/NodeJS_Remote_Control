import { mouse } from '@nut-tree/nut-js';

export interface IMousePosition {
  axisX: number;
  axisY: number;
}

export const getMousePosistion = async () => {
  const axisX = (await mouse.getPosition()).x;
  const axisY = (await mouse.getPosition()).y;
  return `mouse_position ${axisX},${axisY}`;
};

export const moveMouse = async (route: string, mouseOffset: number) => {
  const position = await mouse.getPosition();
  let newPosition: IMousePosition;

  switch (route) {
    case 'mouse_right':
      newPosition = {
        axisX: position.x + mouseOffset,
        axisY: position.y,
      };
      break;
    case 'mouse_left':
      newPosition = {
        axisX: position.x - mouseOffset,
        axisY: position.y,
      };
      break;
    case 'mouse_up':
      newPosition = {
        axisX: position.x,
        axisY: position.y - mouseOffset,
      };
      break;
    case 'mouse_down':
      newPosition = {
        axisX: position.x,
        axisY: position.y + mouseOffset,
      };
      break;
    default:
      newPosition = {
        axisX: position.x,
        axisY: position.y,
      };
  }

  await mouse.move([{ x: newPosition.axisX, y: newPosition.axisY }]);

  return `${route}`;
};
