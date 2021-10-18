import useAmount from '../hooks/use-amount';

export default (WrappedComponent) => (props) => {
  const amountProps = useAmount(props.amount);
  return <WrappedComponent {...props} {...amountProps} />;
};
