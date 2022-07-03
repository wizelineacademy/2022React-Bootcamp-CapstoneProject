import { Label } from "../../icons";
import { Title, Tags, Tag } from "./styled";

const TagsWraper = ({ tags }) => {
  return (
    <div>
      <Title>Tags: </Title>
      <Tags>
        {tags.map((tag) => (
          <Tag key={tag}>
            <Label fill="#a1c5cc" />
            {tag}
          </Tag>
        ))}
      </Tags>
    </div>
  );
};

export default TagsWraper;
