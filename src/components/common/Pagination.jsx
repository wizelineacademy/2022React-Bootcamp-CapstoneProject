import React from "react";

import Button from "./Button";
import Grid from "./Grid";

const Pagination = () => {
  const prev = () => {
    console.log("previo");
  };

  const next = () => {
    console.log("next");
  };

  return (
    <section className="pagination">
      <Grid col={5} mdCol={5} smCol={5} gap={20}>
        <div>.</div>
        <Button handler={() => prev()} size="sm" icon="bx bx-left-arrow-alt">
          Prev
        </Button>

        <div className="pagination-counter">1/10</div>

        <Button handler={() => next()} size="sm" icon="bx bx-right-arrow-alt">
          Next
        </Button>
        <div>.</div>
      </Grid>
    </section>
  );
};

export default Pagination;
