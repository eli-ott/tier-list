/**
 * Api interface
 */
export interface ApiResponse {
	/** Les plats */
	meals: [
		/** L'id du meal */
		idMeal: string,
		/** The string of the meal */
		strMeal: string,
		/** The string of the meal image */
		strMealThumb: string
	];
}
