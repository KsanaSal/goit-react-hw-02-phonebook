import PropTypes from 'prop-types';
import { Span, FilterInput, Input } from './Filter.styled';

export const Filter = ({ filter }) => {
  return (
    <FilterInput>
      <Span>Find contacts by name</Span>
      <Input type="text" name="filter" title="Filter" onChange={filter} />
    </FilterInput>
  );
};

Filter.propTypes = {
  filter: PropTypes.func.isRequired,
};
