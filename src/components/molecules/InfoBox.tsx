import { SwaggerDataInfo } from "api";
import { Typography } from "components";
import { FC } from "react";

const InfoBox: FC<SwaggerDataInfo> = ({
  contact,
  description,
  termsOfService,
  title,
  version,
}) => {
  return (
    <div className="m-6">
      <Typography.H1>{title}</Typography.H1>
      <Typography.H3>{description}</Typography.H3>
      <div>
        <a href={`mailto:${contact.email}`} className="text-blue-400">
          {contact.email}
        </a>
      </div>
      <a href={termsOfService} className="text-blue-400">
        Terms of service
      </a>
      <div>{version}</div>
    </div>
  );
};

export default InfoBox;
