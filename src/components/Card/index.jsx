import React from 'react'

/**
 * Card component
 *
 * Displays a bank account card with title, amount, and description.
 * Includes a button to view transactions for the account.
 *
 * @category Components
 * @component
 * @param {Object} props
 * @param {string} props.title - The account title.
 * @param {number|string} props.amount - The account balance.
 * @param {string} props.description - The account description.
 * @returns {React.Component} A React component representing an account card.
 */
function Card({ title, amount, description }) {
	return (
		<section className="account">
			<div className="account-content-wrapper">
				<h3 className="account-title">{title}</h3>
				<p className="account-amount">${amount}</p>
				<p className="account-amount-description">{description}</p>
			</div>
			<div className="account-content-wrapper cta">
				<button className="transaction-button">View transactions</button>
			</div>
		</section>
	);
}

export default Card