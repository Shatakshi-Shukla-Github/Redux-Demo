// const redux = require("redux");
// const produce = require("immer").produce
// const { createStore } = require("redux")
// const STREET_UPDATED = "STREET_UPDATED"
// const initialState = {
//     name: "Vishwas",
//     address: {
//         street: "123 Main St",
//         city: "Boston",
//         state: "MA"
//     }
// }

// function updateStreet(street) {
//     return {
//         type: STREET_UPDATED,
//         payload: street
//     }
// }

// const reducer = (state = initialState, action) => {
//     switch (action.type) {
//         case STREET_UPDATED:
//             return produce(state, (draft) => {
//                 draft.address.street = action.payload
//             })
//         default: {
//             return state
//         }
//     }
// }

// const store = createStore(reducer)
// console.log("Initial State ", store.getState())
// const unsubscribe = store.subscribe(() => {
//     console.log("Updated State: ", store.getState())
// })
// store.dispatch(updateStreet("456 Park Ave"))
// unsubscribe()


// //immer library is used to handle nested state updates in redux. It allows you to work with immutable state in a more convenient way by using a "draft" state that can be modified directly, and then it produces a new immutable state based on those modifications. In this example, when the STREET_UPDATED action is dispatched, the reducer uses produce to create a new state with the updated street value while keeping the rest of the state unchanged.