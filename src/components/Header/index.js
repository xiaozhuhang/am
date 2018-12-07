import React, { Component } from 'react';
import './style.css';

//不同游戏余额列表（下拉选择框）
const gamesBalances = [
    {
        id:0,
        gameName:"棋牌游戏",
        gamesBalance:23232.21,
    },
    {
        id:1,
        gameName:"电子游戏",
        gamesBalance:2232.21,
    },
    {
        id:2,
        gameName:"棋牌游戏",
        gamesBalance:1232.21,
    },
    {
        id:3,
        gameName:"体育竞技",
        gamesBalance:6232.21,
    },
    {
        id:4,
        gameName:"真人视讯",
        gamesBalance:23232.21,
    }
];
const listGameBalances = gamesBalances.map((gamesBalances) => <li className="f12 clearfix" key={gamesBalances.id}><span className="fl col2">{gamesBalances.gameName}</span><span className="fr col3">￥{gamesBalances.gamesBalance}</span></li>);

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show_default:"第三方余额",
            showHideStatu:false
        };
    }

    render() {
            const url= "abc";
            
        return (
            <div className="header">
                <div className="container">
                    <div className="header_top_home fl">
                        <icon className="home fl"></icon>
                        <a href={url} className="col1 f12" >首页</a>
                    </div>
                    <div className="header_top_name fl">
                        <icon className="fl game_name"></icon>
                        <a href={url}  className="col2 f13">ab153232</a>
                    </div>
                    <div className="header_top_balance_show fl">
                        <a href={url}  className="col3 f13">￥&nbsp;20123.00</a>
                    </div>
                    <div className="header_top_total_other_select fl">
                        <div className="header_top_other_select_default_show col2 f12" onClick={this.selectGamesBalance}>{this.state.show_default}<icon className="down"></icon></div>
                        {this.state.showHideStatu ? this.selectGamesBalanceBox() : null}
                    </div>
                </div>    
            </div>
        );
    }

    selectGamesBalanceBox(){
       return(
        <div className="header_top_other_select_list"><ul className="clearfix">{listGameBalances}</ul></div>
       )
    }
    //选择显示隐藏游戏余额下拉框
    selectGamesBalance = () => {
        this.setState({
            showHideStatu : !this.state.showHideStatu
        })
    }
}

export default Header;