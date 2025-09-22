export default function About() {
  const skills = [
    { category: 'Backend Development', technologies: ['C#', 'Python', 'Node.js', 'FastAPI', 'ASP.NET Core'] },
    { category: 'DevOps & Infrastructure', technologies: ['Docker', 'Kubernetes', 'Jenkins', 'Terraform', 'AWS', 'Azure'] },
    { category: 'Data & Analytics', technologies: ['PostgreSQL', 'Redis', 'Apache Kafka', 'Prometheus', 'Grafana'] },
    { category: 'Frontend Development', technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'D3.js'] },
    { category: 'Data Visualization', technologies: ['D3.js', 'WebGL', 'Chart.js', 'Tableau', 'Power BI'] },
    { category: 'Monitoring & Performance', technologies: ['Prometheus', 'Grafana', 'ELK Stack', 'New Relic', 'DataDog'] }
  ];

  return (
    <div className="pt-16 min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Profile Content */}
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-red-600 to-yellow-500 bg-clip-text text-transparent">
                  Kevin D'Souza
                </span>
              </h1>
              <h2 className="text-2xl md:text-3xl text-slate-300 mb-8">
                Software Engineer & F1 Enthusiast
              </h2>
              <p className="text-lg text-slate-300 leading-relaxed mb-8">
                Passionate about building high-performance software systems with the precision and 
                attention to detail found in Formula 1 engineering. I specialize in creating robust, 
                scalable solutions that deliver exceptional performance under pressure.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="mailto:kevin@example.com"
                  className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105"
                >
                  Get in Touch
                </a>
                <a
                  href="/Kev_Res_Aug_20.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-slate-900 px-6 py-3 rounded-lg font-semibold transition-all duration-200"
                >
                  Download Resume
                </a>
              </div>
            </div>

            {/* Profile Image Placeholder */}
            <div className="flex justify-center lg:justify-end">
              <div className="w-80 h-80 bg-slate-700 rounded-lg flex items-center justify-center border border-slate-600">
                <div className="text-slate-400 text-center">
                  <div className="text-6xl mb-4">🏎️</div>
                  <div className="text-lg font-semibold">Profile Photo</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Bio */}
      <section className="py-20 bg-slate-800/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
            Professional Journey
          </h2>
          <div className="prose prose-lg prose-slate max-w-none">
            <p className="text-slate-300 text-lg leading-relaxed mb-6">
              With a deep passion for both software engineering and Formula 1, I bring a unique perspective 
              to building high-performance systems. My approach combines the precision of F1 engineering 
              with modern software development practices, focusing on reliability, performance, and 
              continuous optimization.
            </p>
            <p className="text-slate-300 text-lg leading-relaxed mb-6">
              I specialize in backend development, DevOps, and data visualization, with extensive 
              experience in C#, Python, and cloud technologies. My work emphasizes system reliability, 
              real-time data processing, and creating intuitive interfaces for complex data.
            </p>
            <p className="text-slate-300 text-lg leading-relaxed">
              When I'm not coding, you'll find me analyzing F1 telemetry data, studying race strategies, 
              or exploring the latest developments in motorsport technology. This passion drives my 
              commitment to building software that performs at the highest level.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            Technical Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skillGroup, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700 hover:border-yellow-500/50 transition-colors">
                <h3 className="text-xl font-bold text-white mb-4">{skillGroup.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-slate-700/50 text-slate-300 text-sm rounded border border-slate-600 hover:border-yellow-500/50 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Motorsport Interest Section */}
      <section className="py-20 bg-gradient-to-br from-red-900/20 via-slate-800 to-yellow-900/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-red-600 to-yellow-500 bg-clip-text text-transparent">
                Motorsport Passion
              </span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              My deep fascination with Formula 1 technology and strategy drives my approach to software engineering
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* F1 Technology Interest */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-8 border border-slate-700">
              <div className="text-4xl mb-4">🏁</div>
              <h3 className="text-2xl font-bold text-white mb-4">Formula 1 Technology</h3>
              <p className="text-slate-300 leading-relaxed mb-6">
                I'm fascinated by the cutting-edge technology in Formula 1 - from telemetry systems 
                that process thousands of data points per second to the precision engineering that 
                goes into every component. This passion translates directly into my software work.
              </p>
              <ul className="text-slate-300 space-y-2">
                <li>• Real-time telemetry data processing</li>
                <li>• Performance optimization strategies</li>
                <li>• Data visualization and analytics</li>
                <li>• System reliability under pressure</li>
              </ul>
            </div>

            {/* Strategy & Analytics */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-8 border border-slate-700">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-2xl font-bold text-white mb-4">Strategy & Analytics</h3>
              <p className="text-slate-300 leading-relaxed mb-6">
                The strategic thinking required in F1 - from race strategy to pit stop optimization - 
                mirrors the complex decision-making in software architecture and system design.
              </p>
              <ul className="text-slate-300 space-y-2">
                <li>• Race strategy optimization</li>
                <li>• Pit stop timing algorithms</li>
                <li>• Weather data integration</li>
                <li>• Performance prediction models</li>
              </ul>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <p className="text-slate-300 text-lg mb-6">
              Let's discuss how we can apply F1-level precision to your next software project
            </p>
            <a
              href="mailto:kevin@example.com"
              className="inline-flex items-center bg-gradient-to-r from-red-600 to-yellow-500 hover:from-red-700 hover:to-yellow-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105"
            >
              Start a Conversation
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
