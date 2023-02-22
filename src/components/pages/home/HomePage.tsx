import { InfoBox, PathContainer } from "components";
import { useSwagger } from "hooks";

const HomePage = () => {
  const { swaggerData } = useSwagger();

  return (
    <>
      {swaggerData && <InfoBox {...swaggerData.info} />}
      {swaggerData && <PathContainer {...swaggerData.paths} />}
    </>
  );
};

export default HomePage;
