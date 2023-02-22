import { fetchSwaggerInfo, SwaggerData } from "api";
import { useEffect, useState } from "react";

const useSwagger = () => {
  const [swaggerData, setSwaggerData] = useState<SwaggerData>();

  useEffect(() => {
    fetchSwaggerInfo().then(({ data }) => setSwaggerData(data));
  }, []);

  return { swaggerData };
};

export default useSwagger;
