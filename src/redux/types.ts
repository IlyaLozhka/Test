export interface GenericAction<T = void> {
	type: string;
	payload: T;
}

export type PayloadAction<T, P> = {
	type: T;
	payload: P;
};
