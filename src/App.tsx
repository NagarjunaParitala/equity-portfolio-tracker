import { ConfigProvider } from 'antd';
import './App.css';
import LoginComponent from './components/LoginComponent';
import AppLayout from './components/AppLayout';
import { Route, Routes } from 'react-router-dom';
import StockPriceChart from './components/StocksPriceChart';


function App() {
  return (
    <ConfigProvider theme={{ token: { colorPrimary: '##195c98' } }}>
    <div className="App">
      <Routes>
        <Route path='/' element={<LoginComponent/>}></Route>
        <Route path='/home' element={<AppLayout/>}></Route>
        <Route path='/stockprice' element={<StockPriceChart/>}></Route>
      </Routes>
    </div>
    </ConfigProvider>
  );
}

export default App;
