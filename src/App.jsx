import { useState } from 'react';
import './App.css';
import InputBox from './components/InputBox';
import useCurrencyInfo from './hooks/useCurrencyInfo'; 

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState('usd');
  const [to, setTo] = useState('inr');
  const [convertedAmount, setConvertedAmount] = useState(0);
  
  const currencyInfo = useCurrencyInfo(from); 

  const options = Object.keys(currencyInfo);

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };

  const reset = ()=>{
    setAmount(0)
    setConvertedAmount(0)
  }
  return (
    <div className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat" 
    style={{ backgroundImage: `url("https://www.desktopbackground.org/download/1680x1050/2013/03/15/545208_falling-money-wallpapers-high-quality-resolution-62d-wallpey_1920x1080_h.jpg")` }}>
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form onSubmit={(e) => { e.preventDefault(); convert(); }}>
            <div className="w-full mb-1">
              <InputBox
                label="From"
                amount={amount}
                currencyOptions = {options}  
                onCurrencyChange={(currency) => setFrom(currency)}
                selectCurrency={from}
                onAmountChange={(amount) => setAmount(amount)}
              />
            </div>
            <div className="relative w-full h-0.5">
              {/* Swap Button */}
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                amount={convertedAmount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setTo(currency)}
                selectCurrency={to}
              />
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-800">
              Convert 
            </button>
          </form>
      <button className='w-6/12 h-12 mt-2 bg-gray-900 text-white px-4 py-3 rounded-lg hover:bg-gray-400 hover:text-black' onClick={reset}>reset</button>
        </div>
      </div>
    </div>
  );
}

export default App;
