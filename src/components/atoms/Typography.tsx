import { ReactNode } from "react";

interface TypographyProps {
  children: ReactNode;
}

const Typography = ({ children }: TypographyProps) => (
  <h4 className="inline-flex font-medium  text-white">{children}</h4>
);

Typography.H1 = ({ children }: TypographyProps) => (
  <h1 className="mb-4 text-4xl  text-white font-bold">{children}</h1>
);

Typography.H2 = ({ children }: TypographyProps) => (
  <h2 className="mb-4 text-3xl  text-white font-semibold">{children}</h2>
);

Typography.H3 = ({ children }: TypographyProps) => (
  <h3 className="mb-4 text-2xl  text-white font-semibold">{children}</h3>
);

export default Typography;
