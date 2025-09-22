import Link from 'next/link';

const projects = [
  {
    id: 'telemetry-dashboard',
    title: 'F1 Telemetry Dashboard',
    description: 'Real-time telemetry visualization system inspired by Formula 1 data analysis tools.',
    tags: ['React', 'WebSocket', 'D3.js', 'Real-time'],
    status: 'Completed',
    image: '/api/placeholder/400/300'
  },
  {
    id: 'performance-monitor',
    title: 'High-Performance Monitor',
    description: 'System monitoring tool with sub-millisecond precision for critical applications.',
    tags: ['C#', 'Kubernetes', 'Prometheus', 'Grafana'],
    status: 'In Progress',
    image: '/api/placeholder/400/300'
  },
  {
    id: 'data-pipeline',
    title: 'Racing Data Pipeline',
    description: 'ETL pipeline for processing and analyzing motorsport telemetry data at scale.',
    tags: ['Python', 'Apache Kafka', 'PostgreSQL', 'Docker'],
    status: 'Completed',
    image: '/api/placeholder/400/300'
  },
  {
    id: 'strategy-tool',
    title: 'Race Strategy Calculator',
    description: 'Advanced race strategy optimization tool using machine learning algorithms.',
    tags: ['Python', 'TensorFlow', 'FastAPI', 'Redis'],
    status: 'Planning',
    image: '/api/placeholder/400/300'
  },
  {
    id: 'devops-platform',
    title: 'DevOps Racing Platform',
    description: 'CI/CD platform optimized for high-performance deployment pipelines.',
    tags: ['Kubernetes', 'Jenkins', 'Terraform', 'AWS'],
    status: 'Completed',
    image: '/api/placeholder/400/300'
  },
  {
    id: 'visualization-suite',
    title: 'Data Visualization Suite',
    description: 'Interactive data visualization tools for complex racing analytics.',
    tags: ['React', 'D3.js', 'TypeScript', 'WebGL'],
    status: 'In Progress',
    image: '/api/placeholder/400/300'
  }
];

export default function Projects() {
  return (
    <div className="pt-16 min-h-screen">
      {/* Header */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-red-600 to-yellow-500 bg-clip-text text-transparent">
              Engineering Projects
            </span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            High-performance software solutions inspired by Formula 1 engineering excellence
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Link
                key={project.id}
                href={`/projects/${project.id}`}
                className="group bg-slate-800/50 backdrop-blur-sm rounded-lg border border-slate-700 hover:border-yellow-500/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/10"
              >
                {/* Project Image Placeholder */}
                <div className="aspect-video bg-slate-700 rounded-t-lg flex items-center justify-center">
                  <div className="text-slate-400 text-sm">Project Screenshot</div>
                </div>
                
                <div className="p-6">
                  {/* Status Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      project.status === 'Completed' 
                        ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                        : project.status === 'In Progress'
                        ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                        : 'bg-slate-500/20 text-slate-400 border border-slate-500/30'
                    }`}>
                      {project.status}
                    </span>
                  </div>

                  {/* Project Title */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-yellow-400 transition-colors">
                    {project.title}
                  </h3>

                  {/* Project Description */}
                  <p className="text-slate-300 text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-slate-700/50 text-slate-300 text-xs rounded border border-slate-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-600/10 to-yellow-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Collaborate?
          </h2>
          <p className="text-slate-300 text-lg mb-8">
              Let&apos;s build something extraordinary together, with the precision and performance of Formula 1 engineering.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/about"
              className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105"
            >
              Get in Touch
            </Link>
            <Link
              href="https://github.com/kevindsouza"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-slate-900 px-8 py-3 rounded-lg font-semibold transition-all duration-200"
            >
              View GitHub
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
