import React from "react";
import { Arrow, PaginationItem, PaginationMain } from "./PaginationControl.styles";

export function PaginationControl() {

  const paginationItems = [1, 2, 3, 4, 5];
  const results = paginationItems.map((item, i) => {
    return <PaginationItem href="#" key={`pgaItem-${i}`}>{item}</PaginationItem>
  })

  return(
    <PaginationMain>
      <Arrow href="#">
        &laquo;
      </Arrow>
      {results}
      <Arrow href="#">
        &raquo;
      </Arrow>
    </PaginationMain>
  )
}