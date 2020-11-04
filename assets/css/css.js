import {StyleSheet} from 'react-native'

const css = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    containerTop:{
        justifyContent:'flex-start'
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
},
area__title:{
    width: '80%',
    fontWeight:'bold',
    fontSize:20,
    color:'#fff',
    textAlign:'center'
},
button__logout:{
    textAlign:'right'
},
area__menu:{
    flexDirection: 'row',
    paddingTop: 40,
    paddingBottom: 10,
    width: '100%',
    backgroundColor:'#111',
    alignItems:'center',
    justifyContent:'center'
},
button__home2:{
    textAlign:'left'
}
  });


  export {css};