import styles from './Card.module.scss'

export const Card = ({ data }) => {
	const { title, description, person, sum } = data

	return (
    <div className={styles.card}>
			<div className={styles.cardContent}>
				<h4>{title}</h4>
				<p>{description}</p>
			</div>
			<div className={styles.cardContent}>
				<p>Person: {person}</p>
				<p>Sum: {sum}$</p>
			</div>
    </div>
	)
}