interface TileProps {
	row: number;
	col: number;
	wavePosition: number;
}

export const Tile = ({ row, col, wavePosition }: TileProps) => {
	const distance = row + col;
	const isInWave = distance === wavePosition;
	
	return (
		// <div 
		// 	className={`aspect-square outline-2 outline-blue-400 ${
		// 		isInWave ? 'bg-blue-800' : 'bg-amber-200'
		// 	}`}
		// 	id="transitionTile"
		// />
		<div className="outline-1 h-full w-full">
			<div 
				id="transitionTile" 
				className="aspect-square bg-amber-300"
			></div>
		</div>
	)
}