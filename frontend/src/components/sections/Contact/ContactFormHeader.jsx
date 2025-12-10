import { Share2 } from 'lucide-react';

const ContactFormHeader = () => {
  return (
    <>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-4xl font-extrabold text-white">
          Get in Touch
        </h2>
        <Share2 className="w-6 h-6 text-purple-400" />
      </div>
      <p className="text-gray-300 mb-8">
        Have something to discuss? Send me a message and let's talk.
      </p>
    </>
  )
}

export default ContactFormHeader;