import  { createStore, combinedReducers } from 'redux';

export const ConfigureStore = () => {
    const store = createStore(
        combinedReducers({

        })
    );

    return store;
}