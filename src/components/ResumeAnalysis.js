import React, { useState } from 'react';

const ResumeAnalysis = () => {
  const [isUploading, setIsUploading] = useState(false);
  const [analysis, setAnalysis] = useState(null);

  // Sample analysis data (replace with actual AI analysis)
  const sampleAnalysis = {
    overallScore: 85,
    sections: [
      {
        name: 'Summary',
        score: 90,
        feedback: 'Strong professional summary that highlights key skills and experience',
        suggestions: ['Add more quantifiable achievements', 'Include industry-specific keywords']
      },
      {
        name: 'Experience',
        score: 85,
        feedback: 'Good chronological layout with clear responsibilities',
        suggestions: ['Add more metrics and results', 'Include specific technologies used']
      },
      {
        name: 'Skills',
        score: 80,
        feedback: 'Well-organized skills section with relevant technical abilities',
        suggestions: ['Add proficiency levels', 'Include more soft skills']
      },
      {
        name: 'Education',
        score: 95,
        feedback: 'Clear education history with relevant certifications',
        suggestions: []
      }
    ],
    keywords: ['React', 'Node.js', 'TypeScript', 'AWS', 'MongoDB'],
    missingKeywords: ['Docker', 'Kubernetes', 'CI/CD'],
    improvements: [
      'Add more quantifiable achievements in experience section',
      'Include industry-specific keywords',
      'Add proficiency levels to skills',
      'Include more soft skills',
      'Add Docker and Kubernetes experience'
    ]
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setIsUploading(true);
      // Simulate file upload and analysis
      setTimeout(() => {
        setAnalysis(sampleAnalysis);
        setIsUploading(false);
      }, 2000);
    }
  };

  return (
    <div className="space-y-6">
      {/* Upload Section */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
        <h1 className="text-2xl font-bold mb-6">Resume Analysis</h1>
        
        <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-8 text-center">
          <div className="text-4xl mb-4">📄</div>
          <h2 className="text-xl font-semibold mb-2">Upload Your Resume</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Upload your resume in PDF or Word format for AI-powered analysis
          </p>
          <label className="inline-block">
            <input
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={handleFileUpload}
              className="hidden"
            />
            <span className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors cursor-pointer">
              {isUploading ? 'Analyzing...' : 'Choose File'}
            </span>
          </label>
        </div>
      </div>

      {/* Analysis Results */}
      {analysis && (
        <div className="space-y-6">
          {/* Overall Score */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold">Overall Score</h2>
              <div className="text-4xl font-bold text-purple-600">{analysis.overallScore}%</div>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-4">
              <div
                className="bg-purple-600 h-4 rounded-full"
                style={{ width: `${analysis.overallScore}%` }}
              />
            </div>
          </div>

          {/* Section Analysis */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {analysis.sections.map((section, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold">{section.name}</h3>
                  <span className="text-2xl font-bold text-purple-600">{section.score}%</span>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{section.feedback}</p>
                {section.suggestions.length > 0 && (
                  <div className="space-y-2">
                    <h4 className="font-medium">Suggestions:</h4>
                    <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-400">
                      {section.suggestions.map((suggestion, idx) => (
                        <li key={idx}>{suggestion}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Keywords Analysis */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Keywords Analysis</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-medium mb-2">Found Keywords</h3>
                <div className="flex flex-wrap gap-2">
                  {analysis.keywords.map((keyword, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm"
                    >
                      {keyword}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-medium mb-2">Missing Keywords</h3>
                <div className="flex flex-wrap gap-2">
                  {analysis.missingKeywords.map((keyword, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 rounded-full text-sm"
                    >
                      {keyword}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Improvement Suggestions */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Improvement Suggestions</h2>
            <div className="space-y-4">
              {analysis.improvements.map((improvement, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <span className="text-purple-600">•</span>
                  <p className="text-gray-600 dark:text-gray-400">{improvement}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-4">
            <button className="flex-1 py-3 px-4 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
              Download Analysis Report
            </button>
            <button className="flex-1 py-3 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Get AI Resume Builder
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ResumeAnalysis; 