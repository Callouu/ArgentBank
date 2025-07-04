/**
 * Render a div with an image, a title, and a paragraph.
 *
 * @category Components
 * @component
 * @returns { React.Component } A React component
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