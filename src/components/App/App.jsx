import { Component } from 'react';

import { fetchImages } from 'api';

import { Searchbar } from 'components/Searchbar/Searchbar';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { Button } from 'components/Button/Button';

export class App extends Component {
  state = {
    query: '',
    images: [],
    page: 1,
    loading: false,
  };

  async componentDidUpdate(prevProps, prevState) {
    const { query: prevQuery, page: prevPage } = prevState;
    const { query: nextQuery, page: nextPage } = this.state;

    if (prevQuery !== nextQuery || prevPage !== nextPage) {
      try {
        this.setState({ loading: true });
        const images = await fetchImages(nextQuery, nextPage);
        this.setState({ images, loading: false });
      } catch (error) {
        console.log(error);
      }
    }
  }

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

  loadMore = () => {
    this.setState(prevState => ({ page: (prevState.page += 1) }));
  };

  render() {
    const { images } = this.state;
    return (
      <>
        <Searchbar onSubmit={this.changeQuery} />
        <ImageGallery images={images} />
        {images.length >= 1 && <Button loadMore={this.loadMore}/>}
      </>
    );
  }
}
