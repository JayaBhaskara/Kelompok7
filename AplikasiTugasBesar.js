import React, {useEffect, useState} from 'react';
import {RefreshControl, Text, View, ScrollView, Image, Pressable, Button, TextInput, Alert, TouchableOpacity, SafeAreaView, Modal} from 'react-native';
import extStyle from './AplikasiTugasBesar_style';
import { NavigationContainer } from '@react-navigation/native'; 
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AddPost from './AddPost';
import CustomButton from './CustomButton';
import SignInScreen from './SignInScreen';
import SignUpScreen from './SignUpScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// const stackNavigate = () => { 
//     return ( 
//         <NavigationContainer> 
//           <Stack.Navigator screenOptions={{headerShown: false}}> 
//             <Stack.Screen name="PostDetail" component={postDetail} />
//           </Stack.Navigator> 
//         </NavigationContainer> 
//     ); 
// } 



const App = () => {
    return(
    <>
    <NavigationContainer>
        <Tab.Navigator 
        screenOptions={({ route }) => ({
        //Logika untuk indikator page yang sedang aktif pada bottom tab navigation
            tabBarIcon: ({ focused }) => {
                let iconName, iconColor;

                if(route.name === 'Feeds'){
                    iconName = 'home';  //Nama icon
                    iconColor = focused? 'white' : 'grey'; //Putih jika tab sedang dipilih, grey jika sebaliknya
                }else if(route.name === 'Post'){
                    iconName = 'edit';  //Nama icon
                    iconColor = focused? 'white' : 'grey'; //Putih jika tab sedang dipilih, grey jika sebaliknya
                }else if(route.name === 'Profile'){
                    iconName = 'user';  //Nama icon
                    iconColor = focused? 'white' : 'grey'; //Putih jika tab sedang dipilih, grey jika sebaliknya
                }

                return <FontAwesome5 name={iconName} color={iconColor} size={26} />
            },
            headerShown: false,
            tabBarHideOnKeyboard: true,
            tabBarStyle:{backgroundColor: 'black', height: '7%'}
                      })}
        initialRouteName='Feeds'>
                <Tab.Screen
                name="Post"
                component={Post}
                options={{tabBarLabel:""}} //deskripsi bottom tab navigation
                />

                <Tab.Screen 
                name="Feeds"
                component={Feeds}
                options={{tabBarLabel: ""}} //deskripsi bottom tab navigation
                />
                
                <Tab.Screen
                name="Profile"
                component={Profile}
                options={{tabBarLabel: ""}} //deskripsi bottom tab navigation
                />

        </Tab.Navigator>

    </NavigationContainer>
   
    </>
    )
}



export default App


const Feeds = ({navigation}) => {
    
    const wait = (timeout) => {
        return new Promise(resolve => setTimeout(resolve, timeout));
      }
    const [data, setData] = useState([]);
    const [username, setUsername] = useState([]);
    const [refreshing, setRefreshing] = React.useState(false);

    const getData = async () => {
        try {
            const response = await fetch('http://10.0.2.2:3000/posts/');
            const json = await response.json();
            setData(json.data);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getData();
        }, []);
    

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        getData();
        wait(2000).then(() => setRefreshing(false));
    }, []);

    return(
        
        <View style={extStyle.mainContainer}>
            

            <View style={extStyle.headerContainer}>
                <Text style={extStyle.headerText}>FaceBio</Text>

            </View>


            <View style={extStyle.contentContainer} >
                <ScrollView 
                    showsVerticalScrollIndicator={false}
                    refreshControl={
                        <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                        />}
                >

                    <View style={extStyle.accessibilityPaddingContainer}>
                    <Text style={extStyle.accessibilityPaddingText}>Feeds</Text>
                    </View>

                        {
                            data.map((item) => (
                                <>
                                
                                <View style={extStyle.postProfileContainer}>
                                    <Image style={extStyle.postProfileImage}  source={{uri: 'http://10.0.2.2:3000/images/daviddark100.png'}} />
                                    
                                    <View>
                                    <Text style={extStyle.postProfileUsername}>{item.username}</Text>
                                    <Text style={extStyle.postDate}>{item.post_date}</Text>
                                    </View>
                                </View>

                                
                                <View style={extStyle.postCaptionContainer}>
                                    <Text style={extStyle.postCaption}>{item.post}</Text>
                                </View>
                                </>
                            ))
                        }
                        
                        
                    

                    {/* <View>
                        <Image style={extStyle.postContentImage} source={require("./images/PostPic1.jpg")} />
                    </View> */}





                    {/* <View style={extStyle.postProfileContainer}>
                        <Image style={extStyle.postProfileImage}  source={require("./images/ProfilePic1.jpg")} />
                        <Text style={extStyle.postProfileUsername}>Henry William</Text>
                    </View>

                    <View>
                        <Image style={extStyle.postContentImage} source={require("./images/PostPic1.jpg")} />
                    </View>

                    <View style={extStyle.postCaptionContainer}>
                        <Text style={extStyle.postCaption}>
                            Hey, look at my new WC Toilet! I just bought a brand new
                            VR Bathroom's VR-1011. It has Dual Flush and Soft Close
                            Action lid for only $300! What do you think? I can't wait
                            to try it out! sdjfklsajfklsd jfsdkjfd sdakfjsd jfksadjf ksdjklfjfsdjfklsdajf sdafj ksaljfls akjfd
                        </Text>
                    </View>



                    <View style={extStyle.postProfileContainer}>
                        <Image style={extStyle.postProfileImage}  source={require("./images/ProfilePic1.jpg")} />
                        <Text style={extStyle.postProfileUsername}>Henry William</Text>
                    </View>

                    <View>
                        <Image style={extStyle.postContentImage} source={require("./images/PostPic1.jpg")} />
                    </View>

                    <View style={extStyle.postCaptionContainer}>
                        <Text style={extStyle.postCaption}>
                            Hey, look at my new WC Toilet! I just bought a brand new
                            VR Bathroom's VR-1011. It has Dual Flush and Soft Close
                            Action lid for only $300! What do you think? I can't wait
                            to try it out!
                        </Text>
                    </View>



                    <View style={extStyle.postProfileContainer}>
                        <Image style={extStyle.postProfileImage}  source={require("./images/ProfilePic1.jpg")} />
                        <Text style={extStyle.postProfileUsername}>Henry William</Text>
                    </View>

                    <View>
                        <Image style={extStyle.postContentImage} source={require("./images/PostPic1.jpg")} />
                    </View>

                    <View style={extStyle.postCaptionContainer}>
                        <Text style={extStyle.postCaption}>
                            Hey, look at my new WC Toilet! I just bought a brand new
                            VR Bathroom's VR-1011. It has Dual Flush and Soft Close
                            Action lid for only $300! What do you think? I can't wait
                            to try it out!
                        </Text>
                    </View> */}
                </ScrollView>
            </View>
        </View>


    )
}


const Post = () => {
    const [post, setPost] = useState('');

    const onPostPressed = () =>{
        Alert.alert('Posted');
        saveData()
    }

    const saveData = async () => {
        try {
            const response = await fetch('http://10.0.2.2:3000/posts/', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username: 'halofarid06',
                    post: post
                })
            });
            //const json = await response.json();
            //setData(json.data);
        } catch (error) {
            console.error(error);
        }
    }

    return(
        <View style={extStyle.mainContainer}>
        
            <View style={extStyle.exploreContentContainer}>
                <ScrollView showsVerticalScrollIndicator={false}>
        
                    <View style={extStyle.accessibilityPaddingContainer}>
                        <Text style={extStyle.accessibilityPaddingText}>Create Post</Text>
                    </View>
        
                    <View style={extStyle.textbox}>
                        <TextInput 
                            onChangeText = {text => setPost (text)}
                            value = {post}
                            placeholder = "What's on your mind?"
                            editable
                            maxLength = {300}
                            multiline
                            numberOfLines = {4}
                        />
                    </View>
        
                    <Pressable onPress={onPostPressed} style={extStyle.postbutton}>
                            <Text style={extStyle.buttontext}>Post</Text>
                    </Pressable>
        
                </ScrollView>
            </View>

        </View>
    )
}

const Profile = () => {
    const wait = (timeout) => {
        return new Promise(resolve => setTimeout(resolve, timeout));
      }
    
    const [edit, setEdit] = useState('');

    const onEditPressed = () =>{
        Alert.alert('Updated');
        updateData();
    }
    
    const [actionModalVisible, setActionModalVisible] = useState(false);
    const [editModalVisible, setEditModalVisible] = useState(false);
    const [deleteModalVisible, setDeleteModalVisible] = useState(false);
    const [data, setData] = useState([]);
    const [username, setUsername] = useState("halofarid06");
    const [refreshing, setRefreshing] = React.useState(false);
    let itemId;
    const [textInputPost, setTextInputPost] = useState("");
    const [isLoading, setLoading] = useState(true);
    const [postDate, setPostDate] = useState("");
    const [postMessage, setPostMessage] = useState("");
      
    const getData = async () => {
        try {
            const response = await fetch('http://10.0.2.2:3000/posts/username/'+username);
            const json = await response.json();
            setData(json.data);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }
    
    const updateData = async () => {
        try {
            const response = await fetch('http://10.0.2.2:3000/posts/id/'+itemId, {
                method: 'PUT',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username: 'halofarid06',
                    post: post
                })
            });
        } catch (error) {
            console.error(error);
        } 
    }
    useEffect(() => {
        getData();
    }, []);
        const deleteData = async () => {
            try {
            const response = await fetch('http://10.0.2.2:3000/posts/id/'+itemId, {method:
            'DELETE'});
            }

            catch (error) {
                console.error(error);
            }
        }
    

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        getData();
        wait(2000).then(() => setRefreshing(false));
    }, []);
    
        return (
            <ScrollView
                style={{backgroundColor: 'black'}}
                refreshControl={
                    <RefreshControl
                    refreshing={refreshing}
                    onRefresh={onRefresh}
                    />}
            >
            
            <View style={{alignItems: 'center'}}>
                        <Image style={extStyle.profilePhoto}  source={{uri: 'http://10.0.2.2:3000/images/daviddark100.png'}} />
                        </View>

                        <View style={extStyle.profileUsernameContainer}>
                            <Text style={extStyle.profileName}>{username}</Text>
                            <Text style={extStyle.profileUsername}>@{username}</Text>
                        </View>

                        <View>
                            <Text style={{color: 'white', fontSize: 25, marginTop: 20, marginBottom: 20}}>My Posts</Text>
                        </View>
            
            {/* Modal Action */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={actionModalVisible}
                onRequestClose={() => {
                setActionModalVisible(!actionModalVisible);
                }}
            >

            <View style={extStyle.centeredView}>
                <View style={extStyle.modalView}>
                    <Text style={extStyle.modalText}>Actions</Text>
            
            <Pressable
              style={[extStyle.button, extStyle.buttonAction]}
              onPress={() => {setActionModalVisible(!actionModalVisible); setEditModalVisible(true)}}
            >
              <Text style={extStyle.textStyle}>Edit Post</Text>
            </Pressable>
            
            <Pressable
              style={[extStyle.button, extStyle.buttonAction]}
              onPress={() => {setActionModalVisible(!actionModalVisible); setDeleteModalVisible(true)}}
            >
              <Text style={extStyle.textStyle}>Delete Post</Text>
            </Pressable>
                </View>
            </View>
            </Modal>

            {/* Modal Edit */}
            <Modal
                animationType="slide"
                transparent={false}
                visible={editModalVisible}
                onRequestClose={() => {
                setEditModalVisible(!editModalVisible);
                }}
            >


            {/* DISINI DIISI FORMULIR POST */}
            <View style={extStyle.mainContainer}>
        
                <View style={extStyle.exploreContentContainer}>
                    <ScrollView showsVerticalScrollIndicator={false}>
    
                        <View style={extStyle.accessibilityPaddingContainer}>
                            <Text style={extStyle.accessibilityPaddingText}>Edit Post</Text>
                        </View>
    
                        <View style={extStyle.textbox}>
                            <TextInput 
                                onChangeText = {text => setEdit (text)}
                                value = {edit}
                                placeholder = "Type here..."
                                editable
                                maxLength = {300}
                                multiline
                                numberOfLines = {4}
                            />
                        </View>
    
                        <Pressable onPress={onEditPressed} style={extStyle.postbutton}>
                                <Text style={extStyle.buttontext}>Edit</Text>
                        </Pressable>
    
                    </ScrollView>
                </View>

            </View>
            
            {/* <View style={extStyle.centeredView}>
                <View style={extStyle.modalView}>
                    <Text style={extStyle.modalText}>Actions</Text>
            
            <Pressable
              style={[extStyle.button, extStyle.buttonClose]}
              onPress={() => {setActionModalVisible(!actionModalVisible); setEditModalVisible(true)}}
            >
              <Text style={extStyle.textStyle}>Edit Post</Text>
            </Pressable>
            
            <Pressable
              style={[extStyle.button, extStyle.buttonClose]}
              onPress={() => {setActionModalVisible(!actionModalVisible); setDeleteModalVisible(true)}}
            >
              <Text style={extStyle.textStyle}>Delete Post</Text>
            </Pressable>
          </View>
        </View> */}
            </Modal>
      
            {/* Modal Delete */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={deleteModalVisible}
                onRequestClose={() => {
                setDeleteModalVisible(!deleteModalVisible);
                }}
            >

            <View style={extStyle.centeredView}>
                <View style={extStyle.modalView}>
                    {/* //Delete Post Confirmation */}
                    <Text style={extStyle.modalText}>Are you sure about deleting this post?</Text>
            
            {/* //Yes Button to DELETE the Post */}
            <Pressable
              style={[extStyle.button, extStyle.buttonDelete]}
              onPress={() => {
                deleteData()
                setDeleteModalVisible(!deleteModalVisible);
              }}
            >
              <Text style={extStyle.textStyle}>YES</Text>
            </Pressable>
            
            
            {/* //No Button to CANCEL the delete action */}
            <Pressable
              style={[extStyle.button, extStyle.buttonAction]}
              onPress={() => setDeleteModalVisible(!deleteModalVisible)}
            >
              <Text style={extStyle.textStyle}>NO</Text>
            </Pressable>
                </View>
            </View>
      </Modal>

            {
                data.map((item) => (
                    <>
                    <TouchableOpacity onPress={() => {setActionModalVisible(true); itemId=item.post_id}}>
                        <SafeAreaView>
                            <Text style={extStyle.postProfileUsername}>{item.username}</Text>
                            <Text style={extStyle.postDate}>{item.post_date}</Text>
                        </SafeAreaView>

                                
                        <View style={extStyle.postCaptionContainer}>
                            <Text style={extStyle.postCaption}>{item.post}</Text>
                        </View>

                    </TouchableOpacity>
                    </>
                            ))
                        }
            </ScrollView>
          );
}  



























        // <View style={extStyle.mainContainer}>

        //     <View style={extStyle.exploreContentContainer}>
        //         <ScrollView showsVerticalScrollIndicator={false}>

                // <View style={extStyle.profileUsernameContainer}>
                //     <Text style={extStyle.profileName}>Henry William</Text>
                //     <Text style={extStyle.profileUsername}>@hennwill</Text>
                // </View>

        //         <View style={extStyle.profilePhotoContainer}>
        //             <Image style={extStyle.profilePhoto}  source={require('./images/ProfilePic1.jpg')} />
        //         </View>






        //     </ScrollView>
        // </View>




        // {/* <View style={extStyle.searchBoxContainer}>
        //     <Button 
        //         title="Add a Post"
        //         onPress={() => {Alert.alert("Sorry, FaceBio is under construction right now.")}}
        //         color="grey"
        //     />

        // </View> */}

        // </View>
