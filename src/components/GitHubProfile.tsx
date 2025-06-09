import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const GitHubProfile: React.FC = () => (
  <div className="mt-12 bg-gray-800/30 backdrop-blur-sm rounded-xl border border-gray-700 p-6">
    <div className="text-center">
      <div className="flex items-center justify-center gap-3 mb-4">
        <Github size={24} className="text-gray-400" />
        <h3 className="text-xl font-semibold text-gray-300">Created by Shahin Abdi</h3>
      </div>
      
      <div className="flex flex-wrap justify-center gap-4 mb-6">
        <a 
          href="https://github.com/shahinabdi" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors duration-200 text-gray-300 hover:text-white"
        >
          <Github size={16} />
          <span>@shahinabdi</span>
          <ExternalLink size={14} />
        </a>
      </div>

      {/* Contribution Section */}
      <div className="mb-6">
        <h4 className="text-lg font-medium text-gray-300 mb-3">🤝 Contributions Welcome!</h4>
        <div className="bg-gray-700/30 rounded-lg p-4 mb-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs text-gray-300">
            <div className="space-y-1">
              <p>• Add new Vim commands or plugins</p>
              <p>• Improve existing descriptions</p>
              <p>• Create language-specific cheatsheets</p>
            </div>
            <div className="space-y-1">
              <p>• Develop Vim plugin integrations</p>
              <p>• Enhance UI/UX design</p>
              <p>• Report bugs or suggest features</p>
            </div>
          </div>
        </div>
        
        <div className="flex flex-wrap justify-center gap-3 mb-4">
          <a 
            href="https://github.com/shahinabdi/vim-cheatsheet" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-1 px-3 py-2 bg-blue-600/20 hover:bg-blue-600/30 rounded-md text-blue-300 hover:text-blue-200 text-sm transition-colors duration-200"
          >
            ⭐ Star Project <ExternalLink size={12} />
          </a>
          <a 
            href="https://github.com/shahinabdi/vim-cheatsheet/issues" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-1 px-3 py-2 bg-green-600/20 hover:bg-green-600/30 rounded-md text-green-300 hover:text-green-200 text-sm transition-colors duration-200"
          >
            🐛 Report Issues <ExternalLink size={12} />
          </a>
          <a 
            href="https://github.com/shahinabdi/vim-cheatsheet/fork" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-1 px-3 py-2 bg-purple-600/20 hover:bg-purple-600/30 rounded-md text-purple-300 hover:text-purple-200 text-sm transition-colors duration-200"
          >
            🍴 Fork & Contribute <ExternalLink size={12} />
          </a>
        </div>
        
        <p className="text-xs text-gray-400 mb-3">
          <strong>How to contribute:</strong> Fork → Branch → Commit → Push → Pull Request
        </p>
      </div>

      {/* Vim Config Project */}
      <div className="mb-6">
        <h4 className="text-lg font-medium text-gray-300 mb-3">⚙️ Vim C IDE Configuration</h4>
        <div className="bg-gray-700/30 rounded-lg p-4 mb-4">
          <p className="text-sm text-gray-300 mb-3">
            Transform your Vim into a powerful C development environment with LSP, autocompletion, and modern IDE features.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a 
              href="https://github.com/shahinabdi/vim-c-ide-config" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1 px-3 py-2 bg-orange-600/20 hover:bg-orange-600/30 rounded-md text-orange-300 hover:text-orange-200 text-sm transition-colors duration-200"
            >
              🛠️ Vim Config <ExternalLink size={12} />
            </a>
            <a 
              href="https://github.com/shahinabdi/vim-c-ide-config/releases" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1 px-3 py-2 bg-cyan-600/20 hover:bg-cyan-600/30 rounded-md text-cyan-300 hover:text-cyan-200 text-sm transition-colors duration-200"
            >
              📦 Download Setup <ExternalLink size={12} />
            </a>
          </div>
        </div>
      </div>

      {/* Resources Section */}
      <div className="mb-6">
        <h4 className="text-lg font-medium text-gray-300 mb-3">🛠️ Useful C Programming Resources</h4>
        <div className="flex flex-wrap justify-center gap-3">
          <a 
            href="https://github.com/oz123/awesome-c" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-1 px-3 py-1 bg-blue-600/20 hover:bg-blue-600/30 rounded-md text-blue-300 hover:text-blue-200 text-sm transition-colors duration-200"
          >
            Awesome C <ExternalLink size={12} />
          </a>
          <a 
            href="https://github.com/microsoft/vscode-cpptools" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-1 px-3 py-1 bg-green-600/20 hover:bg-green-600/30 rounded-md text-green-300 hover:text-green-200 text-sm transition-colors duration-200"
          >
            VSCode C/C++ <ExternalLink size={12} />
          </a>
          <a 
            href="https://github.com/gcc-mirror/gcc/tree/master/gcc/plugins" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-1 px-3 py-1 bg-purple-600/20 hover:bg-purple-600/30 rounded-md text-purple-300 hover:text-purple-200 text-sm transition-colors duration-200"
          >
            GCC Plugins <ExternalLink size={12} />
          </a>
        </div>
      </div>

      {/* Footer */}
      <div className="text-sm text-gray-400">
        <p className="mb-2">
          💡 <strong>Join the community!</strong> Help make Vim accessible to everyone.
        </p>
        <p className="text-xs mb-2">
          Whether you're a beginner or expert, your contributions matter.
        </p>
        <p className="text-xs">
          Leader key is <code className="bg-gray-700 px-2 py-1 rounded text-yellow-300">,</code> (comma)
        </p>
      </div>
    </div>
  </div>
);

export default GitHubProfile;