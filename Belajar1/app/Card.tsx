import { Text, View, StyleSheet } from "react-native";
import { Link } from "expo-router";

export const CustomerCard = (props: any) => {
  return (
    <Link href={props.path} style={styles.container}>
      <View style={styles.leftbox}>
        <Text style={styles.title}>{props.nama} </Text>
        <Text>{props.description} </Text>
      </View>
      <View style={styles.rightbox}>
        <Text style={styles.number}>2 </Text>
      </View>
    </Link>
  );
};
