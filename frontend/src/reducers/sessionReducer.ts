interface DefaultStateI {

}

const defaultState: DefaultStateI = {

}

const sessionReducer = (state: DefaultStateI = defaultState, action: any): DefaultStateI => {

    return state;
};

export default sessionReducer;

