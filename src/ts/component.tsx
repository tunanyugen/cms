import * as React from 'react';
import { GlobalStateSubscriptionIndex } from './helpers/globalState';

export interface ComponentProps {
    
}
 
export interface ComponentState {
    
}
 
abstract class Component<P extends ComponentProps, S extends ComponentState> extends React.Component<P, S> {
    protected _mounted: boolean = false;
    protected _subscriptionIndices: GlobalStateSubscriptionIndex[] = [];
    componentDidMount(){
        this._mounted = true;
    }
}
 
export default Component;