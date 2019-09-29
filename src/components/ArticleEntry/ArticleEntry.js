import React, { Fragment } from 'react';
import './ArticleEntry.css';

const ArticleEntry = (props) => {
	const data = props.data;
	

	return (
		<li className={`step step-${data.id}`} data-index={data.id}>
			<h3 className='headline'>{data.headline}</h3>
			<p dangerouslySetInnerHTML={createMarkup(data.text)} />
		</li>
	);
}

function createMarkup(textString) {
  return {__html: textString};
}

export default ArticleEntry;