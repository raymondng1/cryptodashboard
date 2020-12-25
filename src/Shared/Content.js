import React from 'react';
import {AppContext} from "../App/AppProvider";

export default function(props){
    return <AppContext.Consumer>
        {({coinList, prices, firstVisit}) => {
            if(!coinList){
                return <div> Loading Cryptocurrency Coins</div>
            }
            if(!firstVisit && !prices){
                return <div> Loading Cryptocurrency Prices </div>
            }
            return <div> {props.children}</div>
        }}
    </AppContext.Consumer>
}