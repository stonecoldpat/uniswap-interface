import { createAction } from '@reduxjs/toolkit'

export const newEstimate = createAction<{ fast: string }>('newEstimate')
