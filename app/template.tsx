"use client"

import { Tile } from "@/components/tile";
import { animate, stagger } from "animejs";
import { useEffect } from "react";

export default function Template({ children }: { children: React.ReactNode}) {
	const rows = 12;
	const cols = 20;

	useEffect(() => {
		animate('#transitionTile', {
			//borderRadius: 64,
			opacity: 0,
			height: 0,
			delay: stagger(10, {start: 600}),
		})	
	}, [])

	return (
		<div>
			{/* <div className="w-full grid grid-cols-20 h-screen overflow-y-clip fixed z-10">
				{Array.from({ length: rows * cols }, (_, i) => {
					const row = Math.floor(i / cols);
					const col = i % cols;
					return (
						<Tile
							key={i} 
							row={row} 
							col={col} 
							wavePosition={0}
						/>
					);
				})}
			</div> */}
			<div className="w-full flex flex-col h-screen overflow-y-clip fixed z-10">
				{Array.from({ length: rows }, (_, row) => (
					<div key={row} className="w-full grid grid-cols-20 h-screen">
						{Array.from({ length: cols }, (_, col) => (
							<Tile
								key={row * cols + col}
								row={row}
								col={col}
								wavePosition={0}
							/>
						))}
					</div>
				))}
			</div>	
			{children}
		</div>
	)
}