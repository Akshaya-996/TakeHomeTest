import React from "react";
import styled from "styled-components";

interface HotelCardProps {
  image: string;
  name: string;
  rating: number;
  price: number;
  roomType: string;
}

const Card = styled.div`
  display: flex;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 1rem;
  background: #fff;

  img {
    width: 200px;
    object-fit: cover;
  }

  .content {
    padding: 1rem;
    flex: 1;
  }

  .price {
    font-weight: bold;
    font-size: 1.5rem;
    text-align: right;
    padding: 1rem;
  }

  .stars {
    display: flex;
    gap: 5px;
    font-size: 1.2rem;
  }

  .star {
    position: relative;
    width: 24px;
    height: 24px;
    background-color: #ddd; /* Default color for empty star */
    clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%); /* Star shape */
  }

  .star.filled {
    background-color: #ffcc00; /* Gold color for filled stars */
  }
`;

const HotelCard: React.FC<HotelCardProps> = ({ image, name, rating, price, roomType }) => {
  // Generate stars based on the rating
  const filledStars = Math.floor(rating);
  const emptyStars = 5 - filledStars;

  return (
    <Card>
      <img src={image} alt={name} />
      <div className="content">
        <h3>{name}</h3>
        <div className="stars">
          {[...Array(filledStars)].map((_, index) => (
            <div key={`filled-${index}`} className="star filled" />
          ))}
          {[...Array(emptyStars)].map((_, index) => (
            <div key={`empty-${index}`} className="star" />
          ))}
        </div>
        <p><strong>Room type:</strong> {roomType}</p>
      </div>
      <div className="price">${price}</div>
    </Card>
  );
};

export default HotelCard;