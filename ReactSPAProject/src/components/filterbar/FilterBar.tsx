import React from "react";

interface FilterBarProps {
  onSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onRatingFilter: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const FilterBar: React.FC<FilterBarProps> = ({ onSearch, onRatingFilter }) => (
  <div style={{ marginBottom: "1rem" }}>
    <input
      type="text"
      placeholder="Enter Hotel Name"
      onChange={onSearch}
      style={{ padding: "0.5rem", marginRight: "1rem" }}
    />
    <select onChange={onRatingFilter}>
      <option value="">All Ratings</option>
      <option value="5">5 Stars</option>
      <option value="4">4 Stars</option>
      <option value="3">3 Stars</option>
    </select>
  </div>
);

export default FilterBar;