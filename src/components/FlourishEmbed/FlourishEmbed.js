import React, { useEffect } from 'react';

const FlourishEmbed = (props) => {
	const iframeStyle = {
			height: '600px',
			width: '100%'
		}

	// similar to ComponentDidMount& ComponentDidUpdate 
	useEffect(() => {
		const iframe = document.querySelector('.App iframe');
		iframe.src = iframe.src.replace(/#slide-.*/, '') + '#slide-' + props.index;	
	});
	
	
	return (
		<iframe title={props.title} src={props.src} frameBorder='0' scrolling='no' style={iframeStyle}></iframe>
	);
}

export default FlourishEmbed;