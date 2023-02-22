import { SwaggerData } from "api";
import { PathContent, Typography } from "components";
import { FC } from "react";

const PathContainer: FC<SwaggerData["paths"]> = (paths) => {
  const tags = [...new Set(Object.keys(paths).map((key) => key.split("/")[1]))];

  return (
    <div className="m-6">
      {tags.map((tag) => (
        <div className="mb-6">
          <Typography.H2>{tag}</Typography.H2>
          <div>
            {Object.entries(paths).map(
              ([pathKey, pathValue]) =>
                pathKey.split("/")[1] === tag &&
                Object.entries(pathValue).map(([requestKey, requestValue]) => (
                  <PathContent
                    pathKey={pathKey}
                    requestKey={requestKey}
                    requestValue={requestValue}
                  />
                ))
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default PathContainer;
