import { AppContext } from "../App/AppProvider";

function WelcomeMessage () {
    return (
      <AppContext.Consumer>
        {({firstVist}) => 
        firstVist ? <div> 
          Welcome to Crypto Dashboard, please select your favorite cryptocurrency coins to begin.{''}
        </div> : null}
      </AppContext.Consumer>
    );
  }

export default WelcomeMessage;