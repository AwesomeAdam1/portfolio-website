'use client';

import { Tile } from "@/components/tile"
import { useEffect, useState } from "react"

export default function Grid() {
	const [wavePosition, setWavePosition] = useState(0);
	const rows = 12;
	const cols = 20;

	useEffect(() => {
		const interval = setInterval(() => {
			setWavePosition((prev) => {
				if (prev >= rows + cols - 2) {
					return 0;
				}
				return prev + 1;
			});
		}, 250);

		return () => clearInterval(interval);
	}, []);

	return (
		<div className="w-full relative">
			<div className="w-full grid grid-cols-20 h-screen overflow-y-clip">
				{Array.from({ length: rows * cols }, (_, i) => {
					const row = Math.floor(i / cols);
					const col = i % cols;
					return (
						<Tile 
							key={i} 
							row={row} 
							col={col} 
							wavePosition={wavePosition} 
						/>
					);
				})}
			</div>
		</div>
	)
}