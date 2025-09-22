import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Contact</h3>
            <div className="space-y-2 text-slate-300">
              <p>Email: kevin@example.com</p>
              <p>LinkedIn: linkedin.com/in/kevindsouza</p>
              <p>GitHub: github.com/kevindsouza</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link href="/" className="block text-slate-300 hover:text-yellow-400 transition-colors">
                Home
              </Link>
              <Link href="/projects" className="block text-slate-300 hover:text-yellow-400 transition-colors">
                Projects
              </Link>
              <Link href="/about" className="block text-slate-300 hover:text-yellow-400 transition-colors">
                About
              </Link>
            </div>
          </div>

          {/* F1 Passion */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Motorsport Passion</h3>
            <p className="text-slate-300 text-sm">
              Passionate about Formula 1 technology, telemetry systems, and the intersection of 
              high-performance engineering with software development.
            </p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-slate-800 text-center">
          <p className="text-slate-400 text-sm">
            © 2024 Kevin D&apos;Souza. Built with Next.js and inspired by Red Bull Racing.
          </p>
        </div>
      </div>
    </footer>
  );
}
