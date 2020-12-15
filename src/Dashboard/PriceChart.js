import highchartsConfig from './HighchartsConfig';
import React from 'react';
import {Tile} from '../Shared/Tile';
import {AppContext} from '../App/AppProvider';
import ReactHighCharts from 'react-highcharts';
import HighchartsTheme from './HighchartsTheme';

ReactHighCharts.Highcharts.setOptions(HighchartsTheme)

export default function (){
    return (
        <AppContext.Consumer>
            {({}) => 
            <Tile>
                <ReactHighCharts config={highchartsConfig()}/>
            </Tile>
            }
        </AppContext.Consumer>
    )
}