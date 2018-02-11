const setIndicatorValue = (name, value) => {
    return {
        type:'SET_INDICATOR_VALUE',
        name,
        value
    };
}
export { setIndicatorValue }