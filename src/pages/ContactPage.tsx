import { Container } from '../components/layout/Container';

export function ContactPage() {
  return (
    <Container className="py-12">
      <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
        
        <div>
          <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-medium text-gray-900">Address</h3>
              <p className="text-gray-600">123 School Street<br />City, State 12345</p>
            </div>
            
            <div>
              <h3 className="font-medium text-gray-900">Phone</h3>
              <p className="text-gray-600">(123) 456-7890</p>
            </div>
            
            <div>
              <h3 className="font-medium text-gray-900">Email</h3>
              <p className="text-gray-600">info@school2.edu</p>
            </div>
            
            <div>
              <h3 className="font-medium text-gray-900">Office Hours</h3>
              <p className="text-gray-600">
                Monday - Friday: 8:00 AM - 4:00 PM<br />
                Saturday - Sunday: Closed
              </p>
            </div>
          </div>
          
          <div className="mt-8">
            <h3 className="font-medium text-gray-900 mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-blue-600">Facebook</a>
              <a href="#" className="text-gray-600 hover:text-blue-600">Twitter</a>
              <a href="#" className="text-gray-600 hover:text-blue-600">Instagram</a>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}