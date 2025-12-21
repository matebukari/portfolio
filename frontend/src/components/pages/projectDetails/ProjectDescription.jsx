const ProjectDescription = ({ text }) => {
  return(
    <div className="text-lg text-gray-400 whitespace-pre-line rounded-2xl p-8 border-2 border-neutral-400/20 bg-black/1 backdrop-blur-[3px]">
      <p>{text}</p>
    </div>
  )
}

export default ProjectDescription;