import './App.css';

import Main from './components/Main';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">
        <Main />
      </div>
      <div className="self-center">
      </div>
    </div>
  );
}

export default App;
