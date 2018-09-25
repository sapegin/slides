import React from 'react';
import styled from 'styled-components';
import { withDeck } from 'mdx-deck';

// Based on https://github.com/peterkhayes/solitaireVictory

const fontSize = 80;
const g = -3;
const dt = 20;
const bounce = 0.7;
const endVelocity = 20;
const stagger = 200;
const pregnancy = 1000;

const random = max => Math.floor(Math.random() * max) + 1;

class Explosion extends React.Component {
	rootRef = React.createRef();

	componentWillUnmount() {
		this.deactivate();
	}

	componentDidUpdate() {
		if (this.props.deck.active) {
			this.activate();
		} else {
			this.deactivate();
		}
	}

	shouldComponentUpdate(preProps) {
		return preProps.deck.active !== this.props.deck.active;
	}

	activate() {
		this.windowWidth = document.body.offsetWidth;
		this.windowHeight = document.body.offsetHeight;

		const canvas = this.rootRef.current;
		canvas.width = this.windowWidth;
		canvas.height = this.windowHeight;
		this.ctx = canvas.getContext('2d');

		window.requestAnimationFrame(this.launch);
	}

	deactivate() {
		if (this.timer) {
			clearTimeout(this.timer);
		}
	}

	drawSymbol(left, top) {
		this.ctx.font = `${fontSize}px Helvetica`;
		this.ctx.fillText(this.props.symbol, left, top);
	}

	launch = () => {
		const fallToLeft = Math.random() >= 0.5;

		let dx = random(10) + 5;
		if (fallToLeft) {
			dx = -dx;
		}
		const left = random(this.windowWidth);
		const top = random(this.windowHeight / 3);
		this.fallIteration(left, top, dx, 0);

		this.timer = setTimeout(
			() => window.requestAnimationFrame(this.launch),
			random(pregnancy)
		);
	};

	fallIteration = (left, top, dx, dy) => {
		const newLeft = left + dx;
		const newTop = Math.min(this.windowHeight + fontSize, top + dy);

		this.drawSymbol(newLeft, newTop);

		if (Math.abs(newTop - (this.windowHeight + fontSize)) < 5) {
			if (dy < 0 || dy > endVelocity) {
				dy *= -1 * bounce;
				setTimeout(
					() =>
						window.requestAnimationFrame(() =>
							this.fallIteration(newLeft, newTop, dx, dy)
						),
					dt
				);
			}
		} else {
			dy = dy - g;
			setTimeout(
				() =>
					window.requestAnimationFrame(() =>
						this.fallIteration(newLeft, newTop, dx, dy)
					),
				dt
			);
		}
	};

	render() {
		return <canvas ref={this.rootRef} />;
	}
}

export default withDeck(Explosion);
