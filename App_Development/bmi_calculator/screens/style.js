import { StyleSheet } from "react-native";

export default StyleSheet.create({
    KeyboardAvoidingViewContainer:{
        width: "90%",
    },
    label: {
        marginBottom: 10,
        marginTop: 10,
      },
      input: {
        borderColor: 'gray',
        borderWidth: 0.5,
        padding: 10,
        borderRadius: 5,
        // marginBottom: 10,
        // marginTop: 10,
      },

      row:{
        flexDirection: 'row',
        justifyContent: 'center', 
        alignItems: 'center'
      },
      authBtn : {
        marginBottom: 10,
        marginTop: 10,
      }
})