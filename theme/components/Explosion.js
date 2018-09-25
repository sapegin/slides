import React from 'react';
import styled from 'styled-components';
import { withDeck } from 'mdx-deck';

// Based on https://github.com/peterkhayes/solitaireVictory

const g = -3;
const dt = 20;
const bounce = 0.7;
const endVelocity = 20;
const stagger = 200;
const pregnancy = 700;
const population = 2000;
const clones = [];

// TODO: Remove everythin on switching to another slide

const random = max => Math.floor(Math.random() * max) + 1;

const Root = styled.div`
	position: relative;
	width: 100vw;
	height: 100vh;
	font-size: 8vmax;

	div {
		position: absolute;
	}
`;

class Explosion extends React.Component {
	rootRef = React.createRef();

	componentDidMount() {
		console.log('XxXXXXX');
		//this.launch();
	}

	componentWillUnmount() {
		if (this.timer) {
			clearTimeout(this.timer);
		}
	}

	componentWillReceiveProps() {
		console.log(this.props.deck);
		if (this.props.deck.active) {
			this.rootRef.current.innerHTML = '';
		}
	}

	componentDidUpdate() {}

	shouldComponentUpdate() {
		return false;
	}

	launch = () => {
		const fallToLeft = Math.random() >= 0.5;
		const body = this.rootRef.current;
		const windowWidth = document.body.offsetWidth;
		const windowHeight = document.body.offsetHeight;

		const createElement = function(elem, pos) {
			let copy;
			if (clones.length > population) {
				const first = clones.shift();
				clones.push(first);
				copy = first;
			} else {
				copy = elem.cloneNode(true);
				clones.push(copy);
			}

			copy.style.left = pos.left + 'px';
			copy.style.top = pos.top + 'px';

			body.appendChild(copy);

			return copy;
		};

		const fallIteration = function(elem, elemHeight, oldPos, dx, dy) {
			const newTop = Math.min(windowHeight - elemHeight, oldPos.top + dy);
			const newPos = {
				left: oldPos.left + dx,
				top: newTop
			};

			const copy = createElement(elem, newPos);

			if (Math.abs(newTop - (windowHeight - elemHeight)) < 5) {
				if (dy < 0 || dy > endVelocity) {
					dy *= -1 * bounce;
					setTimeout(function() {
						fallIteration(copy, elemHeight, newPos, dx, dy);
					}, dt);
				}
			} else {
				dy = dy - g;
				setTimeout(function() {
					fallIteration(copy, elemHeight, newPos, dx, dy);
				}, dt);
			}
		};

		const startFall = function(elem, height, stagger) {
			let dx = random(10) + 5;
			if (fallToLeft) {
				dx = -dx;
			}
			const pos = {
				left: random(windowWidth),
				top: random(windowHeight / 3)
			};
			fallIteration(elem, height, pos, dx, 0);
		};

		const obj = document.createElement('div');
		obj.textContent = this.props.symbol;
		startFall(obj, obj.offsetHeight, stagger);

		this.timer = setTimeout(this.launch, random(pregnancy));
	};

	render() {
		return <Root innerRef={this.rootRef} />;
	}
}

export default withDeck(Explosion);
