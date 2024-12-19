import React, { useState } from "react";
import hotelsData from "../../data/hotel.json";
import HotelCard from "../../components/hotelcard/HotelCard";
import FilterBar from "../../components/filterbar/FilterBar";
import styled from "styled-components";
import { device } from "../../styles/breakpoint";

const PageContainer = styled.div`
  padding: 2rem;

  @media ${device.tablet} {
    padding: 1rem;
  }
`;

const HotelsPage: React.FC = () => {
  const [hotels] = useState(hotelsData);
  const [filteredHotels, setFilteredHotels] = useState(hotelsData);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value.toLowerCase();
    setFilteredHotels(hotels.filter(h => h.name.toLowerCase().includes(query)));
  };

  const handleRatingFilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const rating = e.target.value;
    if (!rating) setFilteredHotels(hotels);
    else setFilteredHotels(hotels.filter(h => h.rating === Number(rating)));
  };

  return (
    <PageContainer>
      <h1>Hotels Available in Melbourne</h1>
      <FilterBar onSearch={handleSearch} onRatingFilter={handleRatingFilter} />
      {filteredHotels.map(hotel => (
        <HotelCard key={hotel.id} {...hotel} />
      ))}
    </PageContainer>
  );
};

export default HotelsPage;