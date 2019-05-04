import React, { Component } from "react";
import {
    View,
    Text,
    Alert,
    ListView,
    StyleSheet,
    SafeAreaView,
    TextInput,
    Platform,
    StatusBar,
    ScrollView,
    Image,
    Dimensions,
    Animated,
    TouchableOpacity,
    ActivityIndicator,
    Modal,
    TouchableHighlight, Button,
    FlatList
} from "react-native";
import {Icon} from "native-base";
import {Navigator} from 'react-native-deprecated-custom-components';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import MapView from "react-native-maps";
import Category from './components/Explore/Category'
import Home from './components/Explore/Home'
import Saved from "./Saved";
const { height, width } = Dimensions.get('window')

//type Props = {};
class Explore extends Component {

    state = {
        modalVisible: false,
    };

    setModalVisible(visible) {
        this.setState({modalVisible: visible});
    }

    /*constructor(props) {
        super(props);
        this.state = {
            loading: true,
            dataSource:[]
        };
    }

    componentDidMount() {
        fetch("http://35.238.205.249/newapp/imagedetail")
            .then(response => response.json())
            .then((responseJson) => {
                this.setState({
                    loading: false,
                    dataSource: responseJson
                })
            })
            .catch(error => console.log(error))
        //to catch the errors if any
    }
    GetListViewItem (name) {

        Alert.alert(name);

    }

    SearchFilterFunction(text){

        const newData = this.dataSource.filter(function(item){
            const itemData = item.name.toUpperCase();
            const textData = text.toUpperCase();
            return itemData.indexOf(textData) > -1
        });
        this.setState({
            dataSource: this.state.dataSource.cloneWithRows(newData),
            text: text
        })
    }


    ListViewItemSeparator = () => {
        return (
            <View
                style={{
                    height: .5,
                    width: "100%",
                    backgroundColor: "#000",
                }}
            />
        );
    }
*/

    componentWillMount() {

        this.scrollY = new Animated.Value(0)

        this.startHeaderHeight = 80
        this.endHeaderHeight = 50
        if (Platform.OS == 'android') {
            this.startHeaderHeight = 100 + StatusBar.currentHeight
            this.endHeaderHeight = 70 + StatusBar.currentHeight
        }

        this.animatedHeaderHeight = this.scrollY.interpolate({
            inputRange: [0, 50],
            outputRange: [this.startHeaderHeight, this.endHeaderHeight],
            extrapolate: 'clamp'
        })

        this.animatedOpacity = this.animatedHeaderHeight.interpolate({
            inputRange: [this.endHeaderHeight, this.startHeaderHeight],
            outputRange: [0, 1],
            extrapolate: 'clamp'
        })
        this.animatedTagTop = this.animatedHeaderHeight.interpolate({
            inputRange: [this.endHeaderHeight, this.startHeaderHeight],
            outputRange: [-30, 10],
            extrapolate: 'clamp'
        })
        this.animatedMarginTop = this.animatedHeaderHeight.interpolate({
            inputRange: [this.endHeaderHeight, this.startHeaderHeight],
            outputRange: [50, 30],
            extrapolate: 'clamp'
        })


    }
    /*renderItem=(data)=>
        <TouchableOpacity style={styles.list}>
            <Text>{data.item.name}</Text>
            <Text >{data.item.address}</Text>
            <Text >{data.item.price}</Text>
            <Text >{data.item.company.name}</Text></TouchableOpacity>*/
    constructor() {
        super()
        this.state = {
            dataSource : [],
            isLoading: true
        }
    }
    renderItem = (item) => {
        return(
            <TouchableHighlight
                onPress={() => {
                    this.setModalVisible(true);
                }}>
                <Category source={{uri: item.url}}
                          name={item.name}
                          price={20000}
                          id={item.id}

                />
            </TouchableHighlight>
        )

    }
    componentDidMount() {
       const url = 'http://35.238.205.249/newapp/imagedetail'
        fetch(url)
            .then(response => response.json())
            .then((responseJson) => {
                this.setState({
                    dataSource: responseJson,
                    isLoading: false
                })
            })
            .catch(error => console.log(error))
        //to catch the errors if any
    }
    render() {
       /* if(this.state.loading){
            return(
                <View style={styles.loader}>
                    <ActivityIndicator size="large" color="#0c9"/>
                </View>
            )}*/

        return (
            this.state.isLoading
            ?
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                    <ActivityIndicator size="Large" color="#330066" animating/>
                </View>
                :
            <SafeAreaView style={{flex: 1, backgroundColor: '#2a2b2d'}}>
                <View style={{flex: 1, backgroundColor: '#2a2b2d'}}>
                    <Animated.View style={{
                            height: this.animatedHeaderHeight, backgroundColor: '#2a2b2d',
                            borderBottomWidth: 1, borderBottomColor: '#dddddd'
                    }}>
                        <View style={{
                                flexDirection: 'row', padding: 10,
                                backgroundColor: 'white', marginHorizontal: 20,
                                shadowOffset: {width: '0', height: '0'},
                                shadowColor: 'black',
                                shadowOpacity: 0.2,
                                elevation: 1,
                                marginTop: Platform.OS == 'android' ? 30 : null
                        }}>
                                <Icon active name="search"/>
                                <TextInput
                                 //   onChangeText={(text) => this.SearchFilterFunction(text)}
                                   // value={this.state.text}
                                    underlineColorAndroid="transparent"
                                    placeholder="Search"
                                    placeholderTextColor="grey"
                                    style={{flex: 1, fontWeight: '700', backgroundColor: 'white', alignItems: 'center'}}
                                />

                        </View>
                        </Animated.View>
                        <ScrollView
                            scrollEventThrottle={16}
                            onScroll={Animated.event(
                                [
                                    {nativeEvent: {contentOffset: {y: this.scrollY}}}
                                ]
                            )}
                        >
                            <View style={{flex: 1, backgroundColor: 'white', paddingTop: 20}}>
                                <Text style={{fontSize: 24, fontWeight: '700', paddingHorizontal: 20}}>
                                    Recommended Apartments
                                </Text>

                                <View style={{height: 250, marginTop: 20}}>
                                    <ScrollView
                                        horizontal={true}
                                        showsHorizontalScrollIndicator={false}
                                    >
                                        <Flatlist
                                            data ={this.state.dataSource}
                                            renderItem={this.renderItem}
                                            keyExtractor={(item, index) => index}
                                        />

                                    </ScrollView>
                                </View>
                                <View style={{marginTop: 40}}>
                                    <Text style={{fontSize: 24, fontWeight: '700', paddingHorizontal: 20}}>
                                        Popular Apartments
                                    </Text>
                                    <View style={{height: 250, marginTop: 20}}>
                                        <ScrollView
                                            horizontal={true}
                                            showsHorizontalScrollIndicator={false}
                                        >
                                            <Flatlist
                                                data ={this.state.dataSource}
                                                renderItem={this.renderItem}
                                            />                                        </ScrollView>
                                    </View>
                                </View>
                                <View style={{marginTop: 40}}>
                                    <Text style={{fontSize: 24, fontWeight: '700', paddingHorizontal: 20}}>
                                        Recently added Apartments
                                    </Text>
                                    <Text style={{fontWeight: '300', marginTop: 10, paddingHorizontal: 20}}>
                                        A new selection of homes verified for quality & comfort
                                    </Text>
                                    <View style={{height: 250, marginTop: 20}}>
                                        <ScrollView
                                            horizontal={true}
                                            showsHorizontalScrollIndicator={false}
                                        >
                                            <Flatlist
                                                data ={this.state.dataSource}
                                                renderItem={this.renderItem}
                                            />
                                        </ScrollView>
                                    </View>
                                </View>
                            </View>
                        </ScrollView>

                    <Modal
                        animationType="slide"
                        transparent={false}
                        visible={this.state.modalVisible}
                        onRequestClose={() => {
                            Alert.alert('Modal has been closed.');
                        }}>
                        <ScrollView
                            scrollEventThrottle={16}
                            onScroll={Animated.event(
                                [
                                    {nativeEvent: {contentOffset: {y: this.scrollY}}}
                                ]
                            )}
                        >
                            <View style={{backgroundColor: '#2a2b2d' }}>
                                <View style={{ height: 700, width: '390', marginLeft: 10, marginRight: 10,marginTop: 10,
                                    borderWidth: 0.5, borderColor: '#dddddd' }}>
                                    <View style={{ flex: 2 }}>
                                        <Image source={require('../assets/experiences.jpg')}
                                               style={{ flex: 1, width: '390', height: 200, resizeMode: 'cover' }}
                                        />
                                    </View>
                                    <View style={{ flex: 1, paddingLeft: 10, paddingTop: 10 }}>
                                        <Text style={{ fontSize: 20, fontWeight: '700' }}>Heloo</Text>
                                        <Text style={{ fontSize: 14, fontWeight: '500' }}>Byeeee</Text>
                                    </View>

                                    <TouchableHighlight
                                        onPress={() => {
                                            this.setModalVisible(!this.state.modalVisible);
                                        }}>
                                        <View style={{height: 50,width: '100', borderWidth: 0.3, borderColor:'#dddddd',
                                            backgroundColor: '#2a2b2d'}}>
                                            <Text style={{fontSize: 16, fontWeight: '600', color: 'white'}}>Back
                                            </Text>
                                        </View>
                                    </TouchableHighlight>
                                </View>
                            </View>
                        </ScrollView>
                    </Modal>


                </View>
                </SafeAreaView>
        );
    }
}
export default Explore;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    rowViewContainer: {
        fontSize: 17,
        padding: 10
    },

    TextInputStyleClass:{

        textAlign: 'center',
        height: 40,
        borderWidth: 1,
        borderColor: '#009688',
        borderRadius: 7 ,
        backgroundColor : "#FFFFFF"

    }
});
