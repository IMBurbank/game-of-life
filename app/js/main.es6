/**
	*
	*		Game of Life created using React, Bootstrap & ES6.
	*		Simulate any configuration you can think of. Try a
	*		preset configuration to give you some ideas. This
	*		simulation may seem simple, but can be used to form
	*		a turing complete computer!
	*
	*		You have three presets that you can use to save
	*		patters to your local browser storage.
	*
	*/


/**
	*		Pre-initialized variables
	*/

/**
	*		@desc Object hold presets arrays of indexes of live cell positions in the field
	*			Includes three Custom Patterns that get saved patterns from local storage
	*/
const presetConfigs = {
	'Clear': {},
	'Glider': {"20997":20997,"21236":21236,"21476":21476,"21477":21477,"21478":21478},
	'Small Exploder': {
		"2099":2099,
		"20999":20999,
		"21238":21238,
		"21239":21239,
		"21240":21240,
		"21478":21478,
		"21480":21480,
		"21719":21719,
	},
	'Exploder': {
		"20757":20757,
		"20759":20759,
		"20761":20761,
		"20997":20997,
		"21001":21001,
		"21237":21237,
		"21241":21241,
		"21477":21477,
		"21481":21481,
		"21717":21717,
		"21719":21719,
		"21721":21721,
	},
	'Ten Cell Row': {
		"20995":20995,
		"20996":20996,
		"20997":20997,
		"20998":20998,
		"20999":20999,
		"21000":21000,
		"21001":21001,
		"21002":21002,
		"21003":21003,
		"21004":21004,
	},
	'Ltwt Spaceship': {
		"20998":20998,
		"20999":20999,
		"21000":21000,
		"21001":21001,
		"21237":21237,
		"21241":21241,
		"21481":21481,
		"21717":21717,
		"21720":21720,
	},
	'Tumbler': {
		"21237":21237,
		"21238":21238,
		"21240":21240,
		"21241":21241,
		"21477":21477,
		"21478":21478,
		"21480":21480,
		"21481":21481,
		"21718":21718,
		"21720":21720,
		"21956":21956,
		"21958":21958,
		"21960":21960,
		"21962":21962,
		"22196":22196,
		"22198":22198,
		"22200":22200,
		"22202":22202,
		"22436":22436,
		"22437":22437,
		"22441":22441,
		"22442":22442,
	},
	'R-pentomino': {
		"21000":21000,
		"21001":21001,
		"21239":21239,
		"21240":21240,
		"21480":21480,
	},
	'Diehard': {
		"21002":21002,
		"21236":21236,
		"21237":21237,
		"21477":21477,
		"21481":21481,
		"21482":21482,
		"21483":21483,
	},
	'Acorn': {
		"21236":21236,
		"21478":21478,
		"21715":21715,
		"21716":21716,
		"21719":21719,
		"21720":21720,
		"21721":21721,
	},
	'Blk Switch Engine': {
		"20761":20761,
		"20999":20999,
		"21001":21001,
		"21002":21002,
		"21239":21239,
		"21241":21241,
		"21479":21479,
		"21717":21717,
		"21955":21955,
		"21957":21957,
	},
	'Blk Switch Engine2': {
		"20756":20756,
		"20757":20757,
		"20758":20758,
		"20760":20760,
		"20996":20996,
		"21239":21239,
		"21240":21240,
		"21477":21477,
		"21478":21478,
		"21480":21480,
		"21716":21716,
		"21718":21718,
		"21720":21720,
	},
	'2Blk Switch Engine': {
		"21460":21460,
		"21461":21461,
		"21462":21462,
		"21463":21463,
		"21464":21464,
		"21465":21465,
		"21466":21466,
		"21467":21467,
		"21469":21469,
		"21470":21470,
		"21471":21471,
		"21472":21472,
		"21473":21473,
		"21477":21477,
		"21478":21478,
		"21479":21479,
		"21486":21486,
		"21487":21487,
		"21488":21488,
		"21489":21489,
		"21490":21490,
		"21491":21491,
		"21492":21492,
		"21494":21494,
		"21495":21495,
		"21496":21496,
		"21497":21497,
		"21498":21498,
	},
	'Basic Puffer': {
		"18326":18326,
		"18567":18567,
		"18801":18801,
		"18807":18807,
		"19042":19042,
		"19043":19043,
		"19044":19044,
		"19045":19045,
		"19046":19046,
		"19047":19047,
		"19761":19761,
		"19762":19762,
		"19763":19763,
		"20001":20001,
		"20002":20002,
		"20245":20245,
		"20485":20485,
		"20486":20486,
		"20726":20726,
		"20727":20727,
		"20965":20965,
		"20966":20966,
		"21925":21925,
		"21926":21926,
		"22166":22166,
		"22167":22167,
		"22405":22405,
		"22406":22406,
		"22645":22645,
		"22881":22881,
		"22882":22882,
		"23121":23121,
		"23122":23122,
		"23123":23123,
		"23842":23842,
		"23843":23843,
		"23844":23844,
		"23845":23845,
		"23846":23846,
		"23847":23847,
		"24081":24081,
		"24087":24087,
		"24327":24327,
		"24566":24566,
	},
	'Gosper Glider Gun': {
		"19565":19565,
		"19566":19566,
		"19576":19576,
		"19577":19577,
		"19804":19804,
		"19806":19806,
		"19816":19816,
		"19817":19817,
		"20022":20022,
		"20023":20023,
		"20031":20031,
		"20032":20032,
		"20044":20044,
		"20045":20045,
		"20262":20262,
		"20263":20263,
		"20270":20270,
		"20272":20272,
		"20510":20510,
		"20511":20511,
		"20518":20518,
		"20519":20519,
		"20758":20758,
		"20760":20760,
		"20998":20998,
		"21257":21257,
		"21258":21258,
		"21497":21497,
		"21499":21499,
		"21737":21737,
		"22446":22446,
		"22447":22447,
		"22448":22448,
		"22686":22686,
		"22927":22927,
	},
	get customPattern1() { return JSON.parse(localStorage.getItem('_username_customPattern1')); },
	get customPattern2() { return JSON.parse(localStorage.getItem('_username_customPattern2')); },
	get customPattern3() { return JSON.parse(localStorage.getItem('_username_customPattern3')); },
};


/**
	*		Helper Functions
	*/

/**
	*		@desc Creates canvas data to represent a live cell one px smaller than the input size
	*		@param {Number[unitless]} cZoomSize - number representing height and width (in px) of cell square
	*		@returns
	*			{Object} imageData - live cell image data
	*			{Object~Array.<Number[unitless]>} imagePixData - imageData rgba pixel data
	*/
const memCell = function initMemCell (cZoomSize) {
	const cHeight = cZoomSize - 1,
				cWidth = cHeight;

	let hCanvas = null,
			hCtx = null,
			imageData = null,
			imagePixData = null;

	hCanvas = document.createElement('canvas');
	hCtx = hCanvas.getContext('2d');

	hCanvas.width = cWidth;
	hCanvas.height = cHeight;
	hCtx.imageSmoothingEnabled = false;

	hCtx.fillStyle = 'rgb(60,255,140)';
	hCtx.fillRect(0, 0, cWidth, cHeight);

	imageData = hCtx.getImageData(0, 0, cWidth, cHeight);
	imagePixData = imageData.data;

	return { imageData, imagePixData };
}

/**
	*		@desc Create canvas data for background layer of field with cells sized cZoomsize
	*		@param {Number[px]} width - width of canvas to create
	*		@param {Number[px]} height - height of canvas to create
	*		@param {Number[unitless]} cZoomSize - height & width of cell square
	*		@returns
	*			{Object} imageData - background canvas image data
	*			{Objext~Array.<Number[unitless]>} imagePixData - imageData rgba pixel data
	*/
const memBg = function initMemBg (width, height, cZoomSize) {
	let hCanvas = null,
			hCtx = null,
			imageData = null,
			imagePixData = null;

	hCanvas = document.createElement('canvas');
	hCtx = hCanvas.getContext('2d');

	hCanvas.width = width;
	hCanvas.height = height;
	hCtx.imageSmoothingEnabled = false;
	hCtx.fillRect(0, 0, width, height);

	let j = 3 * cZoomSize - 0.5,
			k = j,
			beginning = true,
			start = null,
			fin = null;

	//Major Axis
	hCtx.strokeStyle = 'rgba(98,98,98,0.8)';
	hCtx.beginPath();
	while (j < width) {
		start = beginning ? 0 : height;
		fin = start === 0 ? height : 0;
		hCtx.moveTo(j, start);
		hCtx.lineTo(j, fin);
		j += 3 * cZoomSize;
		beginning = !beginning;
	}
	while (k < height) {
		start = beginning ? 0 : width;
		fin = start === 0 ? width : 0;
		hCtx.moveTo(start, k);
		hCtx.lineTo(fin, k);
		k += 3 * cZoomSize;
		beginning = !beginning;
	}
	hCtx.closePath();
	hCtx.stroke();

	//Minor Axis
	j = cZoomSize - 0.5;
	k = j;
	beginning = true;
	hCtx.strokeStyle = 'rgba(98,98,98,0.5)';
	hCtx.beginPath();
	while (j < width) {
		start = beginning ? 0 : height;
		fin = start === 0 ? height : 0;
		hCtx.moveTo(j, start);
		hCtx.lineTo(j, fin);
		j += beginning ? cZoomSize : 2 * cZoomSize;
		beginning = !beginning;
	}
	while (k < height) {
		start = beginning ? 0 : width;
		fin = start === 0 ? width : 0;
		hCtx.moveTo(start, k);
		hCtx.lineTo(fin, k);
		k += beginning ? cZoomSize : 2 * cZoomSize;
		beginning = !beginning;
	}
	hCtx.closePath();
	hCtx.stroke();

	imageData = hCtx.getImageData(0, 0, width, height);
	imagePixData = imageData.data;

	return { imageData, imagePixData };
}

/**
	*		@desc Convert point (x, y) to index in the field array for cell containing (x, y)
	*		@param {Number[unitless]} x - coordinate x-component
	*		@param {Number[unitless]} y - coordinate y-component
	*		@param {Number[px]} width - width of canvas
	*		@param {Number[px]} height - height of canvas
	*		@param {Number[unitless]} cZoomSize0 - cell size at zero zoom
	*		@param {Number[unitless]} cZoomSize - cell size at current zoom
	*		@returns
	*			{Object~Number[unitless]} xStart - x-component at start of cell containing (x, y)
	*			{Object~Number[unitless]} yStart - y-component at start of cell containing (x, y)
	*			{Objext~Number[unitless]} index - field array index of cell containing (x, y)
	*/
const coordToIndex = function convertCoordToIndex (x, y, width, height, cZoomSize0, cZoomSize) {
	const cols0 = width / cZoomSize0,
				rows0 = height / cZoomSize0,
				cols = width / cZoomSize,
				rows = height / cZoomSize,
				colDiff = cols0 - cols,
				rowDiff = rows0 - rows,
				x0 = cZoomSize0 * (colDiff / 2) + x * (cZoomSize0 / cZoomSize),
				y0 = cZoomSize0 * (rowDiff / 2) + y * (cZoomSize0 / cZoomSize);

	const xStart = ~~ (x / cZoomSize) * cZoomSize,
				yStart = ~~ (y / cZoomSize) * cZoomSize,
				index = ~~ (x0 / cZoomSize0) + cols0 * ~~ (y0 / cZoomSize0);

	return {xStart, yStart, index};
}

/**
	*		@desc Create canvas data to represent next generation of game layer of field
	*			with live cells sized cZoomsize
	*		@param {Object.<Number[unitless]>} onesObj - keys = vals = index of all 1's in field array
	*		@param {Number[px]} width - width of canvas to create
	*		@param {Number[px]} height - height of canvas to create
	*		@param {Number[unitless]} cZoomSize0 - cell size at zero zoom
	*		@param {Number[unitless]} cZoomSize - cell size at current zoom
	*		@param {Object} cellData - image data for live cell at current zoom
	*		@param {Object} memGmCanv - pointer to the game layer canvas in memory
	*		@returns {Object} imageData - game layer canvas live cell image data for next generation
	*/
const gmLayerData =
			function updateGmLayerData (onesObj, width, height, cZoomSize0, cZoomSize, cellData, memGmCanv) {
	const cols0 = width / cZoomSize0,
				rows0 = height / cZoomSize0,
				cols = width / cZoomSize,
				rows = height / cZoomSize,
				colDiff = cols0 - cols,
				rowDiff = rows0 - rows;

	let gmCanvas = memGmCanv['mem-gm-layer'].gmCanvas,
			gmCtx = gmCanvas.getContext('2d'),
			imageData = gmCtx.createImageData(width, height),
			imagePixData = imageData.data,
			cWidth = cellData.imageData.width,
			cHeight = cellData.imageData.height,
			iData = 0,
			pData = 0,
			iMod = 0,
			iDiv = 0,
			el = 0,
			x = 0,
			y = 0,
			i = 0,
			w = 0,
			h = 0;

	for (i in onesObj) {
		el = onesObj[i];
		iMod = el % cols0;
		iDiv = ~~ (el / cols0);

		if (iMod + 1 > colDiff / 2 && iMod < cols + colDiff / 2 && iDiv + 1 > rowDiff / 2 && iDiv < rows + rowDiff / 2) {
		//if cell is within zoom canvas bounds
			//calc x and y for cell start
			x = cZoomSize * iMod - cZoomSize * (colDiff / 2);
			y = cZoomSize * iDiv - cZoomSize * (rowDiff / 2);
			h = 0;

			while (h < cHeight) {
				w = 0;

				while (w < cWidth) {
					iData = (h * cWidth + w) * 4;
					pData = ( (x + w) + (y + h) * width ) * 4;

					//assign rgba values for px
					imagePixData[pData] = cellData.imagePixData[iData];
					imagePixData[pData + 1] = cellData.imagePixData[iData + 1];
					imagePixData[pData + 2] = cellData.imagePixData[iData + 2];
					imagePixData[pData + 3] = cellData.imagePixData[iData + 3];
					w++;
				}
				h++;
			}
		}
	}
	return imageData;
}


/**
	*		LifeGame Components
	*/

/**
	*		@desc React Class renders zoom component
	*		@param {Number[unitless]} props.zoom - parent zoom state
	*		@param {LifeGame~Callback} props.onChange - update parent zoom state
	*		@returns {HTML} Zoom label and range slider
	*/
class ZoomSlider extends React.Component {
	shouldComponentUpdate(nextProps, nextState) {
		return this.props.zoom !== nextProps.zoom ? true : false;
	}

	render() {
		return (
			<div className='zoom'>
				<label for='zoom-slider'>Zoom:</label>
				<input
					id='zoom-slider'
					type='range'
					min={0}
					max={this.props.zoomLevels - 1}
					value={this.props.zoom}
					onChange={value => this.props.onChange(value.target.value)}	/>
			</div>
		);
	}
}

/**
	*		@desc React Class renders speed component
	*		@param {Number[unitless]} props.speed - parent speed state
	*		@param {LifeGame~Callback} props.onChange - update parent speed state
	*		@returns {HTML} Speed label and range slider
	*/
class SpeedSlider extends React.Component {
	shouldComponentUpdate(nextProps, nextState) {
		return this.props.speed !== nextProps.speed ? true : false;
	}

	render() {
		return (
			<div className='speed'>
			<label for='speed-slider'>Speed:</label>
			<input
				id='speed-slider'
				type='range'
				min={1}
				max={this.props.speedLevels * 1}
				value={this.props.speed * 1}
				onChange={value => this.props.onChange(value.target.value)}	/>
			</div>
		);
	}
}

/**
	*		@desc React Class renders start/stop button
	*		@param {Boolean} props.isContinue - start/stop state
	*		@param {LifeGame~Callback} props.onClick - toggle parent isContinue state
	*		@returns {HTML} Start/Stop button that changes innerText & className based on isContinue
	*/
class StartStopBtn extends React.Component {
	shouldComponentUpdate(nextProps, nextState) {
		return this.props.isContinue !== nextProps.isContinue ? true : false;
	}
	render() {
		let btn = null;

		if (!this.props.isContinue) {
			btn = (
				<button
					input='button'
					className='start-btn'
					onClick={this.props.onClick}	>
					<span>Start</span>
				</button>
			);
		} else {
			btn = (
				<button
					input='button'
					className='stop-btn'
					onClick={this.props.onClick}	>
					<span>Stop</span>
				</button>
			);
		}

		return (
			<div className='start-stop-btn'>{btn}</div>
		);
	}
}

/**
	*		@desc React Class renders step button which allows incrementing generation by 1
	*		@param {LifeGame~Callback} props.onClick - increment parent generation state value
	*		@returns {HTML} Step button that increments parent generation
	*/
class StepBtn extends React.Component {
	shouldComponentUpdate(nextProps, nextState) {
		return false
	}

	render() {
		return (
			<div className='step-btn-container'>
				<button
					className ='step-btn'
					type='button'
					onClick={this.props.onClick} >
					<span>Step</span>
				</button>
			</div>
		);
	}
}

/**
	*		@desc React Class renders Reset component which allows reseting to one of clear,
	*			several preset configurations, and three user defined confiigurations.
	*		@param {LifeGame~Callback} props.onClick - reset parent state and update config state
	*			based on current Select value
	*		@returns {HTML} Reset button and Select dropdown
	*/
class ResetComponent extends React.Component {
	shouldComponentUpdate(nextProps, nextState) {
		return false;
	}

	render() {
		return (
			<div id='reset-comp' className='reset-comp'>
				<button
					className='reset-btn'
					type='button'
					onClick={ () => this.props.onClick(this['_reactInternalInstance']['_renderedComponent']['_hostNode'].children[1].value) }	>
					<span>Reset To:</span>
				</button>
				<select id='reset-dropdown' className='reset-dropdown'>
					<option value='Clear'>Clear</option>
					<option value='Glider'>Glider</option>
					<option value='Small Exploder'>Small Exploder</option>
					<option value='Exploder'>Exploder</option>
					<option value='Ten Cell Row'>Ten Cell Row</option>
					<option value='Ltwt Spaceship'>Ltwt Spaceship</option>
					<option value='Tumbler'>Tumbler</option>
					<option value='R-pentomino'>R-pentomino</option>
					<option value='Diehard'>Diehard</option>
					<option value='Acorn'>Acorn</option>
					<option value='Blk Switch Engine'>Blk Switch Engine</option>
					<option value='Blk Switch Engine2'>Blk Switch Engine2</option>
					<option value='2Blk Switch Engine'>2Blk Switch Engine</option>
					<option value='Basic Puffer'>Basic Puffer</option>
					<option value='Gosper Glider Gun'>Gosper Glider Gun</option>
					<option value='customPattern1'>customPattern1</option>
					<option value='customPattern2'>customPattern2</option>
					<option value='customPattern3'>customPattern3</option>
					<option value='Clear'>Clear</option>
				</select>
			</div>
		);
	}
}

/**
	*		@desc React Class renders Save component for saving a chosen configuration to local storage
	*		@param {LifeGame~Callback} props.onClick - updates parent save state to selected config name
	*		@returns {HTML} Save button and Select dropdown
	*/
class SaveComponent extends React.Component {
	shouldComponentUpdate(nextProps, nextState) {
		return false;
	}

	render() {
		return (
			<div id='save-comp' className='save-comp'>
				<button
					className='save-btn'
					type='button'
					onClick={ () => this.props.onClick(this['_reactInternalInstance']['_renderedComponent']['_hostNode'].children[1].value) }	>
					<span>Save To:</span>
				</button>
				<select id='save-dropdown' className='save-dropdown'>
					<option value='customPattern1'>customPattern1</option>
					<option value='customPattern2'>customPattern2</option>
					<option value='customPattern3'>customPattern3</option>
				</select>
			</div>
		);
	}
}

/**
	*		@desc React Class renders button/slider/select UI components in UI panel configuration
	*		@param {Number[unitless]} props.zoom - parent zoom state
	*		@param {Number[unitless]} props.zoomLevels - number of parent state zoomLevels
	*		@param {Number[unitless]} props.speed - parent speed state
	*		@param {Number[unitless]} props.speedLevels - number of parent state speedLevels
	*		@param {Boolean} props.isContinue - start/stop state
	*		@param {LifeGame~Callback} props.handleZoomChange - parent zoomChange handler
	*		@param {LifeGame~Callback} props.handleSpeedChange - parent speedChange handler
	*		@param {LifeGame~Callback} props.handleStartStop - parent start/stop handler
	*		@param {LifeGame~Callback} props.handleManualStep - parent generation increment handler
	*		@param {LifeGame~Callback} props.handleReset - parent reset handler
	*		@param {LifeGame~Callback} props.handleSave - parent save handler
	*		@returns {HTML} Game UI area
	*/
class GameUI extends React.Component {
	render() {
		return (
			<div className='gm-ui'>
				<div className='ui-sliders'>
					<ZoomSlider
						zoom={this.props.zoom}
						zoomLevels={this.props.zoomLevels}
						onChange={this.props.handleZoomChange}	/>
					<SpeedSlider
						speed={this.props.speed}
						speedLevels={this.props.speedLevels}
						onChange={this.props.handleSpeedChange}	/>
				</div>
				<div className='ui-nav-btns'>
					<StartStopBtn
						isContinue={this.props.isContinue}
						onClick={this.props.handleStartStop}	/>
					<StepBtn
						onClick={this.props.handleManualStep}
						isContinue={this.props.isContinue}	/>
				</div>
				<div className='ui-save-reset'>
					<ResetComponent onClick={this.props.handleReset}	/>
					<SaveComponent isContinue={this.props.isContinue} onClick={this.props.handleSave}	/>
				</div>
			</div>
		);
	}
}

/**
	*		@desc React Class renders game field canvasses
	*		@param {String} props.config - default undefined. Name sets field config on reset
	*		@param {Boolean} props.isContinue - Field continues to iterate while isContinue true
	*		@param {Boolean} props.reset - field resets on true
	*		@param {String} props.save - default Boolean false. Name sets local variable for save
	*		@param {Number} props.generation - current generation of simulation
	*		@param {Number} props.speed - time between iterations
	*		@param {Number} props.zoom - board zoom in parent container
	*		@param {LifeGame~Callback} props.handleResetComplete - handler to change parent reset state to default
	*		@param {LifeGame~Callback} props.handleSaveComplete - handler to change parent save state to default
	*		@param {Array.<Number[unitless]>} state.field - array with each index representing a field cell,
	*			containing a value of either 0 or 1 to represent a live or dead cell at that field position
	*		@param {Object.<Number[unitless]>} state.onesObj - keys = vals = index of all 1's in field array
	*		@param {Array.<Number[unitless]>} state.activeArr - array of all live cells and their neighbors
	*		@param {Array.<Number[unitless]>} state.uniqueArr - activeArr filtered to unique indexes
	*		@param {Array.<Number[unitless]>} state.fSize - array representing field [width, height] in px
	*		@param {Array.<Number[unitless]>} state.cZoomSize - array of cell sizes sown on canvas depending on zoom
	*		@param {Array.<String>} state.memBgPointers - array of id's for background canvasses in memory
	*		@param {Array.<String>} state.memCellPointers - array of id's for live cell canvasses in memory
	*		@param {Object} state.memGmPointers - Object with pointer to game layer canvas in memory
	*		@param {Object} state.visCanvPointers - Object with pointers to visible field canvasses
	*		@param {Object} state.bgCanvData - Object containing canvas image data for each background in memory
	*		@param {Object} state.CellCanvData - Object containing canvas image data for each cell in memory
	*		@returns {HTML} Playable game field
	*/
class Field extends React.Component {
	constructor(props) {
		super(props)
		this.initMemCanvases = this.initMemCanvases.bind(this);
		this.initVisCanvases = this.initVisCanvases.bind(this);
		this.setBackground = this.setBackground.bind(this);
		this.iterateField = this.iterateField.bind(this);
		this.handleClick = this.handleClick.bind(this);
		this.onReset = this.onReset.bind(this);
		this.fullFieldPaint = this.fullFieldPaint.bind(this);

		this.state=({
			field: [],
			activeArr: [],
			uniqueArr: [],
			onesObj: {},
			fSize: [720,540],
			cZoomSize: [3,5,9,15],
			memBgPointers: ['bg0','bg1','bg2','bg3'],
			memCellPointers: ['c0','c1','c2','c3'],
			memGmPointer: {'mem-gm-layer': {}},
			visCanvPointers: {'bg-layer': {}, 'gm-layer': {}},
			bgCanvData: {},
			cellCanvData: {},
		});
	}

	//initialize background, cell, and game layer canvas data to memory
	initMemCanvases() {
		const bgPointer = this.state.memBgPointers,
					cellPointer = this.state.memCellPointers,
					bgCanvData = {},
					cellCanvData = {},
					width = this.state.fSize[0],
					height = this.state.fSize[1],
					zoomArr = this.state.cZoomSize;

		let el = '',
				[i, j] = [0, 0];

		//init background canvases to memory
		for (i = 0; i < zoomArr.length; i++) {
			let el = bgPointer[i];
			let { imageData, imagePixData } = memBg(width, height, zoomArr[i]);
			bgCanvData[el] = {imageData, imagePixData, cZoomSize: zoomArr[i]};
		}

		//init cell canvases to memory
		for (j = 0; j < zoomArr.length; j++) {
			let el = cellPointer[j];
			let { imageData, imagePixData } = memCell(zoomArr[j]);
			cellCanvData[el] = {imageData, imagePixData, cZoomSize: zoomArr[j]};
		}

		//init game canvas to memory
		let gmCanvas = document.createElement('canvas');
		gmCanvas.id = 'mem-gm-layer';
		gmCanvas.width = width;
		gmCanvas.height = height;

		let gmCtx = gmCanvas.getContext('2d');
		gmCtx.isSmoothingEnabled = false;

		this.setState({ bgCanvData, cellCanvData, memGmPointer: { [gmCanvas.id]: {gmCanvas} } })
	}

	//initialize visible canvas pointers to class state
	initVisCanvases() {
		let pointers = {};

		for (let prop in this.state.visCanvPointers) {
			const id = prop;
			const	canvas = document.getElementById(id);
			const	ctx = canvas.getContext('2d');

			ctx.imageSmoothingEnabled = false;
			pointers[id] = { id, canvas };
		}

		this.setState({ visCanvPointers: pointers });
		this.setBackground();
	}

	//set field background based on zoom
	setBackground(zoom = this.props.zoom) {
		let canvas = document.getElementById('bg-layer');
		let ctx = canvas.getContext('2d');
		let bgPtr = this.state.memBgPointers[zoom];

		ctx.putImageData(this.state.bgCanvData[bgPtr].imageData, 0, 0);
	}

	//reset state and repaint game layer canvas
	onReset(config) {
		const field = this.state.field,
					width = this.state.fSize[0],
					height = this.state.fSize[1],
					cZoomSize0 = this.state.cZoomSize[0],
					cZoomSize = this.state.cZoomSize[this.props.zoom],
					cellPointer = this.state.memCellPointers[this.props.zoom],
					cellData = this.state.cellCanvData[cellPointer],
					memGmCanv = this.state.memGmPointer,
					onesObj = Object.assign({}, presetConfigs[config]) || {},
					len = (width / cZoomSize0) * (height / cZoomSize0),
					workArrLen = len / 10;

		let i = 0,
				j = 0;

		//if field isn't initialized, set length
		if (field.length < 1) field.length = len;

		//fill field with zeros
		while (i < len) field[i] = 0, i++;
		//set field ones from onesObj
		for (j in onesObj) field[onesObj[j]] = 1;

		//if activeArr isn't initialized, init activeArr & uniqueArr
		if (this.state.activeArr.length < 1) {
			this.state.activeArr = field.slice(0, workArrLen);
			this.state.uniqueArr = [...this.state.activeArr];
		}

		//if game canvas has been initalized, paint to canvas
		if (memGmCanv['mem-gm-layer'].gmCanvas) {
			this.fullFieldPaint(onesObj, width, height, cZoomSize0, cZoomSize, cellData, memGmCanv);
		}

		this.setState({ field, onesObj });
	}

	//toggle field cell value based on click
	handleClick(e) {
		const field = [...this.state.field],
					onesObj = this.state.onesObj,
					cellPointer = this.state.memCellPointers[this.props.zoom],
					cellData = this.state.cellCanvData[cellPointer],
					width = this.state.fSize[0],
					height = this.state.fSize[1],
					cZoomSize0 = this.state.cZoomSize[0],
					cZoomSize = this.state.cZoomSize[this.props.zoom],
					x = e.nativeEvent.offsetX,
					y = e.nativeEvent.offsetY;

		const {xStart, yStart, index} = coordToIndex(x, y, width, height, cZoomSize0, cZoomSize);

		if (field[index]) {
			field[index] = 0;
			delete onesObj["" + index];
		} else {
			field[index] = 1;
			onesObj[index] = index
		}

		let ctx = e.target.getContext('2d');
		if (field[index]) {
			ctx.putImageData(cellData.imageData, xStart, yStart);
		} else {
			ctx.clearRect(xStart, yStart, cellData.imageData.width, cellData.imageData.height);
		}
		this.setState({ field, onesObj });
	}

	//iterate one generation, update state based on simulation cell life/death rules
	iterateField() {
		const	width = this.state.fSize[0],
					height = this.state.fSize[1],
					cZoomSize0 = this.state.cZoomSize[0],
					cZoomSize = this.state.cZoomSize[this.props.zoom],
					cellPointer = this.state.memCellPointers[this.props.zoom],
					cellData = this.state.cellCanvData[cellPointer],
					memGmCanv = this.state.memGmPointer,
					cols = width / this.state.cZoomSize[0],
					rows = height / this.state.cZoomSize[0],
					field = this.state.field,
					curField = [...field];

		let onesObj = this.state.onesObj,
				activeArr = this.state.activeArr,
				uniqueArr = this.state.uniqueArr,
				len = field.length,
				aLen = activeArr.length,
				uLen = uniqueArr.length,
				seen = {},
				neighbors = 0,
				r0 = 0,
				c0 = 0,
				r1 = 0,
				c1 = 0,
				el = 0,
				g = 0,
				h = 0,
				i = 0,
				j = 0,
				k = 0,
				m = 0,
				n = 0,
				s = 0,
				t = 0;

		//set activeArr to all live cell indexes and their neighbors
		for (t in onesObj) {
			i = onesObj[t];

			r0 = i < cols ? -cols * (rows - 1) : cols;
			r1 = i + 1 > cols * (rows - 1) ? -cols * (rows - 1) : cols;
			c0 = i % cols ? 1 : -(cols - 1);
			c1 = (i + 1) % cols ? 1 : -(cols - 1);

			activeArr[s] = i;
			activeArr[s+1] = i - r0 - c0;
			activeArr[s+2] = i - r0;
			activeArr[s+3] = i - r0 + c1;
			activeArr[s+4] = i - c0;
			activeArr[s+5] = i + c1;
			activeArr[s+6] = i + r1 - c0;
			activeArr[s+7] = i + r1;
			activeArr[s+8] = i + r1 + c1;

			s += 9;
		}

		//fill seen obj with unique activeArr indexes
		while (j < s) seen[activeArr[j]] = activeArr[j], j++;
		//fill uniqueArr with unique indexes from seen obj
		for (h in seen) uniqueArr[g] = seen[h], g++;

		//calc cell val for each index uniqueArr. Set field[index] to calc'd val.
		while (k < g) {
			el = curField[uniqueArr[k]],
			i = uniqueArr[k],
			neighbors = 0;

			r0 = i < cols ? -cols * (rows - 1) : cols;
			r1 = i + 1 > cols * (rows - 1) ? -cols * (rows - 1) : cols;
			c0 = i % cols ? 1 : -(cols - 1);
			c1 = (i + 1) % cols ? 1 : -(cols - 1);

			//iterate neighbors counter if val is in onesObj
			(onesObj[i - r0 - c0]  && neighbors++);
			(onesObj[i - r0]  && neighbors++);
			(onesObj[i - r0 + c1]  && neighbors++);
			(onesObj[i - c0]  && neighbors++);
			(onesObj[i + c1]  && neighbors++);
			(onesObj[i + r1 - c0]  && neighbors++);
			(onesObj[i + r1]  && neighbors++);
			(onesObj[i + r1 + c1]  && neighbors++);

			//Cell life/death rules
			if ((el && (neighbors == 2 || neighbors == 3)) || (!el && neighbors === 3)) {
				field[uniqueArr[k]] = 1;
			} else {
			field[uniqueArr[k]] = 0;
			}
			k++;
		}

		//reset onesObj to new field one indexes
		onesObj = {}
		while (m < g) {
			if (field[uniqueArr[m]]) {
				onesObj[uniqueArr[m]] = uniqueArr[m];
			}
			m++;
		}

		this.fullFieldPaint(onesObj, width, height, cZoomSize0, cZoomSize, cellData, memGmCanv);
		this.setState({ field, onesObj});

		//if activeArr or uniqueArr has increased in length, save new array to state
		(activeArr.length > aLen && this.setState({ activeArr }));
		(uniqueArr.length > uLen && this.setState({ uniqueArr }));
	}

	//repaint game layer canvas based on current field
	fullFieldPaint(onesObj, width, height, cZoomSize0, cZoomSize, cellData, memGmCanv) {
		const imageData =
					gmLayerData(onesObj, width, height, cZoomSize0, cZoomSize, cellData, memGmCanv);

		let gmCtx = document.getElementById('gm-layer').getContext('2d');

		gmCtx.putImageData(imageData, 0, 0);
	}

	//reset and initialize memory canvasses before mount
	componentWillMount() {
		this.onReset();
		this.initMemCanvases();
	}

	//initialize visible canvasses after mount
	componentDidMount() {
		this.initVisCanvases();
	}

	//lifecycle update handler on receipt of props
	componentWillReceiveProps(nextProps) {
		if (this.props.generation !== nextProps.generation && nextProps.generation !== 0) {
			this.iterateField();
		}

		if (this.props.zoom !== nextProps.zoom) {
			this.setBackground(nextProps.zoom);
			this.fullFieldPaint(
				this.state.onesObj,
				this.state.fSize[0],
				this.state.fSize[1],
				this.state.cZoomSize[0],
				this.state.cZoomSize[nextProps.zoom],
				this.state.cellCanvData[this.state.memCellPointers[nextProps.zoom]],
				this.state.memGmPointer	);
		}

		if (nextProps.reset === true) {
			this.onReset(nextProps.config);
			this.props.handleResetComplete();
		}

		if (nextProps.save) {
			this.props.handleSaveComplete(this.state.onesObj);
		}
	}

	//lifecycle update handler -> do not re-render
	shouldComponentUpdate(nextProps, nextState) {
		return false;
	}

	render() {
		const fSize = [...this.state.fSize];

		return (
			<div id='stage' className='stage'>
				<canvas
					id='gm-layer'
					className='gm'
					width={'' + fSize[0]}
					height={'' + fSize[1]}
					onClick={this.handleClick}	/>
				<canvas
					id='bg-layer'
					className='bg'
					width={'' + fSize[0]}
					height={'' + fSize[1]}	/>
			</div>
		);
	}
}

/**
	*		@desc React Class renders game field canvasses
	*		@param {String} state.config - default undefined. Name sets field config on reset
	*		@param {Boolean} state.isContinue - Field continues to iterate while isContinue true
	*		@param {Boolean} state.reset - field resets on true
	*		@param {String} state.save - default Boolean false. Value sets local variable for save
	*		@param {Number[unitless]} state.speedLevels - number of speed levels
	*		@param {Number} props.speed - time between iterations
	*		@param {Number[unitless]} state.soomLevels - number of zoom levels
	*		@param {Number} props.zoom - current size of cells on field
	*		@param {Number} props.generation - current generation of simulation
	*		@returns {HTML} Game of Life
	*/
class LifeGame extends React.Component {
	constructor(props) {
		super(props);
		this.handleManualStep = this.handleManualStep.bind(this);
		this.handleZoomChange = this.handleZoomChange.bind(this);
		this.handleSpeedChange = this.handleSpeedChange.bind(this);
		this.handleStartStop = this.handleStartStop.bind(this);
		this.handleReset = this.handleReset.bind(this);
		this.handleResetComplete = this.handleResetComplete.bind(this);
		this.handleSave = this.handleSave.bind(this);
		this.handleSaveComplete = this.handleSaveComplete.bind(this);
		this.iterateGeneration = this.iterateGeneration.bind(this);

		this.state = {
			config: 'Clear',
			isContinue: false,
			reset: false,
			save: false,
			speedLevels: 8,
			speed: 3,
			zoomLevels: 4,
			zoom: 2,
			generation: 0,
		}
	}

	handleManualStep() {
		this.setState({ generation: this.state.generation += 1 });
	}

	handleZoomChange(zoom) {
		this.setState({ zoom });
	}

	handleSpeedChange(speed) {
		this.setState({ speed });
	}

	handleStartStop() {
		(!this.state.isContinue && window.setTimeout(this.iterateGeneration, 500 / Math.pow(this.state.speed, (5/3))));

		this.setState({ isContinue: !this.state.isContinue });
	}

	handleReset(config) {
		this.setState({ config, generation: 0, isContinue: false, reset: true });
	}

	handleResetComplete() {
		this.setState({ reset: false });
	}

	handleSave(patternName) {
		this.setState({ save: patternName });
	}

	handleSaveComplete(onesObj) {
		const name = `_username_${this.state.save}`;
		localStorage.setItem(name, JSON.stringify(onesObj));
		this.setState({ save: false });
	}

	iterateGeneration() {
		if (this.state.isContinue) {
			this.setState({ generation: this.state.generation += 1});
			window.setTimeout(this.iterateGeneration, 500 / Math.pow(this.state.speed, (5/3)));
		}
	}

	render() {

		return (
			<div className='gm-container'>
				<p className='generation'>Generation: {this.state.generation}</p>
				<Field
					config={this.state.config}
					isContinue={this.state.continue}
					reset={this.state.reset}
					save={this.state.save}
					generation={this.state.generation}
					speed={this.state.speed}
					zoom={this.state.zoom}
					handleResetComplete={this.handleResetComplete}
					handleSaveComplete={this.handleSaveComplete}	/>
				<GameUI
					zoom={this.state.zoom}
					zoomLevels={this.state.zoomLevels}
					handleZoomChange={this.handleZoomChange}
					speed={this.state.speed}
					speedLevels={this.state.speedLevels}
					handleSpeedChange={this.handleSpeedChange}
					isContinue={this.state.isContinue}
					reset={this.state.reset}
					handleStartStop={this.handleStartStop}
					handleManualStep={this.handleManualStep}
					handleReset={this.handleReset}
					handleSave={this.handleSave}	/>
			</div>
		);
	}
}

/**
	*		Static Page Components
	*/

/**
	*		@desc React Class renders page header
	*		@returns {HTML} page header
	*/
class PageHeader extends React.Component {
	shouldComponentUpdate() {
		return false;
	}
	render() {
		return (
			<div className='pg-header'>
				<h1>The Game of Life</h1>
			</div>
		);
	}
}

/**
	*		@desc React Class renders page footer
	*		@returns {HTML} page header
	*/
class PageFooter extends React.Component {
	shouldComponentUpdate() {
		return false;
	}
	render() {
		return (
			<div className='pg-footer'>
				<span>
					© 2017&nbsp;
					<a href='https://github.com/IMBurbank/game-of-life' target='_blank'>
						Isaac Burbank.
					</a>
				</span>
				<span>
					Original By&nbsp;
					<a href='https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life' target='_blank'>
						John Conway
					</a>
				</span>
			</div>
		);
	}
}

/**
	*		Full App Class
	*/

/**
	*		@desc React Class renders full page
	*		@returns {HTML} full app
	*/
class App extends React.Component {
	shouldComponentUpdate() {
		return false;
	}
	render() {
		return (
			<div className='pg'>
				<PageHeader	/>
				<div className='pg-content'>
					<LifeGame	/>
				</div>
				<PageFooter	/>
			</div>
		);
	}
}

/**
	*		Render App to DOM
	*/

/**
	*		@desc ReactDOM renders app to HTML root node
	*		@returns {DOM} full page
	*/
ReactDOM.render (
	<App />,
	document.getElementById('root')
);
