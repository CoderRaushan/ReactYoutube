//  1.st step => import {createStore} from "redux";

import {createStore} from "redux";


const InitialValue={
    counter:0,
    privacy:false,
}

// 2nd. create Reducer  function
const CounterReducer=(store=InitialValue,action)=>
{
    switch(action.type)
    {
        case 'Increment':
            return { ...store, counter: store.counter + 1 }; 
        case "Decrement":
            return { ...store, counter: store.counter - 1 };
        case "ADD":
            return { ...store, counter: store.counter + action.payload};
        case "SUB":
            return { ...store, counter: store.counter - action.payload};
        case "Privacy":
            return {...store,privacy: !store.privacy};
        default:
            return store;
    }
}
// 3rd handOver Reducer to the createStore and export it;
const counterStore=createStore(CounterReducer);
export default counterStore;

// 4th. In the main.jsx file do this step=> 
// Providing the store with react 
// i. import { Provider } from "react-redux";
// ii. <Provider store={store}> <App/> </Provider>


// 5th how to use store 
// using the store
// i. useSelector hook gets a slice of the store 
// ii. const counter= useSelector(state=>state.counter)

//6th Dispatch the action form component to store 
//i. import {useDispatch} from "react-redux";
//ii. const dispatch=useDispatch(); ///return function as dispatch
//iii. send distpatch=> dispatch({type:"Increment"}) in a function.