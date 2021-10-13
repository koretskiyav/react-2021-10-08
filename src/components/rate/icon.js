import { ReactComponent as StarFull } from '../../icons/star-full.svg'
import { ReactComponent as StarEmpty } from '../../icons/star-empty.svg'

function Icon(props) {
  const {full} = props;
  return (
      full ? <StarFull /> : <StarEmpty />
  );
}

export default Icon;