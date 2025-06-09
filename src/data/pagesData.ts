import React from 'react';
import { Command, Settings, Search, File, Code, Zap, BookOpen } from 'lucide-react';

export interface CommandType {
  key: string;
  desc: string;
}

export interface SectionType {
  title: string;
  commands: CommandType[];
}

export interface PageType {
  title: string;
  icon: React.ReactNode;
  color: string;
  sections: SectionType[];
}

export const pagesData: PageType[] = [
  {
    title: "Navigation & Movement",
    icon: React.createElement(Command, { size: 24 }),
    color: "from-blue-500 to-blue-600",
    sections: [
      {
        title: "Advanced Movement (Native)",
        commands: [
          { key: "Ctrl+f / Ctrl+b", desc: "Page forward/backward" },
          { key: "Ctrl+d / Ctrl+u", desc: "Half page down/up" },
          { key: "{ / }", desc: "Jump between paragraphs/functions" },
          { key: "%", desc: "Jump to matching bracket/parenthesis" },
          { key: "* / #", desc: "Search current word forward/backward" },
          { key: "gf", desc: "Go to file under cursor" },
          { key: "Ctrl+o / Ctrl+i", desc: "Jump back/forward in jump list" },
          { key: "ma", desc: "Mark position as 'a', 'a to return" }
        ]
      }
    ]
  },
  {
    title: "Text Objects & Motions",
    icon: React.createElement(BookOpen, { size: 24 }),
    color: "from-green-500 to-green-600",
    sections: [
      {
        title: "Text Objects (Native)",
        commands: [
          { key: "ci\"", desc: "Change inside quotes" },
          { key: "ci(", desc: "Change inside parentheses" },
          { key: "ci{", desc: "Change inside braces" },
          { key: "daw", desc: "Delete a word (including spaces)" },
          { key: "diw", desc: "Delete inner word" },
          { key: "ca{", desc: "Change around braces (including braces)" },
          { key: "yi(", desc: "Yank inside parentheses" },
          { key: "va\"", desc: "Visual select around quotes" }
        ]
      }
    ]
  },
  {
    title: "Search & Replace",
    icon: React.createElement(Search, { size: 24 }),
    color: "from-purple-500 to-purple-600",
    sections: [
      {
        title: "Advanced Search (Native)",
        commands: [
          { key: "/pattern", desc: "Search forward" },
          { key: "?pattern", desc: "Search backward" },
          { key: ":%s/old/new/g", desc: "Replace all occurrences" },
          { key: ":%s/old/new/gc", desc: "Replace with confirmation" },
          { key: ":noh", desc: "Clear search highlighting" },
          { key: "n / N", desc: "Next/previous search result" }
        ]
      }
    ]
  },
  {
    title: "Buffers & Windows",
    icon: React.createElement(File, { size: 24 }),
    color: "from-orange-500 to-orange-600",
    sections: [
      {
        title: "Buffer Management (Native)",
        commands: [
          { key: ":e filename", desc: "Open file in buffer" },
          { key: ":ls", desc: "List all buffers" },
          { key: ":b number", desc: "Switch to buffer number" },
          { key: ":bd", desc: "Delete current buffer" }
        ]
      },
      {
        title: "Window Management (Native)",
        commands: [
          { key: "Ctrl+w s", desc: "Split window horizontally" },
          { key: "Ctrl+w v", desc: "Split window vertically" },
          { key: "Ctrl+w c", desc: "Close current window" },
          { key: "Ctrl+w o", desc: "Close all other windows" }
        ]
      }
    ]
  },
  {
    title: "NERDTree File Explorer",
    icon: React.createElement(File, { size: 24 }),
    color: "from-red-500 to-red-600",
    sections: [
      {
        title: "File Navigation (Plugin)",
        commands: [
          { key: "Ctrl+n", desc: "Toggle NERDTree" },
          { key: "o", desc: "Open file/folder" },
          { key: "t", desc: "Open in new tab" },
          { key: "i", desc: "Open in horizontal split" },
          { key: "s", desc: "Open in vertical split" },
          { key: "m", desc: "Show menu (create/delete/rename)" },
          { key: "r", desc: "Refresh current directory" },
          { key: "R", desc: "Refresh root directory" }
        ]
      }
    ]
  },
  {
    title: "CtrlP Fuzzy Finder",
    icon: React.createElement(Search, { size: 24 }),
    color: "from-indigo-500 to-indigo-600",
    sections: [
      {
        title: "File Finding (Plugin)",
        commands: [
          { key: "Ctrl+p", desc: "Open CtrlP finder" },
          { key: "Ctrl+j / Ctrl+k", desc: "Navigate up/down in results" },
          { key: "Ctrl+t", desc: "Open in new tab" },
          { key: "Ctrl+v", desc: "Open in vertical split" },
          { key: "Ctrl+x", desc: "Open in horizontal split" },
          { key: "Ctrl+z", desc: "Mark/unmark files" }
        ]
      }
    ]
  },
  {
    title: "Language Server (LSP)",
    icon: React.createElement(Code, { size: 24 }),
    color: "from-teal-500 to-teal-600",
    sections: [
      {
        title: "Code Intelligence (Plugin)",
        commands: [
          { key: ":LspDefinition", desc: "Go to definition" },
          { key: ":LspReferences", desc: "Find references" },
          { key: ":LspHover", desc: "Show documentation" },
          { key: ":LspRename", desc: "Rename symbol" },
          { key: ":LspDocumentDiagnostics", desc: "Show errors/warnings" }
        ]
      },
      {
        title: "Autocompletion (Plugin)",
        commands: [
          { key: "Ctrl+n", desc: "Next completion (in insert mode)" },
          { key: "Ctrl+p", desc: "Previous completion (in insert mode)" }
        ]
      }
    ]
  },
  {
    title: "C IDE Custom Mappings",
    icon: React.createElement(Settings, { size: 24 }),
    color: "from-pink-500 to-pink-600",
    sections: [
      {
        title: "Leader Key Shortcuts (Custom)",
        commands: [
          { key: ",w", desc: "Quick save (Leader + w)" },
          { key: ",q", desc: "Quick quit (Leader + q)" },
          { key: ",cf", desc: "Format code with clang-format" },
          { key: ",bn / ,bp", desc: "Next/Previous buffer" }
        ]
      },
      {
        title: "Development Shortcuts (Custom)",
        commands: [
          { key: "Ctrl+h/j/k/l", desc: "Navigate between splits" },
          { key: "F5", desc: "Compile and run current file" },
          { key: "F6", desc: "Compile with debug info" },
          { key: "gcc", desc: "Comment/uncomment line (Commentary)" }
        ]
      }
    ]
  },
  {
    title: "Advanced Features",
    icon: React.createElement(Zap, { size: 24 }),
    color: "from-yellow-500 to-yellow-600",
    sections: [
      {
        title: "Macros & Registers (Native)",
        commands: [
          { key: "qa...q", desc: "Record macro 'a', then @a to play" },
          { key: "\"ayy", desc: "Yank line to register 'a'" },
          { key: "\"ap", desc: "Paste from register 'a'" },
          { key: ":reg", desc: "Show all registers" },
          { key: "\"0p", desc: "Paste from yank register (not delete)" }
        ]
      },
      {
        title: "Marks & Folding (Native)",
        commands: [
          { key: "m{a-z}", desc: "Set local mark" },
          { key: "m{A-Z}", desc: "Set global mark (across files)" },
          { key: "'{a-z}", desc: "Jump to mark" },
          { key: "''", desc: "Jump to last position" },
          { key: "zf{motion}", desc: "Create fold" },
          { key: "za", desc: "Toggle fold" },
          { key: "zo", desc: "Open fold" },
          { key: "zc", desc: "Close fold" },
          { key: "zR", desc: "Open all folds" },
          { key: "zM", desc: "Close all folds" }
        ]
      }
    ]
  },
  {
    title: "Quick Commands",
    icon: React.createElement(Command, { size: 24 }),
    color: "from-gray-500 to-gray-600",
    sections: [
      {
        title: "Help & Plugin Management",
        commands: [
          { key: ":h keyword", desc: "Help for keyword" },
          { key: ":version", desc: "Show Vim version" },
          { key: ":PlugStatus", desc: "Check plugin status" },
          { key: ":PlugUpdate", desc: "Update all plugins" },
          { key: ":checkhealth", desc: "Check system health (Vim 8+)" }
        ]
      },
      {
        title: "Error Navigation & File Operations",
        commands: [
          { key: ":make", desc: "Run make command" },
          { key: ":copen", desc: "Open quickfix window" },
          { key: ":cclose", desc: "Close quickfix window" },
          { key: ":cnext / :cprev", desc: "Next/Previous error" },
          { key: ":cn / :cp", desc: "Next/Previous error (short)" },
          { key: ":wa", desc: "Write all files" },
          { key: ":qa", desc: "Quit all files" },
          { key: ":args *.c", desc: "Add all .c files to argument list" },
          { key: ":argdo %s/old/new/g", desc: "Replace in all files" },
          { key: ":bufdo %s/old/new/g", desc: "Replace in all buffers" }
        ]
      },
      {
        title: "Multi-file Operations & Debugging",
        commands: [
          { key: ":vert diffsplit file2", desc: "Compare with another file" },
          { key: "]c / [c", desc: "Next/Previous difference" },
          { key: ":diffget", desc: "Get change from other file" },
          { key: ":diffput", desc: "Put change to other file" },
          { key: ":marks", desc: "Show all marks" }
        ]
      }
    ]
  }
];