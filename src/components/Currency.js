import { StyleSheet, Text, View } from 'react-native'
import { SvgFromUri, SvgXml } from 'react-native-svg';
import { xml } from './platform';
import * as Animatable from 'react-native-animatable'

export default function Currency({icon}) {
  return (
    <View style={styles.platform}>
      <Animatable.View
        animation="slideInDown"
        iterationCount={"infinite"}
        direction="alternate"
        style={styles.icon}
      >
        <View style={styles.platform}>
          <SvgFromUri
            uri={icon}
            width="500%"
            height={"500%"}
          />
        </View>
      </Animatable.View>
      <SvgXml xml={xml} width="80%" height={"90%"} />
    </View>
  );
}

const styles = StyleSheet.create({
  platform: {
    flex: 1,
    resizeMode: 'contain',
    width: "75%",
    alignItems: 'center',
    height: 500,
  },
  icon:{
    flex: 1,
    alignItems: 'center',
    width: '100%',
    zIndex: 9
  }
})