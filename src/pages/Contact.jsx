 export default function Contact() {
  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      
      <p className="mb-6 text-gray-600">
        Have questions or need help? We’d love to hear from you. Reach out to us anytime!
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        
        {/* Contact Info */}
        <div>
          <h2 className="text-xl font-semibold mb-2">Our Information</h2>
          <p>Email: support@shopease.com</p>
          <p>Phone: +91 98765 43210</p>
          <p>Address: Jaipur, Rajasthan, India</p>
        </div>

        {/* Contact Form */}
        <form className="flex flex-col gap-3">
          <input type="text" placeholder="Your Name" className="border p-2 rounded" />
          <input type="email" placeholder="Your Email" className="border p-2 rounded" />
          <textarea placeholder="Your Message" className="border p-2 rounded"></textarea>
          <button className="bg-blue-700 text-white p-2 rounded">
            Send Message
          </button>
        </form>

      </div>
    </div>
  );
}