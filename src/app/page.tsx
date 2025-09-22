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

      {/* Professional Experience - F1 Style */}
      <section className="py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              <span className="bg-gradient-to-r from-red-600 to-yellow-500 bg-clip-text text-transparent">
                Racing Career
              </span>
            </h2>
            <p className="text-slate-300 text-lg">
              High-performance engineering track record with precision and reliability
            </p>
          </div>
          
          {/* Experience Timeline */}
          <div className="space-y-8">
            {/* Current Role */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-8 border border-slate-700 hover:border-red-500/50 transition-colors">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Senior Software Engineer</h3>
                  <p className="text-yellow-400 font-semibold">Current Position</p>
                </div>
                <div className="text-slate-400 text-sm mt-2 md:mt-0">
                  <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-xs font-semibold border border-green-500/30">
                    ACTIVE
                  </span>
                </div>
              </div>
              <p className="text-slate-300 leading-relaxed mb-4">
                Leading high-performance software development with focus on system reliability, 
                real-time data processing, and scalable architecture. Specializing in C# backend 
                development, Python automation, and cloud infrastructure.
              </p>
              <div className="flex flex-wrap gap-2">
                {['C#', 'Python', 'Docker', 'Kubernetes', 'Azure', 'DevOps'].map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-slate-700/50 text-slate-300 text-sm rounded border border-slate-600">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Previous Experience */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700 hover:border-yellow-500/50 transition-colors">
                <h4 className="text-xl font-bold text-white mb-2">Software Engineer</h4>
                <p className="text-slate-400 text-sm mb-3">Previous Role</p>
                <p className="text-slate-300 text-sm leading-relaxed mb-4">
                  Developed and maintained enterprise applications with focus on performance 
                  optimization and data visualization.
                </p>
                <div className="flex flex-wrap gap-1">
                  {['ASP.NET', 'SQL Server', 'React', 'JavaScript'].map((tech) => (
                    <span key={tech} className="px-2 py-1 bg-slate-700/50 text-slate-300 text-xs rounded">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700 hover:border-yellow-500/50 transition-colors">
                <h4 className="text-xl font-bold text-white mb-2">Full Stack Developer</h4>
                <p className="text-slate-400 text-sm mb-3">Previous Role</p>
                <p className="text-slate-300 text-sm leading-relaxed mb-4">
                  Built end-to-end solutions with emphasis on user experience and system 
                  integration.
                </p>
                <div className="flex flex-wrap gap-1">
                  {['Node.js', 'PostgreSQL', 'Vue.js', 'AWS'].map((tech) => (
                    <span key={tech} className="px-2 py-1 bg-slate-700/50 text-slate-300 text-xs rounded">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Performance Metrics - F1 Style */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              <span className="bg-gradient-to-r from-red-600 to-yellow-500 bg-clip-text text-transparent">
                Performance Metrics
              </span>
            </h2>
            <p className="text-slate-300 text-lg">
              Engineering achievements and system performance indicators
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* System Reliability */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700 text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">99.9%</div>
              <div className="text-slate-300 font-semibold mb-2">System Uptime</div>
              <div className="text-slate-400 text-sm">Enterprise-grade reliability</div>
            </div>

            {/* Response Time */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700 text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">&lt;50ms</div>
              <div className="text-slate-300 font-semibold mb-2">Response Time</div>
              <div className="text-slate-400 text-sm">Sub-millisecond precision</div>
            </div>

            {/* Data Processing */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700 text-center">
              <div className="text-4xl font-bold text-red-400 mb-2">10K+</div>
              <div className="text-slate-300 font-semibold mb-2">Data Points/sec</div>
              <div className="text-slate-400 text-sm">Real-time processing</div>
            </div>

            {/* Projects Delivered */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700 text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">50+</div>
              <div className="text-slate-300 font-semibold mb-2">Projects</div>
              <div className="text-slate-400 text-sm">Successfully delivered</div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Skills - F1 Style */}
      <section className="py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              <span className="bg-gradient-to-r from-red-600 to-yellow-500 bg-clip-text text-transparent">
                Engineering Arsenal
              </span>
            </h2>
            <p className="text-slate-300 text-lg">
              Technologies and methodologies that power high-performance systems
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Backend Engineering */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700">
              <div className="text-2xl mb-4">⚙️</div>
              <h3 className="text-xl font-bold text-white mb-4">Backend Engineering</h3>
              <div className="space-y-2">
                {['C#', 'Python', 'Node.js', 'ASP.NET Core', 'FastAPI', 'REST APIs'].map((skill) => (
                  <div key={skill} className="flex items-center justify-between">
                    <span className="text-slate-300">{skill}</span>
                    <div className="w-16 bg-slate-700 rounded-full h-2">
                      <div className="bg-gradient-to-r from-red-600 to-yellow-500 h-2 rounded-full" style={{width: '90%'}}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* DevOps & Infrastructure */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700">
              <div className="text-2xl mb-4">🚀</div>
              <h3 className="text-xl font-bold text-white mb-4">DevOps & Infrastructure</h3>
              <div className="space-y-2">
                {['Docker', 'Kubernetes', 'Azure', 'AWS', 'Jenkins', 'Terraform'].map((skill) => (
                  <div key={skill} className="flex items-center justify-between">
                    <span className="text-slate-300">{skill}</span>
                    <div className="w-16 bg-slate-700 rounded-full h-2">
                      <div className="bg-gradient-to-r from-red-600 to-yellow-500 h-2 rounded-full" style={{width: '85%'}}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Data & Analytics */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700">
              <div className="text-2xl mb-4">📊</div>
              <h3 className="text-xl font-bold text-white mb-4">Data & Analytics</h3>
              <div className="space-y-2">
                {['PostgreSQL', 'Redis', 'Kafka', 'Prometheus', 'Grafana', 'Data Visualization'].map((skill) => (
                  <div key={skill} className="flex items-center justify-between">
                    <span className="text-slate-300">{skill}</span>
                    <div className="w-16 bg-slate-700 rounded-full h-2">
                      <div className="bg-gradient-to-r from-red-600 to-yellow-500 h-2 rounded-full" style={{width: '80%'}}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
