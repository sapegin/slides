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
		this.ctx.font = `${fontSize}px Helvetica`;

		window.requestAnimationFrame(this.launch);
	}

	deactivate() {
		if (this.timer) {
			clearTimeout(this.timer);
		}
	}

	drawSymbol(x, y) {
		this.ctx.fillText(this.props.symbol, x, y);
	}

	launch = () => {
		const fallToLeft = Math.random() >= 0.5;
		const dx = (random(10) + 5) * (fallToLeft ? -1 : 1);
		const x = random(this.windowWidth);
		const y = random(this.windowHeight / 3);

		this.fallIteration(x, y, dx, 0);

		this.timer = setTimeout(
			() => window.requestAnimationFrame(this.launch),
			random(pregnancy)
		);
	};

	fallIteration = (x, y, dx, dy) => {
		const maxY = this.windowHeight;
		const newX = x + dx;
		const newY = Math.min(maxY, y + dy);

		this.drawSymbol(newX, newY);

		if (Math.abs(newY - maxY) <= 0) {
			if (dy >= 0 && dy <= endVelocity) {
				return;
			}
			dy *= -bounce;
		} else {
			dy = dy - g;
		}

		setTimeout(
			() =>
				window.requestAnimationFrame(() =>
					this.fallIteration(newX, newY, dx, dy)
				),
			dt
		);
	};

	render() {
		return <canvas ref={this.rootRef} />;
	}
}

export default withDeck(Explosion);
