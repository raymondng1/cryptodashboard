import './App.css';
import WelcomeMessage from './WelcomeMessage'
import AppLayout from './AppLayout'
import AppBar from './AppBar'

function App() {
  return (
    <AppLayout>
      <AppBar/>
      <div></div>
      <WelcomeMessage/>
    </AppLayout>

  );
}

export default App;
