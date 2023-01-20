import { StyleSheet, SafeAreaView, View } from "react-native";
import Header from "./src/components/Header";
import Currency from "./src/components/Currency";
import Stats from "./src/components/Stats";
import DropDownPicker from "react-native-dropdown-picker";
import { useState, useEffect } from "react";

export default function App() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('Qwsogvtv82FCd');
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [data, setData] = useState({})
  const [items, setItems] = useState([
    {label: 'BTC', value: 'Qwsogvtv82FCd', fullName: 'Bitcoin'},
    {label: 'ETH', value: 'razxDUgYGNAdQ', fullName: 'Ethereum'},
    {label: 'BNB', value: 'WcwrkfNI4FUAe', fullName: 'BNB'},
    {label: 'XRP', value: '-l8Mn2pVlRs-p', fullName: 'XRP'},
    {label: 'BUSD', value: 'vSo2fu9iE1s0Y', fullName: 'Binance USD'},
    {label: 'ADA', value: 'qzawljRxB5bYu', fullName: 'Cardano'},
    {label: 'DOGE', value: 'a91GCGd_u96cF', fullName: 'Dogecoin'},
  ]);

  useEffect(() => {
    const api = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://coinranking1.p.rapidapi.com/coin/${value}`,
          {
            method: "GET",
            headers: {
              "X-RapidAPI-Key":
                "003896da6dmshaa2b82df3143a6ep11ce54jsnf30c848f45a9",
              "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
            },
          }
        );
        const cripto = await response.json();
        setData({
          ...data,
          name: cripto.data.coin.name,
          iconUrl: cripto.data.coin.iconUrl,
          price: cripto.data.coin.price,
          coinrankingUrl: cripto.data.coin.coinrankingUrl,
          change: cripto.data.coin.change,
        });
      } catch (error ) {
        setError(error.message);
        // console.log(error)
      }
      setLoading(false);
    } 
    
    api()
    
  }, [value])
  

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.menu}>
        <DropDownPicker
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
          multiple={false}
        />
      </View>
      <View style={styles.container}>
        <Header url={data.coinrankingUrl} name={data.name} />

        <Currency icon={data.iconUrl}/>

        <Stats change={data.change} price={data.price}/>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#c094e9",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  menu: {
    width: '75%',
    paddingTop: 50
  }
});
