import {StyleSheet} from 'react-native'

const css = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    textPage:{
        backgroundColor: 'gold',
        padding:20
    },container2: {
      flex: 1,
      flexDirection:'row',
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
  },
  button__home:{
      marginRight: 40
  },
  textInput:{
      marginTop:20,
      borderColor:'black',
      borderWidth:2,
      width:350,
      alignSelf:'center',
      textAlign:'center' 
  },
  container__centralizado:{
      alignContent:'center',
      marginTop:200
  },
  darkbg:{
    backgroundColor:"#333"
},
login__logomarca:{
    marginBottom: 10
},
login__msg:(text='none')=>({
    fontWeight:"bold",
    fontSize: 22,
    color:"#C0C0C0",
    marginBottom: 15,
    display: text
}),
login__form:{
    width: "80%"
},
login__input:{
    backgroundColor: "#fff",
    fontSize: 19,
    padding: 7,
    marginBottom: 15
},
login__button:{
    padding: 12,
    textAlign:'center',
    backgroundColor: "#F58634",
    alignSelf:"center",
    borderRadius:5
},
login__buttonText:{
    textAlign:'center',
    width: '40%',
    fontWeight:"bold",
    fontSize: 22,
    color:"#333"
}
  });


  export {css};