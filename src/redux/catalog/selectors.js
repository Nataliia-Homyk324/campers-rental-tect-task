export const selectAllCampers = state => state.catalog.campers;

export const selectIsLoading = state => state.catalog.isLoading;

export const selectError = state => state.catalog.error;

export const selectHasMore = state => state.catalog.hasMore;


export const selectCamper = state => state.catalog.selectedCamper;

export const selectIsLoadingCamper = state => state.catalog.isLoadingCamper;

export const selectErrorCamper = state => state.catalog.errorCamper;
