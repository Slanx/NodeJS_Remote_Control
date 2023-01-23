import Jimp from 'jimp';
import { mouse, screen, Region } from '@nut-tree/nut-js';

export const printScreen = async () => {
  const { x, y } = await mouse.getPosition();
  const width = 200;
  const height = 200;

  const regionToGrab = new Region(x - 100, y - 100, width, height);
  const screenImage = await (await screen.grabRegion(regionToGrab)).toRGB();

  const image = new Jimp({ data: screenImage.data, width, height });

  const base64 = await image.getBase64Async('image/png');

  const formatedBase64 = base64.slice(base64.indexOf(',') + 1);

  return `prnt_scrn ${formatedBase64}`;
};

export default printScreen;
