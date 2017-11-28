import React from 'react';

const PlayerDisplay = props => {
	return (
		<div>
			<div className="player player__main player__main--action">
				<input
					className={`player__main--input ${props.selector}`}
					placeholder={props.inputText}
				/>
			</div>
			{props.buttonAction && (
				<div>
					<button
						className="player player__action button button--final"
						onClick={() => props.buttonAction(props.buttonParam)}
					>
						Done
					</button>
				</div>
			)}
		</div>
	);
};

export default PlayerDisplay;
