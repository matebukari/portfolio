const ContactFormSocialLinkCard = ({ name, subtext, icon: Icon, url, color }) => {
  return (
    <a 
      href={url} 
      target="_blank" 
      rel="noopener noreferrer"
      className="flex items-center space-x-4 p-4 rounded-lg 
                bg-white/5 hover:bg-white/10 
                border border-white/10 
                transition duration-200" 
      style={{ 
          boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06)'
      }}
    >
      <Icon className={`w-6 h-6 ${color} shrink-0`} /> 
      <div>
        <p className="text-base font-medium text-white">{name}</p>
        <p className="text-sm text-gray-400">{subtext}</p> 
      </div>
    </a>
  )
}

export default ContactFormSocialLinkCard;