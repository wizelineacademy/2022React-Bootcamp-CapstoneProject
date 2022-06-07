import React from "react";
import PropTypes from "prop-types";
import CardDepartment from "../components/common/CardDepartment";
import Grid from "./common/Grid";

const Departments = ({ data }) => {
  return (
    <section className="departments">
      <Grid col={5} mdCol={2} smCol={1} gap={20}>
        {data?.results?.map((item, index) => (
          <CardDepartment
            key={index}
            departmentName={item.data.name}
            imageUrl={item.data.main_image.url}
            imageAlt={item.data.main_image.alt}
          />
        ))}
      </Grid>
    </section>
  );
};

Departments.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Departments;
