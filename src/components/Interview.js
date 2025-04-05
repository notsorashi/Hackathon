import React, { useState } from 'react';

const Interview = () => {
  const [interviewType, setInterviewType] = useState('');
  const [difficulty, setDifficulty] = useState('');
  const [currentQuestion, setCurrentQuestion] = useState('');
  const [userAnswer, setUserAnswer] = useState('');
  const [isRecording, setIsRecording] = useState(false);
  const [aiFeedback, setAiFeedback] = useState('');
  const [interviewStarted, setInterviewStarted] = useState(false);
  const [interviewCompleted, setInterviewCompleted] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [totalQuestions, setTotalQuestions] = useState(10);
  const [pastInterviews, setPastInterviews] = useState([
    { date: '2024-03-20', type: 'Technical', score: 82, status: 'Completed' },
    { date: '2024-03-15', type: 'HR', score: 90, status: 'Completed' }
  ]);

  const interviewTypes = [
    { id: 'hr', label: 'HR Interview', icon: '👥', color: 'from-pink-500 to-purple-500' },
    { id: 'technical', label: 'Technical Interview', icon: '💻', color: 'from-blue-500 to-cyan-500' },
    { id: 'behavioral', label: 'Behavioral Interview', icon: '🤝', color: 'from-green-500 to-teal-500' },
    { id: 'case-study', label: 'Case Study', icon: '📊', color: 'from-orange-500 to-amber-500' },
  ];

  const difficultyLevels = [
    { id: 'beginner', label: 'Beginner', description: 'Basic concepts and common questions', color: 'from-green-400 to-emerald-400' },
    { id: 'intermediate', label: 'Intermediate', description: 'Complex scenarios and detailed analysis', color: 'from-blue-400 to-indigo-400' },
    { id: 'advanced', label: 'Advanced', description: 'Expert-level questions and system design', color: 'from-orange-400 to-red-400' },
  ];

  const startInterview = () => {
    if (interviewType && difficulty) {
      setInterviewStarted(true);
      // Here you would integrate with Gemini AI to generate questions
      setCurrentQuestion("Tell me about a challenging project you've worked on and how you overcame obstacles.");
    }
  };

  const handleAnswerSubmit = () => {
    // Here you would integrate with Gemini AI for feedback
    setAiFeedback("Your answer demonstrates good problem-solving skills. Consider adding more specific examples and metrics to strengthen your response.");
    
    // For demo purposes, increase question index to show progress
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setUserAnswer('');
      // Here you would get next question
    } else {
      setInterviewCompleted(true);
    }
  };

  const toggleRecording = () => {
    setIsRecording(!isRecording);
    // Here you would implement voice recording functionality
  };

  const downloadReport = () => {
    // Here you would implement PDF report generation
    console.log('Downloading report...');
  };

  const startNewInterview = () => {
    setInterviewType('');
    setDifficulty('');
    setCurrentQuestion('');
    setUserAnswer('');
    setAiFeedback('');
    setInterviewStarted(false);
    setInterviewCompleted(false);
    setCurrentQuestionIndex(0);
  };

  return (
    <div className="space-y-6 max-w-5xl mx-auto px-4">
      {/* Header with icon */}
      <div className="flex items-center space-x-3 mb-6">
        <div className="p-3 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-lg shadow-lg">
          <span className="text-white text-2xl">🎯</span>
        </div>
        <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600">Mock Interview</h1>
      </div>

      {/* Past Interviews Section */}
      {!interviewStarted && !interviewCompleted && pastInterviews.length > 0 && (
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-6 mb-8 border border-gray-100 dark:border-gray-700">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200">Past Interviews</h2>
            <button className="text-purple-600 dark:text-purple-400 text-sm font-medium hover:underline">
              View All
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left text-sm text-gray-500 dark:text-gray-400 border-b border-gray-200 dark:border-gray-700">
                  <th className="pb-3 font-medium">Date</th>
                  <th className="pb-3 font-medium">Type</th>
                  <th className="pb-3 font-medium">Score</th>
                  <th className="pb-3 font-medium">Status</th>
                  <th className="pb-3 font-medium">Action</th>
                </tr>
              </thead>
              <tbody>
                {pastInterviews.map((interview, index) => (
                  <tr 
                    key={index} 
                    className="border-b border-gray-100 dark:border-gray-700 hover:bg-gradient-to-r hover:from-purple-600 hover:to-indigo-600 transition-all duration-300 group"
                  >
                    <td className="py-3 text-sm group-hover:text-white">{interview.date}</td>
                    <td className="py-3 text-sm group-hover:text-white">{interview.type}</td>
                    <td className="py-3 text-sm group-hover:text-white">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium transition-colors duration-300 group-hover:bg-white group-hover:bg-opacity-20 group-hover:text-white ${
                        interview.score >= 90 ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' :
                        interview.score >= 75 ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400' :
                        'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400'
                      }`}>
                        {interview.score}%
                      </span>
                    </td>
                    <td className="py-3 text-sm group-hover:text-white">
                      <span className="px-2 py-1 rounded-full bg-gray-100 dark:bg-gray-700 text-xs font-medium transition-colors duration-300 group-hover:bg-white group-hover:bg-opacity-20 group-hover:text-white">
                        {interview.status}
                      </span>
                    </td>
                    <td className="py-3 text-sm">
                      <button className="text-purple-600 dark:text-purple-400 hover:underline text-sm font-medium transition-colors duration-300 group-hover:text-white">
                        Review
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Interview Setup */}
      {!interviewStarted && !interviewCompleted && (
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-6 border border-gray-100 dark:border-gray-700">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200">Start New Interview</h2>
            <div className="px-3 py-1 bg-purple-100 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300 text-sm font-medium rounded-full">
              Quick Setup
            </div>
          </div>
          
          {/* Interview Type Selection */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">Select Interview Type</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {interviewTypes.map((type) => (
                <button
                  key={type.id}
                  onClick={() => setInterviewType(type.id)}
                  className={`group p-5 rounded-xl border transition-all duration-300 transform hover:shadow-md ${
                    interviewType === type.id
                      ? `border-0 bg-gradient-to-br ${type.color} shadow-md`
                      : 'border-gray-200 dark:border-gray-700 hover:-translate-y-1'
                  }`}
                >
                  <div className="flex flex-col items-center text-center">
                    <div className={`text-3xl mb-3 transition-transform duration-300 group-hover:scale-110 ${
                      interviewType === type.id ? 'text-white' : ''
                    }`}>
                      {type.icon}
                    </div>
                    <span className={`font-medium transition-colors ${
                      interviewType === type.id ? 'text-white' : 'text-gray-800 dark:text-gray-200'
                    }`}>
                      {type.label}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Difficulty Level Selection */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">Choose Difficulty Level</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {difficultyLevels.map((level) => (
                <button
                  key={level.id}
                  onClick={() => setDifficulty(level.id)}
                  className={`group p-5 rounded-xl transition-all duration-300 transform hover:shadow-md ${
                    difficulty === level.id
                      ? `border-0 bg-gradient-to-br ${level.color} shadow-md`
                      : 'border border-gray-200 dark:border-gray-700 hover:-translate-y-1'
                  }`}
                >
                  <div className="flex flex-col items-start">
                    <span className={`font-medium text-lg mb-1 transition-colors ${
                      difficulty === level.id ? 'text-white' : 'text-gray-800 dark:text-gray-200'
                    }`}>
                      {level.label}
                    </span>
                    <span className={`text-sm transition-colors ${
                      difficulty === level.id ? 'text-white text-opacity-90' : 'text-gray-600 dark:text-gray-400'
                    }`}>
                      {level.description}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Start Button */}
          <button
            onClick={startInterview}
            disabled={!interviewType || !difficulty}
            className={`w-full py-4 px-6 rounded-xl text-lg font-medium transition-all duration-300 transform ${
              interviewType && difficulty
                ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg hover:shadow-xl hover:-translate-y-1'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400 cursor-not-allowed'
            }`}
          >
            {interviewType && difficulty ? 'Start Interview Session' : 'Select Options to Continue'}
          </button>
        </div>
      )}

      {/* Interview Session */}
      {interviewStarted && !interviewCompleted && (
        <div className="space-y-6">
          {/* Progress Bar */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-6 border border-gray-100 dark:border-gray-700">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-medium text-gray-700 dark:text-gray-300">Interview Progress</h3>
              <span className="text-sm font-medium text-purple-600 dark:text-purple-400">
                Question {currentQuestionIndex + 1} of {totalQuestions}
              </span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
              <div 
                className="bg-gradient-to-r from-purple-600 to-indigo-600 h-3 rounded-full transition-all duration-500"
                style={{ width: `${((currentQuestionIndex + 1) / totalQuestions) * 100}%` }}
              />
            </div>
          </div>

          {/* Question Display */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-6 border border-gray-100 dark:border-gray-700">
            <div className="flex items-center space-x-3 mb-4">
              <div className="p-2 bg-purple-100 dark:bg-purple-900/20 rounded-lg">
                <span className="text-purple-600 dark:text-purple-400 text-xl">❓</span>
              </div>
              <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200">Current Question</h2>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-900/10 dark:to-indigo-900/10 rounded-xl p-6 mb-6 border border-purple-100 dark:border-purple-900/20">
              <p className="text-lg text-gray-800 dark:text-gray-200">{currentQuestion}</p>
            </div>

            {/* Timer */}
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Time Remaining</span>
              <span className="px-3 py-1 bg-orange-100 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400 rounded-full text-sm font-medium">
                02:45
              </span>
            </div>

            {/* Answer Input */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-blue-100 dark:bg-blue-900/20 rounded-lg">
                  <span className="text-blue-600 dark:text-blue-400 text-xl">✏️</span>
                </div>
                <h3 className="font-medium text-gray-800 dark:text-gray-200">Your Answer</h3>
              </div>
              
              <div className="flex space-x-4">
                <textarea
                  value={userAnswer}
                  onChange={(e) => setUserAnswer(e.target.value)}
                  placeholder="Type your answer here..."
                  className="flex-1 p-4 border border-gray-200 dark:border-gray-700 rounded-xl resize-none focus:ring-2 focus:ring-purple-500 focus:border-transparent dark:bg-gray-800 dark:text-gray-200 transition-all"
                  rows={5}
                />
                <button
                  onClick={toggleRecording}
                  className={`p-4 rounded-xl flex items-center justify-center transition-all duration-300 ${
                    isRecording
                      ? 'bg-gradient-to-r from-red-500 to-pink-500 text-white animate-pulse'
                      : 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:shadow-lg'
                  }`}
                >
                  <span className="text-2xl">{isRecording ? '⏹️' : '🎤'}</span>
                </button>
              </div>
              
              <button
                onClick={handleAnswerSubmit}
                disabled={!userAnswer.trim()}
                className={`w-full py-3 px-4 rounded-xl font-medium transition-all duration-300 ${
                  userAnswer.trim()
                    ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white hover:shadow-lg transform hover:-translate-y-1'
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-500 cursor-not-allowed'
                }`}
              >
                Submit Answer & Continue
              </button>
            </div>
          </div>

          {/* AI Feedback */}
          {aiFeedback && (
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-6 border border-gray-100 dark:border-gray-700">
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2 bg-green-100 dark:bg-green-900/20 rounded-lg">
                  <span className="text-green-600 dark:text-green-400 text-xl">🤖</span>
                </div>
                <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200">AI Feedback</h2>
              </div>
              
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/10 dark:to-cyan-900/10 rounded-xl p-6 border border-blue-100 dark:border-blue-900/20">
                <p className="text-gray-800 dark:text-gray-200">{aiFeedback}</p>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Interview Summary */}
      {interviewCompleted && (
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-6 border border-gray-100 dark:border-gray-700">
          <div className="mb-8 text-center">
            <div className="inline-block p-3 bg-green-100 dark:bg-green-900/20 rounded-full mb-4">
              <span className="text-green-600 dark:text-green-400 text-4xl">🎉</span>
            </div>
            <h1 className="text-3xl font-bold mb-2 text-gray-800 dark:text-gray-200">Interview Completed!</h1>
            <p className="text-gray-600 dark:text-gray-400">Great job! Here's your performance breakdown.</p>
          </div>
          
          {/* Score Breakdown */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-900/10 dark:to-indigo-900/10 rounded-xl p-6 border border-purple-100 dark:border-purple-900/20 transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="flex flex-col items-center text-center">
                <div className="p-3 mb-3 bg-white dark:bg-gray-800 rounded-full shadow-md">
                  <span className="text-purple-600 dark:text-purple-400 text-xl">🏆</span>
                </div>
                <h3 className="font-semibold mb-2 text-gray-800 dark:text-gray-200">Overall Score</h3>
                <p className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600">85%</p>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/10 dark:to-cyan-900/10 rounded-xl p-6 border border-blue-100 dark:border-blue-900/20 transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="flex flex-col items-center text-center">
                <div className="p-3 mb-3 bg-white dark:bg-gray-800 rounded-full shadow-md">
                  <span className="text-blue-600 dark:text-blue-400 text-xl">✅</span>
                </div>
                <h3 className="font-semibold mb-2 text-gray-800 dark:text-gray-200">Questions Answered</h3>
                <p className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-600">8/10</p>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-teal-50 dark:from-green-900/10 dark:to-teal-900/10 rounded-xl p-6 border border-green-100 dark:border-green-900/20 transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="flex flex-col items-center text-center">
                <div className="p-3 mb-3 bg-white dark:bg-gray-800 rounded-full shadow-md">
                  <span className="text-green-600 dark:text-green-400 text-xl">⏱️</span>
                </div>
                <h3 className="font-semibold mb-2 text-gray-800 dark:text-gray-200">Time Taken</h3>
                <p className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-teal-600">45m</p>
              </div>
            </div>
          </div>

          {/* Detailed Analysis */}
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-200">Performance Breakdown</h2>
            <div className="space-y-6">
              <div className="bg-white dark:bg-gray-700 rounded-xl p-4 shadow-sm border border-gray-100 dark:border-gray-600">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-blue-100 dark:bg-blue-900/20 rounded-lg">
                      <span className="text-blue-600 dark:text-blue-400 text-sm">💡</span>
                    </div>
                    <span className="font-medium text-gray-800 dark:text-gray-200">Technical Knowledge</span>
                  </div>
                  <span className="font-bold text-gray-800 dark:text-gray-200">85%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-3">
                  <div className="bg-gradient-to-r from-blue-500 to-indigo-500 h-3 rounded-full" style={{ width: '85%' }} />
                </div>
              </div>
              
              <div className="bg-white dark:bg-gray-700 rounded-xl p-4 shadow-sm border border-gray-100 dark:border-gray-600">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-green-100 dark:bg-green-900/20 rounded-lg">
                      <span className="text-green-600 dark:text-green-400 text-sm">🧩</span>
                    </div>
                    <span className="font-medium text-gray-800 dark:text-gray-200">Problem Solving</span>
                  </div>
                  <span className="font-bold text-gray-800 dark:text-gray-200">90%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-3">
                  <div className="bg-gradient-to-r from-green-500 to-emerald-500 h-3 rounded-full" style={{ width: '90%' }} />
                </div>
              </div>
              
              <div className="bg-white dark:bg-gray-700 rounded-xl p-4 shadow-sm border border-gray-100 dark:border-gray-600">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-yellow-100 dark:bg-yellow-900/20 rounded-lg">
                      <span className="text-yellow-600 dark:text-yellow-400 text-sm">💬</span>
                    </div>
                    <span className="font-medium text-gray-800 dark:text-gray-200">Communication</span>
                  </div>
                  <span className="font-bold text-gray-800 dark:text-gray-200">75%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-3">
                  <div className="bg-gradient-to-r from-yellow-500 to-amber-500 h-3 rounded-full" style={{ width: '75%' }} />
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <button
              onClick={downloadReport}
              className="py-4 px-6 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 font-medium flex items-center justify-center space-x-3"
            >
              <span className="text-xl">📄</span>
              <span>Download Full Report</span>
            </button>
            
            <button
              onClick={startNewInterview}
              className="py-4 px-6 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-xl transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 font-medium flex items-center justify-center space-x-3"
            >
              <span className="text-xl">🔄</span>
              <span>Start New Interview</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Interview;