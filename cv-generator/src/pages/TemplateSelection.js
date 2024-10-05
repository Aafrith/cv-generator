import React from 'react';

const TemplateSelection = () => {
  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 p-8">
      <h2 className="text-2xl font-bold mb-8">Select a CV Template</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="border p-4 rounded shadow-lg hover:bg-gray-200">
          <h3 className="text-lg font-bold">Template 1</h3>
          <button className="bg-blue-500 text-white p-2 rounded mt-4">
            Select
          </button>
        </div>
        {/* You can add more templates similarly */}
      </div>
    </div>
  );
};

export default TemplateSelection;
