import Link from "next/link";

export default function Home() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
        
        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white">
                <span className="block">Software Engineering</span>
                <span className="block bg-gradient-to-r from-red-600 to-yellow-500 bg-clip-text text-transparent">
                  at F1 Speed
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto">
                Like Red Bull Racing optimizes every millisecond on track, I engineer software 
                systems for peak performance, reliability, and precision.
              </p>
            </div>

            {/* Performance Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700">
                <div className="text-3xl font-bold text-red-500 mb-2">99.9%</div>
                <div className="text-slate-300">System Uptime</div>
              </div>
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700">
                <div className="text-3xl font-bold text-yellow-500 mb-2">&lt;100ms</div>
                <div className="text-slate-300">Response Time</div>
              </div>
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700">
                <div className="text-3xl font-bold text-green-500 mb-2">24/7</div>
                <div className="text-slate-300">Monitoring</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/projects"
                className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105"
              >
                View Projects
              </Link>
              <Link
                href="/about"
                className="border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-slate-900 px-8 py-3 rounded-lg font-semibold transition-all duration-200"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>

        {/* Telemetry Dashboard Placeholder */}
        <div className="absolute bottom-10 right-10 w-80 h-48 bg-slate-900/80 backdrop-blur-sm rounded-lg border border-slate-700 p-4 hidden lg:block">
          <div className="text-yellow-400 text-sm font-mono mb-2">TELEMETRY DASHBOARD</div>
          <div className="space-y-2">
            <div className="flex justify-between text-xs text-slate-300">
              <span>CPU Usage</span>
              <span className="text-green-400">45%</span>
            </div>
            <div className="w-full bg-slate-700 rounded-full h-1">
              <div className="bg-green-400 h-1 rounded-full" style={{width: '45%'}}></div>
            </div>
            <div className="flex justify-between text-xs text-slate-300">
              <span>Memory</span>
              <span className="text-yellow-400">78%</span>
            </div>
            <div className="w-full bg-slate-700 rounded-full h-1">
              <div className="bg-yellow-400 h-1 rounded-full" style={{width: '78%'}}></div>
            </div>
            <div className="flex justify-between text-xs text-slate-300">
              <span>Network</span>
              <span className="text-red-400">92%</span>
            </div>
            <div className="w-full bg-slate-700 rounded-full h-1">
              <div className="bg-red-400 h-1 rounded-full" style={{width: '92%'}}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Preview */}
      <section className="py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Engineering Excellence
            </h2>
            <p className="text-slate-300 text-lg">
              Technologies and methodologies that power high-performance systems
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {['C#', 'Python', 'Docker', 'Kubernetes', 'DevOps', 'Data Visualization', 'Next.js', 'TypeScript'].map((skill) => (
              <div key={skill} className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-4 text-center border border-slate-700 hover:border-yellow-500/50 transition-colors">
                <div className="text-white font-semibold">{skill}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
