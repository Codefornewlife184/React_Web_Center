import React from "react";

const ProductDesc = (props) => {
  const { title1, desc1, title2, desc2 } = props;
  return (
    <>
      <p className="product-details__excerpt__text mt-4">
        <strong style={{color:"#A42125"}}>{title1}</strong>
        <br />
        {desc1}
        <br />
        <strong style={{color:"#A42125"}}>{title2}</strong>
        <br />
        {desc2}
        <br />
      </p>
    </>
  );
};

export default ProductDesc;
