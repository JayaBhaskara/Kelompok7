import { StyleSheet } from "react-native";

export default StyleSheet.create({
    mainContainer:{
        flexDirection: "column",
        flex: 1,
        backgroundColor:"black"
    },

    headerContainer:{
        flex: 1,
        justifyContent: "center",
        marginLeft: 10,
        marginRight:10
    },

    accessibilityPaddingContainer:{
        alignItems:'center',
        height: 70,
        justifyContent:'center',
    },

    // style modal
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
      },
    modalView: {
        margin: 20,
        backgroundColor: "black",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        borderColor: 'white',
        borderWidth: 3
      },
      button: {
        borderRadius: 5,
        padding: 10,
        width: 100,
        margin: 15
      },
      buttonAction: {
        backgroundColor: "grey",
      },
      buttonDelete: {
        backgroundColor: "#A21318"
      },
      textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
      },
      modalText: {
        marginBottom: 15,
        textAlign: "center",
        fontSize: 25,
        color: 'white'
      },
    //   style modal

    accessibilityPaddingText:{
        fontSize: 35,
        fontWeight:'bold',
        color:'white'
    },

    headerText:{
        color:'white',
        fontSize: 25,
        fontWeight: 'bold',
    },

    contentContainer:{
        flex:14,
    },

    postProfileContainer:{
        flexDirection:'row',
        alignItems:"center",
        height: 55,
        paddingLeft: 10,
    },

    postProfileImage:{
        height: 40,
        width: 40,
    },

    postbutton: {
        backgroundColor: 'black',
        width: '100%',
        padding: 15,
        marginVertical: 5,
        alignItems: 'center',
        borderColor: '#e8e8e8',
        borderWidth: 2,
        borderRadius: 5,

    },

    buttontext: {
        fontWeight: 'bold',
        color: 'white',
        fontSize: 16
    },

    textbox: {
        backgroundColor: 'white',
        width: '100%',
        borderColor: '#e8e8e8',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 10,
        marginVertical: 10,
    },

    postProfileUsername:{
        fontSize: 18,
        color: "white",
        fontWeight: "bold",
        paddingLeft: 10
    },

    postDate:{
        fontSize: 12,
        color: "white",
        paddingLeft: 10
    },

    postContentImage:{
        width:'100%',
        height:393
    },

    postCaptionContainer:{
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 20
        // height: 100,
    },

    postCaption:{
        fontSize: 17,
        color:'white',
        textAlign:'justify'
    },

    bottomTabContainer:{
        flex: 1,
    },

    bottomTab:{
        flexDirection:"row",
        height:'92%',
        alignItems:'center',
        justifyContent:'space-evenly',
        marginLeft:10,
        marginRight:10,
    },

    bottomTabIcon:{
        width:30,
        height:30,
        marginTop:"10%"
    },

    bottomTabIndicator:{
        flexDirection:"row",
        marginLeft:10,
        marginRight:10,
        justifyContent:'space-evenly',
        alignItems:'flex-start'
    },

    touchableOpacity:{
        paddingTop:"1%",
        paddingBottom:"1%",
        paddingLeft:"4%",
        paddingRight:"4%"
    },

    searchBoxContainer:{
        flex: 1.6,
        alignItems:'center',
        justifyContent:'center',
        marginLeft:10,
        marginRight:10,
        marginBottom:10,
    },

    exploreContentContainer:{
        flex:28,
    },

    bottomTabContainer_Search:{
        flex:2
    },

    bottomTab_Search:{
        flexDirection:'row',
        height:'92%',
        alignItems:'center',
        justifyContent:'space-evenly',
        marginLeft:10,
        marginRight:10
    },

    profileUsernameContainer:{
        alignItems:'center',
        height: 55,
        justifyContent:'flex-end',
    },

    profileName:{
        color:'white',
        fontSize: 20,
        fontWeight: 'bold'
    },

    profileUsername:{
        color:'white',
        fontSize:17
    },

    profilePhotoContainer:{
        flexDirection:'row',
        alignItems:"center",
        height: 150,
        paddingLeft: 10,
    },

    profilePhoto:{
        marginTop: 20,
        borderRadius: 100,
        height: 130,
        width: 130,
    },

    root: {
        flex: 1,
        alignItems: 'center',
        padding: 20,
    },






//Style Profile
    profile: {
      top:10,
      width: 150, 
      height:150,
      borderRadius:100, 
      resizeMode:"center", 
    },
    baseText: {
      fontWeight: 'bold',
      marginTop: 20,
      color:'white',
  
    },
    innerText: {
      marginTop: 20,
      color:'white',
    },
    note: {
      marginTop: 15, 
      flexDirection: 'column',
    }
})