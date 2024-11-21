import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 ">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-semibold mb-2">About Us</h3>
            <p className="text-sm">
              We are dedicated to providing the best products and services to our customers. Our mission is to enhance your shopping experience with quality and value.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
            <ul className="space-y-1">
              <li><a href="/about" className="hover:text-gray-400">About</a></li>
              <li><a href="/contact" className="hover:text-gray-400">Contact</a></li>
              <li><a href="/privacy" className="hover:text-gray-400">Privacy Policy</a></li>
              <li><a href="/terms" className="hover:text-gray-400">Terms of Service</a></li>
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div className='sm:hidden'>
            <h3 className="text-lg font-semibold mb-2">Subscribe to Our Newsletter</h3>
            <p className="text-sm mb-2">Get the latest updates and offers.</p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="p-2 rounded-l-md bg-gray-700 text-white placeholder-gray-400 "
              />
              <button className="bg-blue-600 p-2 rounded-r-md hover:bg-blue-500">Subscribe</button>
            </form>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center space-x-4 mt-6">
          <a href="https://facebook.com" className="hover:text-gray-400" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://twitter.com" className="hover:text-gray-400" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="https://instagram.com" className="hover:text-gray-400" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://linkedin.com" className="hover:text-gray-400" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>

        {/* Copyright Section */}
        <div className="text-center mt-4 text-sm">
          <p>&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
