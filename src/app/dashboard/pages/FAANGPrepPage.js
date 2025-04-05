"use client";

import React from 'react';

const companies = [
  {
    name: 'Meta',
    icon: 'M',
    color: 'bg-blue-600',
    description: 'Formerly Facebook, leading in social media and virtual reality'
  },
  {
    name: 'Amazon',
    icon: 'A',
    color: 'bg-yellow-500',
    description: 'E-commerce giant and cloud computing leader'
  },
  {
    name: 'Apple',
    icon: 'A',
    color: 'bg-gray-800',
    description: 'Innovator in consumer electronics and software'
  },
  {
    name: 'Netflix',
    icon: 'N',
    color: 'bg-red-600',
    description: 'Streaming entertainment pioneer'
  },
  {
    name: 'Google',
    icon: 'G',
    color: 'bg-green-500',
    description: 'Search engine leader and technology innovator'
  }
];

export default function FAANGPrepPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
        FAANG Company Preparation
      </h1>
      <p className="text-gray-600 dark:text-gray-300">
        Prepare for interviews at top tech companies with our specialized resources.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {companies.map((company) => (
          <div
            key={company.name}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6"
          >
            <div className="flex items-center space-x-4 mb-4">
              <div className={`${company.color} p-3 rounded-xl text-white font-bold text-xl`}>
                {company.icon}
              </div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                {company.name}
              </h2>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              {company.description}
            </p>
            <div className="space-y-2">
              <button
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300"
                onClick={() => window.open(`https://www.${company.name.toLowerCase()}.com/careers`, '_blank')}
              >
                View Careers
              </button>
              <button
                className="w-full bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 font-medium py-2 px-4 rounded-lg transition-colors duration-300"
                onClick={() => window.open(`https://www.${company.name.toLowerCase()}.com/interview-prep`, '_blank')}
              >
                Interview Resources
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 