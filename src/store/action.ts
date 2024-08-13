import {createAction} from '@reduxjs/toolkit';

export const currentCity = createAction<{nameCity: string }>('currentCity');
