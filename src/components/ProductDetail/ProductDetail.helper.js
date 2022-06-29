import { TagGroup, TagName } from "./ProductDetail.styles";
import { ReactComponent as TagImage } from '../../images/tag.svg';


export function imageGetter(images) {
  return images.map((img, i) => {
    const data = img.image;
    return (
      <div className='item'
        data-value={i + 1}
        key={data.url}
        style={{ width: '100%' }}>
        <img
          style={{ width: '100%' }}
          src={data.url}
          alt={data.alt} />
      </div>
    );
  });
}

export function tagsGetter(tags) {
  return tags.map((tag, i) => {
    return (
      <TagGroup key={`tag-group-${i}`}>
        <TagImage />
        <TagName>{tag}</TagName>
      </TagGroup>
    );
  });
}