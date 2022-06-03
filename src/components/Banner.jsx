import PropTypes from "prop-types";

const Banner = ({ data, cta_link, alt, url }) => {
  return (
    <a href={cta_link}>
      <picture>
        <img src={url} alt={alt} />
      </picture>
      <div>
        <h3>{data.title}</h3>
        <p>{data.description.text}</p>
      </div>
    </a>
  );
};

export default Banner;
