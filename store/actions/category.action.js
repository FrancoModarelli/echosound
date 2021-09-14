export const SELECT_CATEGORY = 'SELECT_CATEROGY'

export const selectCategory = ( id ) => ({
    type: SELECT_CATEGORY,
    categoryID: id,
})