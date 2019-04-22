import React from 'react';
import PropTypes from 'prop-types';

// Based on https://github.com/peterkhayes/solitaireVictory

const fontSize = 80;
const g = -3;
const dt = 20;
const bounce = 0.7;
const endVelocity = 20;
const stagger = 200;
const pregnancy = 1000;

const random = max => Math.floor(Math.random() * max) + 1;

export default function Explosion({ symbol }) {
	const rootRef = React.useRef();

	React.useEffect(() => {
		activate();
		return deactivate;
	});

	let ctx;
	let timer;
	let windowWidth;
	let windowHeight;

	function activate() {
		windowWidth = document.body.offsetWidth;
		windowHeight = document.body.offsetHeight;

		const canvas = rootRef.current;
		canvas.width = windowWidth;
		canvas.height = windowHeight;
		ctx = canvas.getContext('2d');
		ctx.font = `${fontSize}px Helvetica`;

		window.requestAnimationFrame(launch);
	}

	function deactivate() {
		if (timer) {
			clearTimeout(timer);
		}
	}

	function drawSymbol(x, y) {
		ctx.fillText(symbol, x, y);
	}

	function launch() {
		const fallToLeft = Math.random() >= 0.5;
		const dx = (random(10) + 5) * (fallToLeft ? -1 : 1);
		const x = random(windowWidth);
		const y = random(windowHeight / 3);

		fallIteration(x, y, dx, 0);

		timer = setTimeout(
			() => window.requestAnimationFrame(launch),
			random(pregnancy)
		);
	}

	function fallIteration(x, y, dx, dy) {
		const maxY = windowHeight;
		const newX = x + dx;
		const newY = Math.min(maxY, y + dy);

		drawSymbol(newX, newY);

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
				window.requestAnimationFrame(() => fallIteration(newX, newY, dx, dy)),
			dt
		);
	}

	return <canvas ref={rootRef} />;
}

Explosion.propTypes = {
	symbol: PropTypes.string.isRequired
};
