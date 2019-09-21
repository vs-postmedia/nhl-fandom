import React, { Component } from 'react';
import EnterView from 'enter-view';
import ArticleList from '../ArticleList/ArticleList';
import FlourishEmbed from '../FlourishEmbed/FlourishEmbed';

import './Scrollyteller.css';

export class Scrollyteller extends Component {
	state = {
		stepValue: 0
	};

	componentDidMount() {
		EnterView({
			// selector: stepSel.nodes(),
			selector: '.step',
			offset: 0.1,
			enter: el => {
				el.classList.add('entered');
				const index = el.getAttribute('data-index');
				
				this.updateGraphic(el, index);
				// console.log(`ENTER: ${index}`)
			},
			exit: el => {
				let index = el.getAttribute('data-index');
				index = Math.max(0, index - 1);
				
				this.updateGraphic(el, index);
				// console.log(`EXIT: ${index}`)	
			},
			progress: function(el, progress) {
				// el.style.opacity = progress;
				// let p = el.querySelector('.progress');
  				// p.innerText = progress.toFixed(2);
			},
			once: false // trigger just once
		});
	}

	updateGraphic(el, index) {
		console.log(index, el);

		this.setState({
			stepValue: index
		});
	}

	render() {
		
		return (
			<div className='scrollyteller'>
				<figure className='sticky'>
					<FlourishEmbed index={this.state.stepValue}
						title='nhl-fandom'
						src='https://public.flourish.studio/story/87902/embed'
					></FlourishEmbed>
				</figure>

				<article>
					<ArticleList
						ArticleEntries={this.props.ArticleEntries}
					></ArticleList>
				</article>

			</div>
		);
	}
}

export default Scrollyteller;