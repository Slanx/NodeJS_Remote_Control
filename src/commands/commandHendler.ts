import { isCommand, commands } from './commands';

export const commandHendler = async (commandLine: string) => {
  const [command, ...args] = commandLine.split(' ');

  const [arg1, arg2] = args.map((item) => +item);

  if (isCommand(command)) {
    return commands[command](arg1, arg2);
  }
  return null;
};

export default commandHendler;
