const redux = require('redux');
const { createStore } = require("redux")
const CAKE_ORDERED = "CAKE_ORDERED";
const CAKE_RESTOCKED = "CAKE_RESTOCKED";
//Action
function orderCake() {
    return {
        type: CAKE_ORDERED,
        quantity: 1
    }
}
function restockCake(qunatity) {
    return {
        type: CAKE_RESTOCKED,
        payload: qunatity,
    }
}

const initialState = {
    numOfCakes: 10
}

//Reducer
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case CAKE_ORDERED:
            return {
                ...state,
                numOfCakes: state.numOfCakes - 1
            }
        case CAKE_RESTOCKED:
            return {
                ...state,
                numOfCakes: state.numOfCakes + action.payload
            }
        default:
            return state
    }
}

const store = createStore(reducer)
console.log("Initial state", store.getState())

const unsubscribe = store.subscribe(() => console.log("Updated State ", store.getState()))

store.dispatch(orderCake())
store.dispatch(orderCake())
store.dispatch(orderCake())

store.dispatch(restockCake(3))
unsubscribe()


//Complete Flow of Redux
//User wants a cake
//        ↓
// orderCake()
//        ↓
// Action Creator
//        ↓
// { type: CAKE_ORDERED, quantity: 1 }
//        ↓
// store.dispatch(action)
//        ↓
// Redux sends action + current state
//        ↓
// Reducer
//        ↓
// New State
// { numOfCakes: 9 }
//        ↓
// Store updates
//        ↓
// Subscribed listener runs
//        ↓
// getState()
//        ↓
// { numOfCakes: 9 }

//#Note:- subscribe() returns a function and that returned function isstored in unsubscribe.

//#Note:- orderCake() is the action creator . The object it returns is the action. This action is then passed to Reducer for processing. The reducer simply calculates the new state. When the reducer calculates the new state , the Store updates its state and then the listener registered by subscribe() will be notified and thereby the getState() inside this listener will give you the current state.
// In our case listener registered by subscribe() is this:- "() => console.log("Updated State ", store.getState())" and inside this listener there is a getState() which will give you the current state of the store. So when we dispatch an action , the reducer calculates the new state and then the listener registered by subscribe() will be notified and thereby the getState() inside this listener will give you the current state. 