import useAmount from '../hooks/use-amount';

export default (WrappedComponent) => (props) => {
  const amountProps = useAmount(props.amount || 0);
  console.log(props);
  return <WrappedComponent {...props} {...amountProps} />;
};
