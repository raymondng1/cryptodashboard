import React from 'react';
import { SelectedTile, DeletableTile, DisabledTile } from '../Shared/Tile';
import {AppContext} from '../App/AppProvider';
import CoinHeaderGrid from './CoinHeaderGrid';
import CoinImage from '../Shared/CoinImage';
import { add } from 'lodash';

function clickCoinHandler(topSection, coinKey, addCoin, removeCoin){
    return topSection ? () => {
        removeCoin(coinKey)
    } : () => {
        addCoin(coinKey)
    }
}
export default function({coinKey, topSection}){

    const TileClass = SelectedTile
    return <AppContext.Consumer> 
        {({coinList, addCoin, removeCoin}) => {
            let coin = coinList[coinKey];

            let TileClass = SelectedTile;
            if(topSection){
                TileClass = DeletableTile;
            }

            return <TileClass
            onClick={clickCoinHandler(topSection, coinKey, addCoin, removeCoin)}>
               <CoinHeaderGrid topSection={topSection} name={coin.CoinName} symbol={coin.Symbol}/>
               <CoinImage coin={coin}/>
            </TileClass>
        }}
    </AppContext.Consumer>
}