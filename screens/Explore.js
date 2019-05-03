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
    TouchableHighlight, Button
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
    render() {
        return (
            <SafeAreaView style={{flex: 1, backgroundColor: '#2a2b2d'}}>
                <View style={{flex: 1, backgroundColor: '#2a2b2d'}}>
                    <Animated.View style={{
                            height: this.animatedHeaderHeight, backgroundColor: '#2a2b2d',
                            borderBottomWidth: 1, borderBottomColor: '#dddddd'
                    }}>
                        <View style={{
                                flexDirection: 'row', padding: 10,
                                backgroundColor: 'white', marginHorizontal: 20,
                                shadowOffset: {width: 0, height: 0},
                                shadowColor: 'black',
                                shadowOpacity: 0.2,
                                elevation: 1,
                                marginTop: Platform.OS == 'android' ? 30 : null
                        }}>
                                <Icon active name="search"/>
                                <TextInput
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
                                        <TouchableHighlight
                                            onPress={() => {
                                                this.setModalVisible(true);
                                            }}>
                                            <Category source={require('../assets/home.jpg')}
                                                      name="Span"
                                                      price={252222}

                                            />
                                        </TouchableHighlight>

                                        <TouchableHighlight
                                            onPress={() => {
                                                this.setModalVisible(true);
                                            }}>
                                            <Category source={require('../assets/home.jpg')}
                                                  name="Ben"
                                                  price={252222}
                                            />
                                        </TouchableHighlight>

                                        <TouchableHighlight
                                            onPress={() => {
                                                this.setModalVisible(true);
                                            }}>
                                            <Category source={require('../assets/home.jpg')}
                                                  name="Victoria"
                                                  price={252222}
                                             />
                                        </TouchableHighlight>

                                        <TouchableHighlight
                                            onPress={() => {
                                                this.setModalVisible(true);
                                            }}>
                                            <Category source={require('../assets/home.jpg')}
                                                  name="Rush"
                                                  price={252222}
                                            />
                                        </TouchableHighlight>

                                        <TouchableHighlight
                                            onPress={() => {
                                                this.setModalVisible(true);
                                            }}>
                                            <Category source={require('../assets/home.jpg')}
                                                  name="Blue Ocean"
                                                  price={252222}
                                            />
                                        </TouchableHighlight>

                                        <TouchableHighlight
                                            onPress={() => {
                                                this.setModalVisible(true);
                                            }}>
                                            <Category source={require('../assets/home.jpg')}
                                                  name="KenTower"
                                                  price={252222}
                                            />
                                        </TouchableHighlight>
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
                                            <TouchableHighlight
                                                onPress={() => {
                                                    this.setModalVisible(true);
                                                }}>
                                                <Category source={require('../assets/home.jpg')}
                                                          name="Span"
                                                          price={252222}

                                                />
                                            </TouchableHighlight>

                                            <TouchableHighlight
                                                onPress={() => {
                                                    this.setModalVisible(true);
                                                }}>
                                                <Category source={require('../assets/home.jpg')}
                                                          name="Ben"
                                                          price={252222}
                                                />
                                            </TouchableHighlight>

                                            <TouchableHighlight
                                                onPress={() => {
                                                    this.setModalVisible(true);
                                                }}>
                                                <Category source={require('../assets/home.jpg')}
                                                          name="Victoria"
                                                          price={252222}
                                                />
                                            </TouchableHighlight>

                                            <TouchableHighlight
                                                onPress={() => {
                                                    this.setModalVisible(true);
                                                }}>
                                                <Category source={require('../assets/home.jpg')}
                                                          name="Rush"
                                                          price={252222}
                                                />
                                            </TouchableHighlight>

                                            <TouchableHighlight
                                                onPress={() => {
                                                    this.setModalVisible(true);
                                                }}>
                                                <Category source={require('../assets/home.jpg')}
                                                          name="Blue Ocean"
                                                          price={252222}
                                                />
                                            </TouchableHighlight>

                                            <TouchableHighlight
                                                onPress={() => {
                                                    this.setModalVisible(true);
                                                }}>
                                                <Category source={require('../assets/home.jpg')}
                                                          name="KenTower"
                                                          price={252222}
                                                />
                                            </TouchableHighlight>
                                        </ScrollView>
                                    </View>
                                </View>
                                <View style={{marginTop: 40}}>
                                    <Text style={{fontSize: 24, fontWeight: '700', paddingHorizontal: 20}}>
                                        Recently added Apartments
                                    </Text>
                                    <Text style={{fontWeight: '100', marginTop: 10, paddingHorizontal: 20}}>
                                        A new selection of homes verified for quality & comfort
                                    </Text>
                                    <View style={{height: 250, marginTop: 20}}>
                                        <ScrollView
                                            horizontal={true}
                                            showsHorizontalScrollIndicator={false}
                                        >
                                            <TouchableHighlight
                                                onPress={() => {
                                                    this.setModalVisible(true);
                                                }}>
                                                <Category source={require('../assets/home.jpg')}
                                                          name="Span"
                                                          price={252222}

                                                />
                                            </TouchableHighlight>

                                            <TouchableHighlight
                                                onPress={() => {
                                                    this.setModalVisible(true);
                                                }}>
                                                <Category source={require('../assets/home.jpg')}
                                                          name="Ben"
                                                          price={252222}
                                                />
                                            </TouchableHighlight>

                                            <TouchableHighlight
                                                onPress={() => {
                                                    this.setModalVisible(true);
                                                }}>
                                                <Category source={require('../assets/home.jpg')}
                                                          name="Victoria"
                                                          price={252222}
                                                />
                                            </TouchableHighlight>

                                            <TouchableHighlight
                                                onPress={() => {
                                                    this.setModalVisible(true);
                                                }}>
                                                <Category source={require('../assets/home.jpg')}
                                                          name="Rush"
                                                          price={252222}
                                                />
                                            </TouchableHighlight>

                                            <TouchableHighlight
                                                onPress={() => {
                                                    this.setModalVisible(true);
                                                }}>
                                                <Category source={require('../assets/home.jpg')}
                                                          name="Blue Ocean"
                                                          price={252222}
                                                />
                                            </TouchableHighlight>

                                            <TouchableHighlight
                                                onPress={() => {
                                                    this.setModalVisible(true);
                                                }}>
                                                <Category source={require('../assets/home.jpg')}
                                                          name="KenTower"
                                                          price={252222}
                                                />
                                            </TouchableHighlight>
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

                                <View style={{ height: 700, width: 390, marginLeft: 10, marginRight: 10,marginTop: 10, borderWidth: 0.5, borderColor: '#dddddd' }}>
                                    <View style={{ flex: 2 }}>
                                        <Image source={require('../assets/experiences.jpg')}
                                               style={{ flex: 1, width: 390, height: 200, resizeMode: 'cover' }}
                                        />
                                    </View>
                                    <View style={{ flex: 1, paddingLeft: 10, paddingTop: 10 }}>
                                        <Text style={{ fontSize: 20, fontWeight: '300' }}>Heloo</Text>
                                        <Text style={{ fontSize: 14, fontWeight: 'bold' }}>Byeeee</Text>
                                    </View>

                                    <TouchableHighlight
                                        onPress={() => {
                                            this.setModalVisible(!this.state.modalVisible);
                                        }}>

                                            <Button color='#2a2b2d' title= "Back" />

                                    </TouchableHighlight>
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
    }
});
