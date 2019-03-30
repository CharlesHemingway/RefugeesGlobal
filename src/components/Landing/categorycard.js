import React from "react";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";



const CategoryCard = ({ categorycard }) => {
  const { img, alt, title, subtitle } = categorycard;
  return (
    <Card>
      <CardImg top width="50px" src={img} alt={alt} />
      <CardBody>
        <Button outline color="secondary" className="float-right" href="tour">
          Read more
        </Button>
        <CardTitle>{title}</CardTitle>
        <CardSubtitle>{subtitle}</CardSubtitle>
      </CardBody>
    </Card>
  );
};
export default CategoryCard;
