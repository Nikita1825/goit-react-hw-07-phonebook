import { useDispatch } from 'react-redux';
import { updateFilter } from 'redux/filterSlice';
import css from './filter.module.css';

export const Filter = () => {
  const dispatch = useDispatch();
  const onFilterChange = e => {
    dispatch(updateFilter(e.target.value));
  };
  return (
    <>
      <p className={css.textFilter}>Find contact by name</p>
      <input
        className={css.inputFilter}
        type="text"
        onChange={onFilterChange}
        placeholder="Search by name"
      />
    </>
  );
};
