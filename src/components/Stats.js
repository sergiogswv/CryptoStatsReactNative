import { StyleSheet, Text, View } from 'react-native'

export default function Stats({change, price}) {
  return (
    <View style={styles.container}>
      <View style={styles.infoStats}>
        <Text style={[styles.stats, styles.price]}>${price.slice(0,2)}K+</Text>
        <Text style={[styles.stats, styles.fullPrice]}>${Number(price).toFixed(2)} USD</Text>
      </View>
      <View style={styles.infoStats}>
        <Text style={[styles.change, {color: change < 1 ? '#f00' : '#008f39'  }]}>{change}</Text>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 3,
    flexDirection: 'row',
    width: '100%',
    alignContent: 'center',
    position: 'absolute',
    bottom: 0,
  },
  infoStats:{
    marginLeft: '15%',
    flexDirection: 'column',
    alignItems: 'center',
  },
  stats: {
    color: '#fff'
  },
  price: {
    fontSize: 40
  },
  fullPrice: {
    fontSize: 20
  },
  change: {
    color: '#f00',
    fontSize: 40
  }
})