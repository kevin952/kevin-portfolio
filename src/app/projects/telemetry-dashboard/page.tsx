import Link from 'next/link';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';

export default function TelemetryDashboard() {
  return (
    <div className="pt-16 min-h-screen">
      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <Link
          href="/projects"
          className="inline-flex items-center text-slate-300 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Projects
        </Link>
      </div>

      {/* Project Header */}
      <section className="py-12 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Project Info */}
            <div>
              <div className="flex items-center gap-4 mb-6">
                <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm font-semibold border border-green-500/30">
                  Completed
                </span>
                <span className="text-slate-400 text-sm">2024</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                F1 Telemetry Dashboard
              </h1>
              
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                A real-time telemetry visualization system inspired by Formula 1 data analysis tools. 
                Built with React, WebSocket, and D3.js for high-performance data visualization.
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-3 mb-8">
                {['React', 'WebSocket', 'D3.js', 'TypeScript', 'Node.js', 'Redis'].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-slate-700/50 text-slate-300 text-sm rounded border border-slate-600"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://github.com/kevindsouza/telemetry-dashboard"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-slate-800 hover:bg-slate-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors border border-slate-600"
                >
                  <Github className="w-5 h-5 mr-2" />
                  View Code
                </a>
                <a
                  href="https://telemetry-dashboard-demo.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200"
                >
                  <ExternalLink className="w-5 h-5 mr-2" />
                  Live Demo
                </a>
              </div>
            </div>

            {/* Project Screenshot Placeholder */}
            <div className="flex justify-center lg:justify-end">
              <div className="w-full max-w-lg bg-slate-700 rounded-lg border border-slate-600 aspect-video flex items-center justify-center">
                <div className="text-slate-400 text-center">
                  <div className="text-4xl mb-2">📊</div>
                  <div className="text-lg font-semibold">Project Screenshot</div>
                  <div className="text-sm">Telemetry Dashboard Interface</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-20 bg-slate-800/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-white mb-8">Project Overview</h2>
              
              <div className="prose prose-lg prose-slate max-w-none">
                <p className="text-slate-300 text-lg leading-relaxed mb-6">
                  This project was born from my passion for Formula 1 and the incredible telemetry 
                  systems used in motorsport. I wanted to create a dashboard that could visualize 
                  real-time data with the same precision and clarity found in F1 engineering.
                </p>
                
                <p className="text-slate-300 text-lg leading-relaxed mb-6">
                  The system processes thousands of data points per second, displaying them through 
                  interactive charts, real-time graphs, and customizable widgets. Built with 
                  performance in mind, it handles high-frequency data updates without compromising 
                  user experience.
                </p>

                <h3 className="text-2xl font-bold text-white mb-4 mt-8">Key Features</h3>
                <ul className="text-slate-300 space-y-2 mb-8">
                  <li>• Real-time data streaming via WebSocket connections</li>
                  <li>• Interactive D3.js visualizations with smooth animations</li>
                  <li>• Customizable dashboard layouts and widgets</li>
                  <li>• Historical data analysis and trend visualization</li>
                  <li>• Mobile-responsive design for on-the-go monitoring</li>
                  <li>• Export functionality for data analysis</li>
                </ul>

                <h3 className="text-2xl font-bold text-white mb-4">Technical Implementation</h3>
                <p className="text-slate-300 text-lg leading-relaxed mb-4">
                  The frontend is built with React and TypeScript, using D3.js for advanced 
                  data visualization. Real-time data is handled through WebSocket connections, 
                  with Redis for caching and data buffering. The backend API is built with 
                  Node.js and Express, designed for high-throughput data processing.
                </p>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Project Stats */}
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700">
                <h3 className="text-xl font-bold text-white mb-4">Project Stats</h3>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-slate-300">Duration</span>
                    <span className="text-white font-semibold">3 months</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-300">Lines of Code</span>
                    <span className="text-white font-semibold">15,000+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-300">Performance</span>
                    <span className="text-green-400 font-semibold">&lt;50ms latency</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-300">Data Points/sec</span>
                    <span className="text-white font-semibold">10,000+</span>
                  </div>
                </div>
              </div>

              {/* Technologies Used */}
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700">
                <h3 className="text-xl font-bold text-white mb-4">Technologies</h3>
                <div className="space-y-3">
                  <div>
                    <div className="text-slate-300 text-sm mb-1">Frontend</div>
                    <div className="flex flex-wrap gap-2">
                      {['React', 'TypeScript', 'D3.js', 'Tailwind CSS'].map((tech) => (
                        <span key={tech} className="px-2 py-1 bg-slate-700/50 text-slate-300 text-xs rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <div className="text-slate-300 text-sm mb-1">Backend</div>
                    <div className="flex flex-wrap gap-2">
                      {['Node.js', 'Express', 'WebSocket', 'Redis'].map((tech) => (
                        <span key={tech} className="px-2 py-1 bg-slate-700/50 text-slate-300 text-xs rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Related Projects */}
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700">
                <h3 className="text-xl font-bold text-white mb-4">Related Projects</h3>
                <div className="space-y-3">
                  <Link
                    href="/projects/performance-monitor"
                    className="block text-slate-300 hover:text-yellow-400 transition-colors"
                  >
                    High-Performance Monitor
                  </Link>
                  <Link
                    href="/projects/data-pipeline"
                    className="block text-slate-300 hover:text-yellow-400 transition-colors"
                  >
                    Racing Data Pipeline
                  </Link>
                  <Link
                    href="/projects/visualization-suite"
                    className="block text-slate-300 hover:text-yellow-400 transition-colors"
                  >
                    Data Visualization Suite
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
