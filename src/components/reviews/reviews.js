import { Component } from 'react';
import PropTypes from 'prop-types';
import Review from './review';

import styles from './reviews.module.css';

class Reviews extends Component {
  static propTypes = {
    reviews: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
      }).isRequired
    ).isRequired,
  };

  state = { error: null };

  componentDidCatch(error) {
    this.setState({ error });
  }

  render() {
    const { reviews } = this.props;

    if (this.state.error) {
      return <p>Отзывов по этому ресторону пока нет :(</p>;
    }

    return (
      <div className={styles.reviews}>
        {reviews.map((review) => (
          <Review key={review.id} {...review} />
        ))}
      </div>
    );
  }
}

export default Reviews;
