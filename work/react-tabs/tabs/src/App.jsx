import Tabs from './Tabs';

function App() {

  const map = {
    Beijing : 'Capital of China',
    Tokyo : 'Capital of Japan',
    Paris : 'Capital of France',
    London : 'Capital of England',
    Earth : 'A plant in the Universe :)',
  }

  return (
    <div className="app_tab">
        <Tabs map={map}/>
    </div>
  );
}
    
export default App;
