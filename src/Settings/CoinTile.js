import React from 'react';
import { SelectedTile, DeleteableTile, DisabledTile } from '../Shared/Tile';
import {AppContext} from '../App/AppProvider';
import CoinHeaderGrid from './CoinHeaderGrid';
import CoinImage from '../Shared/CoinImage';

export default function({coinKey, topSection}){

    const TileClass = SelectedTile
    return <AppContext.Consumer> 
        {({coinList}) => {
            let coin = coinList[coinKey];

            let TileClass = SelectedTile;
            if(topSection){
                TileClass = DeleteableTile;
            }

            return <TileClass>
               <CoinHeaderGrid topSection={topSection} name={coin.CoinName} symbol={coin.Symbol}/>
               <CoinImage coin={coin}/>
            </TileClass>
        }}
    </AppContext.Consumer>
}