import { Component } from 'react';

import { fetchImages } from 'api';

import { Searchbar } from 'components/Searchbar/Searchbar';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';

export class App extends Component {
  state = {
    query: '',
    images: [],
    page: 1,
    loading: false,
  };

  changeQuery = e => {
    e.preventDefault();
    const newQuery = e.target.elements.query.value;
    this.setState({
      query: newQuery,
      images: [],
      page: 1,
    });
    e.target.reset();
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.query !== this.state.query ||
      prevState.page !== this.state.page
    ) {
      fetchImages(this.state.query, this.state.page);
    }
  }

  render() {
    return (
      <>
        <Searchbar onSubmit={this.changeQuery} />
        <ImageGallery />
      </>
    );
  }
}
