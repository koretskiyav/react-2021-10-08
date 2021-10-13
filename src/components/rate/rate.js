import Icon from './icon'
import styles from './rate.module.css'

function Rate(props) {
  const maxNumberOfStars = 5;
  const {rating} = props;

  if (rating > maxNumberOfStars) {
    console.log(`Max number of stars is ${maxNumberOfStars}. Do not use more!`)
  }

  return (
    <p className={styles.stars}>
      {[...Array(maxNumberOfStars)].map((x, i) =>
        <Icon {...(i < rating ? {full: true} : {})} />
      )}
    </p>
  );
}

export default Rate;
