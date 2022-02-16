import './App.css';
import Header from './components/Header';
import{useState,useEffect} from 'react'
import axios from 'axios'
import PunkList from './components/PunkList';
import Main from './components/Main';

function App() {
  const [punkListData,setPunkListData]=useState([]);
  const [selectedPunk,setSelectedPunk]=useState(0);

  useEffect(()=>{
    const getMyNfts=async()=>{
    const openseaData=await axios.get('https://testnets-api.opensea.io/api/v1/assets?asset_contract_address=0x3287E8E96706Bc3f5138c60411bE277Df9E753a1&order_direction=asc&offset=0&limit=20')

    console.log('open',openseaData.data.assets);
    setPunkListData(openseaData.data.assets);
    }
    return getMyNfts();

  },[]);


  return (
    <div className="app">
      <Header/>
      {
        punkListData.length > 0 && (
          <>
          <Main punkListData={punkListData} selectedPunk={selectedPunk} />
          <PunkList punkListData={punkListData} setSelectedPunk={setSelectedPunk}/>
          </>
        )
      }

      {/* {console.log(punkListData)} */}
      

    </div>
    
  )}

export default App;
