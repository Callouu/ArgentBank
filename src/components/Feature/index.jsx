import React from 'react';
/**
 * Feature component
 *
 * Renders a feature item with an image, a title, and a descriptive paragraph.
 *
 * @category Components
 * @component
 * @param {Object} props - Component props
 * @param {string} props.img - The source URL of the feature image
 * @param {string} props.title - The title of the feature
 * @param {string} props.text - The description text of the feature
 * @returns {React.Component} The rendered feature item
 */
function Feature({ img, title, text }) {
	return (
		<div className="feature-item">
			<img src={img} alt="Chat Icon" className="feature-icon" />
			<h3 className="feature-item-title">{title}</h3>
			<p>{text}</p>
		</div>
	);
}

export default Feature;