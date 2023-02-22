import { useNavigate, useParams } from "react-router-dom";
import { useSwagger } from "hooks";
import { PathContent } from "components/molecules";
import { RequestType } from "api";

const PathPage = () => {
  const params = useParams();
  const navigate = useNavigate();

  const { swaggerData } = useSwagger();

  const info = params.info;

  if (!info) {
    return null;
  }

  const [type, ...rest] = info.split("_");

  const encodedPath = `/${rest.join("/")}`;

  const currentPath = swaggerData?.paths[encodedPath][type as RequestType];

  return (
    <div className="m-6">
      <button className="flex pb-4 text-cyan-500" onClick={() => navigate(-1)}>
        Go Back
      </button>
      {currentPath && (
        <PathContent
          pathKey={encodedPath}
          requestKey={type}
          requestValue={currentPath}
        />
      )}
    </div>
  );
};

export default PathPage;
