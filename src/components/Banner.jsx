import PropTypes from "prop-types";

const Banner = ({ data }) => {
  return (
    <a href={data.cta_link}>
      <picture>
        <img src={data.main_image.url} alt={data.main_image.alt} />
      </picture>
      <div>
        <h3>{data.title}</h3>
        <p>{data.description.text}</p>
      </div>
    </a>
  );
};

export default Banner;
