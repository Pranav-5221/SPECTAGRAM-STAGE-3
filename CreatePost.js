import React, { Component } from 'react';
import { SafeAreaView, ScrollView, Text, TextInput, View } from 'react-native';

export default class CreatePost extends Component {
    render() {
        return (
            <View style ={styles.container}>
                <SafeAreaView style = {styles.droidSafeArea} />
                <View style = {styles.appTitle}>
                    <View style = {styles.appIcon}>
                        <Image 
                        source ={require("..assetes/logo.png")}
                        style = {styles.iconImage}>

                        </Image>

                    </View>
                    <View style = {styles.appTitleTextContainer}>

                        <Text style = {styles.appTitleText}>New Post</Text>

                    </View>

                </View>
                <View style = {styles.feildsContainer}>
                    <ScrollView>
                        <Image>
                            source={preveiw_images[this.state.preveiwImage]}
                            style = {styles.preveiwImage}
                        </Image>
                        <View style={{height:
                        RFValue(this.state.dropdownHeight)  }}>

                            <DropDownPicker>
                                items{[

                                    {label:"Image_1" , value: "image_1"},
                                    {label:"Image_2" , value: "image_2"},
                                    {label:"Image_3" , value: "image_3"},
                                    {label:"Image_4" , value: "image_4"},
                                    {label:"Image_5" , value: "image_5"},
                                    {label:"Image_6" , value: "image_6"},
                                    {label:"Image_7" , value: "image_7"}

                                ]}
                               defaultValue={this.state.preveiwImage}

                               containerStyle={{
                                   height :40,
                                   borderRadius : 20,
                                   marginBottom : 10
                               }}

                               onOpen={() => { 
                                   this.setState({dropdownHeight:170});
                               }}

                               onClose={() => {
                                   this.setState({dropdownHeight:40});
                               }}

                               style={{backgroundColor : "transparent"}}

                               itemStyle={{
                                   justifyContent :"flex-start"
                               }}
                               dropDownStyle={{backgroundColor : "#2a2a2a"}}

                               labelStyle={{color : "white"}}

                               onChangeItem={item => 
                               this.setState({
                                   preveiwImage : item.value
                               })
                               }

                            </DropDownPicker>

                        </View>

                    <TextInput 
                    style={styles.inputFont}
                    onChangeText={catption => this.setState({catption})}
                    placeholder={"Caption"}
                    placeholderTextColor="white"
                    />
                        
                   

                    </ScrollView>
                    
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "black"
    },
    droidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : RFValue(35)
    },
    appTitle: {
        flex: 0.07,
        flexDirection: "row"
    },
    appIcon: {
        flex: 0.2,
        justifyContent: "center",
        alignItems: "center"
    },
    iconImage: {
        width: "100%",
        height: "100%",
        resizeMode: "contain"
    },
    appTitleTextContainer: {
        flex: 0.8,
        justifyContent: "center"
    },
    appTitleText: {
        color: "white",
        fontSize: RFValue(28),
    },
    cardContainer: {
        flex: 0.85
    }
});