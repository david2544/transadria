const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p>Str. Example 123, Bucharest, Romania</p>
            <p>Phone: +40 123 456 789</p>
            <p>Email: info@transadria.com</p>
          </div>

        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p>&copy; {new Date().getFullYear()} Transadria. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
