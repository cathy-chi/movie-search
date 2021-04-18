import React from "react";
import { Rating } from "@material-ui/lab";
import Box from "@material-ui/core/Box";
import { Card, Image } from "semantic-ui-react";

const SearchCard = ({
  image,
  title,
  overview,
  voteAverage,
  releaseDate,
  voteCount,
}) => {
  const imageUrl =
    image === null
      ? "https://i.ibb.co/TBtYfX4/no-picture-available-icon-1-1.jpg"
      : `https://image.tmdb.org/t/p/w500${image}`;

  const reviewsText =
    voteCount === 0
      ? `No reviews`
      : `${voteAverage} stars with ${voteCount} reviews`;

  const overviewTest = overview ? overview : "No overview available";

  return (
    <Card>
      <Image src={imageUrl} size="medium" />
      <Card.Content>
        <Card.Header>{title}</Card.Header>
        <Card.Meta>
          <span className="date">{releaseDate}</span>
        </Card.Meta>
        <Card.Description>{overviewTest}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Rating
          name="size-small"
          value={voteAverage}
          precision={0.1}
          max={10}
          readOnly
        />
        {<Box>{reviewsText}</Box>}
      </Card.Content>
    </Card>
  );
};

export default SearchCard;
