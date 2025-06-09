import CommandItem from './CommandItem';
import { SectionType } from '../types';

interface SectionProps {
  section: SectionType;
}

const Section = ({ section }: SectionProps) => (
  <div className="space-y-4">
    <h3 className="text-xl font-semibold text-blue-300 border-b border-gray-600 pb-2">
      {section.title}
    </h3>
    <div className="space-y-3">
      {section.commands.map((command, commandIndex) => (
        <CommandItem key={commandIndex} command={command} />
      ))}
    </div>
  </div>
);

export default Section;