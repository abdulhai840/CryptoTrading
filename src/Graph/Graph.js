import React from 'react';
import TradingViewWidget, { Themes } from 'react-tradingview-widget';

const Graph = () => {
    return (
        <React.Fragment>
            <div className="row">
                <TradingViewWidget
                    symbol="NASDAQ:AAPL"
                    theme={Themes.DARK}
                    locale="en"
                    toolbar_bg= "#f1f3f6"
                    enable_publishing= {false}
                    withdateranges= {true}
                    hide_side_toolbar= {false}
                    allow_symbol_change= {true}
                    details={true}
                    hotlist={true}
                    calendar={true}
                    // watchlist=[SP:SPX]
                /> 
            </div>
        </React.Fragment>
    )
}

export default Graph;