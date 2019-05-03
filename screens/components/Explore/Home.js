import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image
} from "react-native";
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import StarRating from 'react-native-star-rating'

class Home extends Component {
    render() {
        return (
            <View style={{ width: this.props.width / 2 - 30, height: this.props.width / 2 - 30, borderWidth: 0.5, borderColor: '#dddddd' }}>
                <View style={{ flex: 1 }}>
                    <Image
                        style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
                        source={require('../../../assets/experiences.jpg')} />
                </View>
                <View style={{ flex: 1, alignItems: 'flex-start', justifyContent: 'space-evenly', paddingLeft: 10 }}>
                    <Text style={{ fontSize: 10, color: '#b63838' }}>Ben</Text>
                    <Text style={{ fontSize: 12, fontWeight: 'bold' }}>Wellawate</Text>
                    <Text style={{ fontSize: 10 }}>552522$</Text>
                    <StarRating
                        disable={false}
                        maxStars={5}
                        rating={this.props.rating}
                        starSize={10}

                    />
                </View>
            </View>
        );
    }
}
export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
