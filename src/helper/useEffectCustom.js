import { useEffect } from "react";
import ifMany from "./ifMany";
import indexForJSX from "./options/indexForJSX";
import none from "./options/none";

export function useEffectCustom({
	startWithIndex,
	staticValue,
	times,
	Block,
	props,
	children,
	options,
	setJSX,
	many = false
}) {
	useEffect(() => {
		const { roof, intoArray } = ifMany({
			many,
			Block,
			staticValue,
			options,
			times
		});

		const args = {
			startWithIndex,
			Block,
			props,
			children,
			intoArray,
			roof,
			options,
			staticValue
		};

		const data = staticValue
			? indexForJSX({
					isTrue: options ? options.indexForJSX : true,
					...args
			  })
			: none(args);

		return () => setJSX(prev => [...prev, data]);
	}, []);
}
