import PropTypes from 'prop-types';
import { Span, FilterInput, Input } from './Filter.styled';

export const Filter = ({ filter, filterChange }) => {
  return (
    <FilterInput>
      <Span>Find contacts by name</Span>
      <Input
        type="text"
        name="filter"
        title="Filter"
        onChange={filterChange}
        value={filter}
      />
    </FilterInput>
  );
};

Filter.propTypes = {
  filterChange: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};
