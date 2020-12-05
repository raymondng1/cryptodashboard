import { AppContext } from "../App/AppProvider";

function WelcomeMessage () {
    return (
      <AppContext.Consumer>
        {({firstVist}) => 
        firstVist ? <div> 
          Welcome to CryptoDash, please select your favorite coints to being.{''}
        </div> : null}
      </AppContext.Consumer>
    );
  }

export default WelcomeMessage;