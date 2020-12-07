import React from 'react';
import _ from 'lodash';

const cc = require('cryptocompare')

export const AppContext = React.createContext();

const MAX_FAVORITES = 10; 

export class AppProvider extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            page: 'dashboard',
            favorites: ['BTC', 'ETH', 'ZEC', 'XRP'],
            ...this.savedSettings(),
            setPage: this.setPage,
            addCoin: this.addCoin,
            removeCoin: this.removeCoin,
            confirmFavorites: this.confirmFavorites
        }
    }
    componentDidMount = () => {
        this.fetchCoins()
    }

    fetchCoins = async () => {
        let coinList = (await cc.coinList()).Data;
        this.setState({coinList});
    }

    addCoin = key => {
        let favorites = [...this.state.favorites];
        if(favorites.length < MAX_FAVORITES){
            favorites.push(key);
            this.setState({favorites});
        }
    }

    removeCoin = key => {
        let favorites = [...this.state.favorites];
        this.setState({favorites: _.pull(favorites, key)})
    }

    confirmFavorites = () => {
        this.setState({
            firstVisit: false,
            page: 'dashboard'
        });
        localStorage.setItem('cryptoDash', JSON.stringify({
            test: 'hello'
        }));
    }

    savedSettings(){
        let cryptoDashboard = JSON.parse(localStorage.getItem('cryptoDash'));
        if (!cryptoDashboard){
            return {page: 'settings', firstVisit: true}

        }
        return {};
    }
    setPage = page => this.setState({page})

    render(){
        return(
            <AppContext.Provider value={this.state} >
                {this.props.children}
            </AppContext.Provider>
        )
    }
}