import { StyledSearchbar, StyledForm, SearchFormBtn, SearchFormInput } from "./Searchbar.styled";

export const Searchbar = ({ onSubmit }) => {
  return (
    <StyledSearchbar>
      <StyledForm onSubmit={e => onSubmit(e)}>
        <SearchFormBtn type="submit">
          <span>Search</span>
        </SearchFormBtn>

        <SearchFormInput
          name="query"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </StyledForm>
    </StyledSearchbar>
  );
};
