import React, {useEffect, useState} from 'react';
import { connect } from 'react-redux';
import { restaurants } from '../../fixtures';
import styles from './basket.module.css';
import { decrement, increment } from '../../redux/actions';

const loadProduct = (id) => {
  for (let restaurant of restaurants) {
    const product = restaurant.menu.filter((product) => product.id === id);
    if (product.length > 0) {
      return product[0];
      break;
    }
  }
}

function Basket(props) {

  const {order} = props;
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (order) {
      let allProducts = [];
      let allTotal = 0;
      for (const index in order) {
        const currentProduct = loadProduct(index);
        allTotal += currentProduct.price * order[index];
        allProducts.push({
          id: index,
          count: order[index],
          price: currentProduct.price,
          name: currentProduct.name
        });
      }
      setProducts(allProducts);
      setTotal(allTotal);
    }
  }, [order]);

  return (
    <div className={styles.basket}>
      <ul>
        {
          products.map(product => {
            return <li key={product.id}>
              <span>{product.name} (per item: {product.price}) x {product.count}</span>
              {/*<span onClick={increment(product.id)}>+</span>*/}
              {/*<span onClick={decrement(product.id)}>-</span>*/}
            </li>
          })
        }
      </ul>
      <div>total: {total}</div>
    </div>
  );
}

const mapStateToProps = (state, props) => ({
  order: state.order ? state.order : null,
});

// Not sure how to add + - and delete.
// const mapDispatchToProps = (dispatch, props) => ({
//   increment: () => dispatch(increment(id)),
//   decrement: () => dispatch(decrement(id)),
// });

export default connect(mapStateToProps)(Basket);