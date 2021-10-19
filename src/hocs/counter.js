import useAmount from '../hooks/use-amount';

export default (WrappedComponent) => (props) => {
  const amountProps = useAmount(props.initialAmount);
  return <WrappedComponent {...props} {...amountProps} />;
};
