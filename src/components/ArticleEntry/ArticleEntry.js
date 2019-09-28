import React from 'react';
import './ArticleEntry.css';

const ArticleEntry = (props) => {
	const data = props.data;

	return (
		<li className='step' data-index={data.id}>
			<h3 className='headline'>{data.headline}</h3>
			<p>{data.text}</p>
		</li>
	);
}

export default ArticleEntry;