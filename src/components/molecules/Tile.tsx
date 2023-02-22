import { RequestType } from "api";
import { ReactNode } from "react";
import { Link } from "react-router-dom";

const colors = {
  put: "text-orange-500",
  get: "text-blue-500",
  post: "text-green-500",
  delete: "text-red-500",
};

interface TileProps {
  children: ReactNode;
  pathTo: string;
}

interface TileHeaderProps {
  children: ReactNode;
  requestType: RequestType;
}

interface TileSubHeaderProps {
  children: ReactNode;
}

type TileRowProps = TileSubHeaderProps;

interface TileLabelsProps {
  leftLabel: string;
  middleLabel: string;
  rightLabel?: string;
}

interface TileValuesProps {
  leftValue: string;
  middleValue: string;
  rightValue?: string;
}

const Tile = ({ children, pathTo }: TileProps) => (
  <Link
    to={pathTo}
    className="cursor-pointer block p-6  rounded-lg shadow  bg-gray-800 border-gray-700 hover:bg-gray-700 mb-2 pt-4 pb-2"
  >
    {children}
  </Link>
);

Tile.Header = ({ children, requestType }: TileHeaderProps) => (
  <div className={`text-2xl mb-4 font-bold ${colors[requestType]}`}>
    {children}
  </div>
);

Tile.SubHeader = ({ children }: TileSubHeaderProps) => (
  <div className="text-xl mb-2 font-semibold">{children}</div>
);

Tile.Row = ({ children }: TileRowProps) => (
  <div className="flex pb-2">{children}</div>
);

Tile.Label = ({ leftLabel, middleLabel, rightLabel }: TileLabelsProps) => (
  <Tile.Row>
    <p className="text-xl w-64">{leftLabel}</p>
    <p className="text-xl flex-1">{middleLabel}</p>
    {!!rightLabel && <p className="text-xl  w-32 text-right">{rightLabel}</p>}
  </Tile.Row>
);

Tile.Values = ({ leftValue, middleValue, rightValue }: TileValuesProps) => (
  <Tile.Row>
    <p className="font-semibold w-64">{leftValue}</p>
    <p className="flex-1">{middleValue}</p>
    {!!rightValue && <p className="flex-1  w-32 text-right">{rightValue}</p>}
  </Tile.Row>
);

export default Tile;
