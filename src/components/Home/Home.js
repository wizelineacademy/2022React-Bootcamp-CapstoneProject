/* eslint-disable max-len */
import { Slide } from "react-slideshow-image";
import banners from "./featured-banners.json";
import "react-slideshow-image/dist/styles.css";
// import { Carousel } from "react-responsive-carousel";
// import categories from "./product-categories.json";
// import Gallery from "react-grid-gallery";
// import products from "./product-categories.json";

const IMAGES = [
  {
    src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
    thumbnail:
      "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_n.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 174,
    isSelected: true,
    caption: "After Rain (Jeshu John - designerspics.com)",
  },
  {
    src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
    thumbnail:
      "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 212,
    tags: [
      { value: "Ocean", title: "Ocean" },
      { value: "People", title: "People" },
    ],
    caption: "Boats (Jeshu John - designerspics.com)",
  },

  {
    src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
    thumbnail:
      "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 212,
  },
];

export const Home = () => {
  return (
    <div>
      <Slide>
        {banners.map((slideImage) => (
          <>
            {slideImage.results.map((data) => (
              <div className="each-slide" key={data.id}>
                <img src={data.data.main_image.url} alt={data.data.main_image.alt}
                width={data.data.main_image.dimensions.width} height={data.data.main_image.dimensions.height}/>
                  <p>{data.data.main_image.alt}</p>
              </div>
            ))}
          </>
        ))}
      </Slide>

      {/* <Carousel autoPlay showThumbs={false}>
        {categories.map((categories) =>
          <>
            {categories.results.map((data) => (
        //  console.log(data.data.main_image.url, "______")
              <div className="each-image" key={data.id}>
                <img src={data.data.main_image.url} alt={data.data.main_image.alt} />
                  <p>{data.data.main_image.alt}</p>
              </div>
            ))}
          </>
        )}
      </Carousel> */}
      {/* {categories.map((categories) => (
        <>
          {categories.results.map((data) => (
            <Gallery images={data.data.main_image.url} />
          ))}
        </>
      ))} */}
    </div>
  );
};
