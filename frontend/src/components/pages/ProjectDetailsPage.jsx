import { useNavigate } from "react-router-dom";

const ProjectDetailsPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <button
        onClick={() => navigate(-1)}
        className="text-purple-400 hover:text-purple-300 transition font-bold"
      >
        Back
      </button>
    </>
  );
};

export default ProjectDetailsPage;
