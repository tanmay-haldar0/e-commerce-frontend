import React from 'react'

const Footer = () => {
  return (
    <>
    <footer className="bg-gray-800 text-white pt-8 ">
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
           {/* Social Media Links */}
        <div className="flex justify-center flex-col">
          <a href="https://facebook.com" className="hover:text-gray-400" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://twitter.com" className="hover:text-gray-400" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="https://instagram.com" className="hover:text-gray-400" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://linkedin.com" className="hover:text-gray-400" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
        </div>

       
        {/* Copyright Section */}

      </div>
      <div className="bg-gray-900 p-3 flex items-center justify-center text-center mt-4 text-md">
        <p>&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
      </div>
    </footer>
    </>
  )
}

export default Footer
