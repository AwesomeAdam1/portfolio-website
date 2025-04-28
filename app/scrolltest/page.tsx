'use client'

import { animate, onScroll } from 'animejs';
import { useEffect } from 'react';

export default function Scroll() {

	useEffect(() => {
		animate('#box', {
			x: '15rem',
			rotate: '1turn',
			duration: 2000,
			alternate: true,
			loop: true,
			ease: 'inOutQuad',
			autoplay: onScroll({
				target: '#target',
				enter: '70% 0%',
				leave: '30% 100%',
				debug: true
			})
		});
	}, [])

	return (
		<div className="bg-slate-300 h-screen" id="container">
			<div className="bg-green-500 h-screen">
				
			</div>
			<div className="bg-sky-500 h-100" id="target">
				<div className="h-10 w-10 bg-amber-300" id="box">
					Box
				</div>
			</div>
			<div className="bg-red-500 p-4 h-screen">
				
			</div>
		</div>
		
	)
}
