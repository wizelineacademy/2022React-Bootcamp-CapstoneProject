import { Label } from "../../icons";
import { Title, Tags, Tag } from "./styled";
import PropTypes from "prop-types";

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

TagsWraper.propTypes = {
  tags: PropTypes.array,
};

export default TagsWraper;
