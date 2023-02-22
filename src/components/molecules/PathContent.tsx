import { RequestDescription, RequestType } from "api";
import { Tile } from "components";

interface PathContentProps {
  pathKey: string;
  requestKey: string;
  requestValue: RequestDescription;
}

const PathContent = ({
  pathKey,
  requestKey,
  requestValue,
}: PathContentProps) => {
  return (
    <Tile
      pathTo={`/path/${requestKey}${pathKey.replaceAll("/", "_")}`}
      key={requestKey}
    >
      <Tile.Header requestType={requestKey as RequestType}>
        {requestKey} {pathKey}
      </Tile.Header>
      <div>
        <Tile.SubHeader>Parameters:</Tile.SubHeader>
        <Tile.Label
          leftLabel="Name"
          middleLabel="Description"
          rightLabel="Required"
        />
        {requestValue.parameters.map(({ description, name, required }) => (
          <Tile.Values
            key={name}
            leftValue={name}
            middleValue={description}
            rightValue={required ? "required" : "no required"}
          />
        ))}
      </div>
      <div className="pt-4">
        <Tile.SubHeader>Responses:</Tile.SubHeader>
        <Tile.Label leftLabel="Code" middleLabel="Description" />
        {Object.entries(requestValue.responses).map(
          ([responseKey, resposneValue]) => (
            <Tile.Values
              key={responseKey}
              leftValue={responseKey}
              middleValue={resposneValue.description}
            />
          )
        )}
      </div>
    </Tile>
  );
};

export default PathContent;
