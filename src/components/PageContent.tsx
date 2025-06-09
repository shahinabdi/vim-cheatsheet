import React from 'react';
import Section from './Section';

const PageContent = ({ page }) => (
  <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700 p-8 shadow-2xl">
    {/* Page Title */}
    <div className="flex items-center justify-center gap-3 mb-8">
      <div className={`p-3 rounded-lg bg-gradient-to-r ${page.color}`}>
        {page.icon}
      </div>
      <h2 className="text-3xl font-bold">{page.title}</h2>
    </div>

    {/* Command Sections */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {page.sections.map((section, sectionIndex) => (
        <Section key={sectionIndex} section={section} />
      ))}
    </div>
  </div>
);

export default PageContent;