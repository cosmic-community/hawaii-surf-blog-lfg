export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 mt-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="text-2xl">🌊</div>
              <span className="text-xl font-bold">Hawaii Surf Blog</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Authentic Hawaiian surf culture, expert reports, and gear reviews 
              from the world's most legendary surf breaks.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="/categories/surf-reports" className="hover:text-white transition-colors">Surf Reports</a></li>
              <li><a href="/categories/surf-spots" className="hover:text-white transition-colors">Surf Spots</a></li>
              <li><a href="/categories/gear-reviews" className="hover:text-white transition-colors">Gear Reviews</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Connect</h3>
            <p className="text-gray-400 mb-4">
              Follow us for daily surf updates and Hawaiian surf culture.
            </p>
            <div className="text-gray-400">
              <p>📧 aloha@hawaiisurfblog.com</p>
              <p>📍 North Shore, Oahu, Hawaii</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-8 text-center text-gray-400">
          <p>&copy; 2024 Hawaii Surf Blog. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}