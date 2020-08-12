const actions = {
    dispatchCount(state, val) {  
        state.commit('commitCount', val)
    },
}
export default actions