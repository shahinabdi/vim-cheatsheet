import { CommandType } from '../types';

interface CommandItemProps {
  command: CommandType;
}

const CommandItem = ({ command }: CommandItemProps) => (
  <div className="flex items-center justify-between p-3 bg-gray-700/50 rounded-lg hover:bg-gray-700/70 transition-colors duration-200">
    <code className="bg-gray-900 text-blue-300 px-3 py-1 rounded font-mono text-sm font-semibold">
      {command.key}
    </code>
    <span className="text-gray-300 flex-1 ml-4">{command.desc}</span>
  </div>
);

export default CommandItem;