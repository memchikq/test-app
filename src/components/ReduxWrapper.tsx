'use client'
import { Provider } from 'react-redux';
import store from '../redux/index';


function ReduxWrpaeer({ children }: { children: React.ReactNode }){

    return(
        <Provider store={store}>
            {children}
        </Provider>
    )
}

export {ReduxWrpaeer}