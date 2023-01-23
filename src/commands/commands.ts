import { moveMouse, getMousePosistion } from './mouse';
import { drawCircle, drawRectangle, drawSquare } from './draw';
import { printScreen } from './printScreen';

export const commands = {
  mouse_right: moveMouse.bind(null, 'mouse_right'),
  mouse_left: moveMouse.bind(null, 'mouse_left'),
  mouse_up: moveMouse.bind(null, 'mouse_up'),
  mouse_down: moveMouse.bind(null, 'mouse_down'),
  mouse_position: getMousePosistion,
  draw_circle: drawCircle,
  draw_square: drawSquare,
  draw_rectangle: drawRectangle,
  prnt_scrn: printScreen,
};

type TypeCommand = keyof typeof commands;

export function isCommand(term: string): term is TypeCommand {
  return term in commands;
}
