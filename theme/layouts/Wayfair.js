import React from 'react';
import theme from '../theme';

const getColor = variation => {
	if (variation === 'white') {
		return theme.colors.background;
	}
	if (variation === 'black') {
		return theme.colors.text;
	}
};

const Wayfair = ({ variation, ...props }) => {
	const color = getColor(variation);
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 651.41574 153.10772"
		>
			<path
				fill={color}
				d="M93.48134,59.65425,87.58263,37.3878a2.15922,2.15922,0,0,0-1.534-1.53421l-22.266-5.9017a2.15921,2.15921,0,0,0-2.08009.56043L46.7794,45.4371,78.00413,76.657l14.9171-14.92331A2.15921,2.15921,0,0,0,93.48134,59.65425Z"
			/>
			<path
				fill={color}
				d="M.07352,93.66433l5.9017,22.25973a2.15923,2.15923,0,0,0,1.53363,1.53372l22.26627,5.9049a2.15923,2.15923,0,0,0,2.08045-.56045L46.782,107.87251,15.56353,76.65089.63365,91.58436A2.15924,2.15924,0,0,0,.07352,93.66433Z"
			/>
			<path
				fill={color}
				d="M29.77115,29.94377,7.50571,35.8467a2.15921,2.15921,0,0,0-1.53385,1.534L.0721,59.64284a2.15921,2.15921,0,0,0,.56052,2.08008l14.93091,14.928L46.7794,45.4371,31.85153,30.50433A2.15922,2.15922,0,0,0,29.77115,29.94377Z"
			/>
			<path
				fill={color}
				d="M92.71566,91.37142,78.00413,76.657,46.782,107.87251l14.7144,14.71761a2.68358,2.68358,0,0,0,2.5856.69658l21.67607-5.74748a2.68359,2.68359,0,0,0,1.90617-1.90617l5.74758-21.67643A2.6836,2.6836,0,0,0,92.71566,91.37142Z"
			/>
			<path
				fill={color}
				d="M137.1847,116.05649,115.01116,49.486a1.53615,1.53615,0,0,0-1.46014-1.058h-5.18717a2.1454,2.1454,0,0,1-2.15119-2.14451V38.21968a2.15109,2.15109,0,0,1,2.15119-2.15119h33.70686a2.14608,2.14608,0,0,1,2.14531,2.15119v8.06381a2.14621,2.14621,0,0,1-2.14531,2.15134l-4.266-.00683a1.56088,1.56088,0,0,0-1.44813,2.0589S144.652,75.40672,147.7253,84.68377a1.544,1.544,0,0,0,2.86926.00751c4.95666-12.88163,18.22712-47.22834,18.22712-47.22834a2.1585,2.1585,0,0,1,1.97638-1.39445H180.808a2.22375,2.22375,0,0,1,1.89545,1.45237s16.40808,45.2916,17.08563,47.1374a1.54433,1.54433,0,0,0,2.89626-.0045c.39843-1.19,11.44793-34.21038,11.44793-34.21038a1.51175,1.51175,0,0,0-1.42487-2.01538h-4.78751a2.14856,2.14856,0,0,1-2.15545-2.14451V38.21968a2.15125,2.15125,0,0,1,2.15194-2.15119h30.66592a2.1491,2.1491,0,0,1,2.07689,2.71772c-.79885,2.34383-1.94436,5.61145-2.775,8.15657a2.12934,2.12934,0,0,1-2.04985,1.48522h-4.94152a1.53666,1.53666,0,0,0-1.45788,1.049l-22.60356,66.59153a2.15234,2.15234,0,0,1-2.0409,1.47064h-12.003a2.15186,2.15186,0,0,1-2.02289-1.41812s-17.0221-46.95905-17.588-48.51615a1.55042,1.55042,0,0,0-2.89144-.05378c-.72639,1.88884-18.82121,48.61345-18.82121,48.61345a2.15215,2.15215,0,0,1-2.00638,1.3746H139.22934A2.15232,2.15232,0,0,1,137.1847,116.05649Z"
			/>
			<path
				fill={color}
				d="M311.52155,105.37675c-4.51773.20334-6.71319-1.91708-6.71319-7.03582V61.58251c0-16.14856-13.51133-26.33961-28.71147-26.33961-23.57681,0-32.1055,11.17416-33.06217,23.66787a2.15932,2.15932,0,0,0,2.1587,2.30876h11.59107a2.16939,2.16939,0,0,0,2.14444-1.98536c.64-6.52861,4.96087-11.27029,12.32009-11.27029,8.1283,0,13.02216,4.05363,13.02216,13.36595v7.96932h-4.19305c-14.45657,0-24.52229,1.85383-31.243,6.09318C242.11447,79.63093,238.75,87.3458,238.75,96.448a21.92234,21.92234,0,0,0,6.92928,16.60551c4.61751,4.38041,9.95691,6.28119,17.06852,6.28119a28.90775,28.90775,0,0,0,12.22134-2.7567,40.06929,40.06929,0,0,0,10.26-6.64511,1.54517,1.54517,0,0,1,2.386.38267c3.33671,5.75577,6.88051,7.67211,13.82254,7.67211,6.21947,0,9.22921-5.846,11.92589-9.3035A2.163,2.163,0,0,0,311.52155,105.37675Zm-27.24662-5.88239c0,.46446-.78506,1.20307-1.143,1.49794a27.55564,27.55564,0,0,1-6.23447,3.98575,15.22775,15.22775,0,0,1-6.44607,1.20474,11.47136,11.47136,0,0,1-8.4974-3.48453,12.32583,12.32583,0,0,1-3.18964-8.649c0-4.79234,1.8413-8.01875,5.43912-10.39279,3.59783-2.37254,9.45857-3.51654,16.60319-3.51654h3.46824Z"
			/>
			<path
				fill={color}
				d="M434.38978,0c-9.262,0-15.35624,2.924-19.98726,8.52072-4.62952,5.60195-6.942,11.80716-6.942,23.00656v2.99778a1.53316,1.53316,0,0,1-1.49242,1.54343H374.57663a2.15411,2.15411,0,0,0-2.15194,2.15194v8.05623a2.15139,2.15139,0,0,0,2.15194,2.15134h1.679a1.553,1.553,0,0,1,1.42959,2.11163S366.24568,77.07144,361.675,87.67052a1.5401,1.5401,0,0,1-2.79363,0c-4.689-10.745-16.182-37.09695-16.182-37.09695a1.537,1.537,0,0,1,1.41212-2.14294h5.07405a2.15189,2.15189,0,0,0,2.15194-2.15194V38.21331a2.14535,2.14535,0,0,0-2.15194-2.14482l-41.37982-.00427a2.16063,2.16063,0,0,0-1.8976,3.16282c1.08273,2.00488,3.61386,6.71628,4.34468,8.06867a2.19453,2.19453,0,0,0,1.80808,1.13229h6.1777a1.52968,1.52968,0,0,1,1.39411.885s29.62445,63.44926,30.56836,65.45714a1.976,1.976,0,0,1-.12455,1.4789c-.29413.74057-5.72908,11.76889-5.72908,11.76889-2.94278,6.28625-6.26414,11.68586-12.61942,11.70987-4.1298.012-7.31018-3.074-8.82523-4.318a2.16386,2.16386,0,0,0-2.87219.1987c-1.10676,1.19478-4.31426,4.49847-6.01836,6.26a2.1712,2.1712,0,0,0,.03644,2.88523c3.44663,3.43084,9.08688,8.01727,17.26846,8.33391,10.0814.38867,18.44892-4.84829,23.28178-15.75731,0,0,35.04264-77.4701,39.76588-88.0574a1.54912,1.54912,0,0,1,1.3543-.84487c2.21675,0,9.89432.0165,9.89432.0165a1.53627,1.53627,0,0,1,1.53667,1.53668v53.761a1.9827,1.9827,0,0,1-.383,1.19794c-1.8217,2.28177-5.43263,6.82224-7.24215,9.106a2.1458,2.1458,0,0,0,1.67219,3.49775h33.83855a2.14684,2.14684,0,0,0,2.15134-2.15134v-7.96233a2.15045,2.15045,0,0,0-2.15044-2.15119h-5.83325a1.52833,1.52833,0,0,1-1.52621-1.53667V49.96467a1.52785,1.52785,0,0,1,1.52621-1.53667h10.4052a2.1241,2.1241,0,0,0,1.69449-.81884c1.53744-2.02544,4.55613-5.97283,6.16959-8.08668a2.151,2.151,0,0,0-1.71226-3.454H428.94376a1.53724,1.53724,0,0,1-1.53667-1.53668V22.58562c0-5.821,2.97894-11.59332,9.20666-11.59332,6.99305,0,8.11159,5.85856,8.41472,10.42431a2.19912,2.19912,0,0,0,2.13693,2.0649l9.96817.00075a2.17914,2.17914,0,0,0,2.03489-2.12267C459.16846,6.34852,449.64544,0,434.38978,0Z"
			/>
			<path
				fill={color}
				d="M628.833,36.06849c-1.07086-.56917-3.7655-.8255-6.0705-.8255-9.28128,0-13.74779,2.89149-19.60351,11.18687a1.54655,1.54655,0,0,1-2.78563-.933l0-7.27706a2.15133,2.15133,0,0,0-2.15133-2.15134H582.76787a2.01963,2.01963,0,0,0-1.59022.76315s-4.8471,6.06366-6.44014,8.09786a2.167,2.167,0,0,0,1.69321,3.50533c.65451,0,1.93044-.00683,1.93044-.00683a1.54734,1.54734,0,0,1,1.53681,1.53681v53.77735a2.1131,2.1131,0,0,1-.35636,1.19794c-1.50849,1.86908-5.37963,6.73708-7.26845,9.11784a2.16119,2.16119,0,0,0,1.65074,3.486h33.27675a2.15134,2.15134,0,0,0,2.15134-2.15134v-7.96789a2.15134,2.15134,0,0,0-2.15134-2.15134H601.9101a1.53667,1.53667,0,0,1-1.53667-1.53667s-.00009-37.75961-.00009-40.20363a2.80414,2.80414,0,0,1,.22187-.97176c3.615-6.83638,11.79692-11.5679,17.87009-11.5679a30.15354,30.15354,0,0,1,9.72418,1.46671c1.151.29475,2.15134-.96319,2.15134-2.15134l-.0047-12.17954A2.52089,2.52089,0,0,0,628.833,36.06849Z"
			/>
			<path
				fill={color}
				d="M564.01667,105.279h-5.25954a1.53667,1.53667,0,0,1-1.53668-1.53667V38.19086a2.14527,2.14527,0,0,0-2.17281-2.12237H539.64476a2.16152,2.16152,0,0,0-1.71368.84811c-.78775,1.02246-4.77793,6.02647-6.3746,8.01076a2.15055,2.15055,0,0,0,1.62735,3.50064h2.03482a1.57936,1.57936,0,0,1,1.48648,1.53681v53.74853a2.43655,2.43655,0,0,1-.36962,1.19795c-1.73062,2.18859-5.40091,6.79775-7.22094,9.08187a2.14429,2.14429,0,0,0,1.6341,3.55067l5.9028-.02866h10.16994l10.90117.02866a1.86111,1.86111,0,0,0,1.49267-.64886c1.60863-2.03806,4.71087-5.92349,6.31266-7.93352A2.16275,2.16275,0,0,0,564.01667,105.279Z"
			/>
			<circle fill={color} cx="546.82425" cy="15.66251" r="11.59434" />
			<path
				fill={color}
				d="M520.5432,105.37675c-4.51773.20334-6.71319-1.91708-6.71319-7.03582V61.58251c0-16.14856-13.51133-26.33961-28.71148-26.33961-23.5768,0-32.10549,11.17416-33.06216,23.66787a2.15932,2.15932,0,0,0,2.1587,2.30876h11.59107a2.16938,2.16938,0,0,0,2.14443-1.98536c.64-6.52861,4.96088-11.27029,12.3201-11.27029,8.1283,0,13.02216,4.05363,13.02216,13.36595v7.96932h-4.19306c-14.45656,0-24.52228,1.85383-31.243,6.09318-6.72068,4.2386-10.08515,11.95347-10.08515,21.0557a21.92237,21.92237,0,0,0,6.92927,16.60551c4.61752,4.38041,9.95692,6.28119,17.06853,6.28119a28.90775,28.90775,0,0,0,12.22134-2.7567,40.06929,40.06929,0,0,0,10.26-6.64511,1.54517,1.54517,0,0,1,2.386.38267c3.33671,5.75577,6.88051,7.67211,13.82254,7.67211,6.21947,0,9.22921-5.846,11.92589-9.3035A2.163,2.163,0,0,0,520.5432,105.37675Zm-27.24662-5.88239c0,.46446-.78506,1.20307-1.143,1.49794a27.55547,27.55547,0,0,1-6.23448,3.98575,15.22767,15.22767,0,0,1-6.44606,1.20474,11.47136,11.47136,0,0,1-8.4974-3.48453,12.32583,12.32583,0,0,1-3.18964-8.649c0-4.79234,1.8413-8.01875,5.43912-10.39279,3.59782-2.37254,9.45857-3.51654,16.60319-3.51654h3.46824Z"
			/>
			<path
				fill={color}
				d="M648.01987,47.73438h-1.16024l-1.82953-2.64912h-.90174v2.64912h-.96587V40.65871h2.72126a2.02431,2.02431,0,0,1,2.094,2.21828,1.98283,1.98283,0,0,1-1.84757,2.17621Zm-3.89151-6.182v2.6391h1.68325a1.33066,1.33066,0,0,0,.04007-2.6391Z"
			/>
			<path
				fill={color}
				d="M645.29731,38.97428a5.22747,5.22747,0,1,1-5.22675,5.22674,5.23358,5.23358,0,0,1,5.22675-5.22674m0-.8917a6.11917,6.11917,0,1,0,6.11843,6.11844,6.118,6.118,0,0,0-6.11843-6.11844Z"
			/>
		</svg>
	);
};

export default Wayfair;
