import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    Button
} from "react-native";
import Saved from "../../Saved";
import Explore from "../../Explore";

class Category extends Component {
    render() {
        return (
            <View style={{ height: 250, width: 250, marginLeft: 20, borderWidth: 0.5, borderColor: '#dddddd' }}>
                <View style={{ flex: 2 }}>
                    <Image source={this.props.source}
                           style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
                    />
                </View>
                <View style={{ flex: 1, paddingLeft: 10, paddingTop: 10 }}>
                    <Text style={{ fontSize: 16, fontWeight: '300' }}>{this.props.name}</Text>
                    <Text style={{ fontSize: 14, fontWeight: 'bold' }}>Rs:{this.props.price}</Text>
                    <View style={{paddingTop: 2, height: 5 , width: 240, paddingRight: 10}}>
                        <Button color='#2a2b2d' title= "View" />
                    </View>
                </View>
            </View>
        );
    }
}
export default Category;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});