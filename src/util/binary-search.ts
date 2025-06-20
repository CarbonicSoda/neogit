export function binarySearch(
	lower: number,
	upper: number,
	compare: (bisect: number) => number,
): number | undefined {
	while (lower <= upper) {
		const bisect = Math.floor((lower + upper) / 2);
		const result = compare(bisect);

		if (result === 0) {
			return bisect;
		}
		if (result > 0) {
			lower = bisect + 1;
		} else {
			upper = bisect - 1;
		}
	}

	return undefined;
}
