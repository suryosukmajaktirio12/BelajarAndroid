import { Text, View StyleSheet} from "react-native";

export const CustomeCard = () => {
  return (
    <View>
      < View style={StyleSheet.container}>
      <View style={styles.leftbox}>
      <Text style={styles}>Suryo Sukma Jakti </Text>
      <Text> jaktisuryo@gmail.com</Text>
      </View>
      <View>
        <Text> 2 </Text>
      </View>
    </View>
   

  );
};

const style=Stylesheet.create({
  container:{
    display: 'flex',
    flexDirection:'row',
    backgroundColor:'white',
    padding:25
    borderRadius:10,
    borderBlockColor:'gray',

  },
  leftbox:{
    flex:2,
  },
  leftox:{
    flex:1,
  },
  title:{
    fontsize:16,
    fontWeight:'bold',

  },
  subtitle:{
    fontSize:14,
    color:'gray',
  },
  number:{
    fontSize:24,
    color
    textAlign:'center',
  }
});