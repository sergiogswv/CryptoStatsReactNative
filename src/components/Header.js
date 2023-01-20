import { useCallback } from 'react';
import { View, Text, Pressable, StyleSheet, Linking, Alert } from 'react-native'

export default function header({url, name}) {
  const handlePress = useCallback(async () => {
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  }, [url]);
  
  return (
    <View style={styles.header}>
      <Text style={styles.title}>
        Discover,
        <Text style={styles.subtitle}> collect and sell {name}</Text>
      </Text>
      <Pressable onPress={() => handlePress()} style={styles.button}>
        <Text style={styles.btnInfo}>More Information</Text>
      </Pressable>
    </View>
  );
}

export const styles = StyleSheet.create({
  header: {
    width: "80%",
    marginHorizontal: "50%",
    marginTop: 30,
    flex: 1,
  },
  title: {
    color: "rgb(67, 56, 202)",
    fontSize: 45,
    paddingBottom: 10,
  },
  subtitle: {
    color: "#fff",
  },
  button: {
    backgroundColor: "#818cf8",
    borderRadius: 10,
    width: 200,
    marginTop: 10,
    height: 30,
    marginHorizontal: 75,
  },
  btnInfo: {
    textAlign: "center",
    color: "#fff",
    marginVertical: 5,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
});