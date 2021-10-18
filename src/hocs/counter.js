import useAmount from '../hooks/use-amount';

export default (WrappedComponent) => (props) => {
  const amountProps = useAmount(props.amount || 0);
  return <WrappedComponent {...props} {...amountProps} />;
};
