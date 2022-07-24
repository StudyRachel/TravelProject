import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import MaterialCommunityIconsIcon from 'react-native-vector-icons/MaterialCommunityIcons';


export default class Detail extends Component {  
    render(){
        const locate = this.props.route.params.data;
        return (
            <View style={styles.container}>
                <View style={styles.container}>
                    <Image
                        style={styles.container}
                        source={{ uri: locate.representImage }}
                    />
                    <View style={styles.content}>
                        <ScrollView>
                            <Text style={styles.title}>{locate.caseName}</Text>
                            <Text style={styles.item}>
                                <MaterialCommunityIconsIcon size={16} name="map-marker" />
                                位置：{locate.belongAddress}
                            </Text>
                            <Text style={styles.item}>
                                <MaterialCommunityIconsIcon size={16} name="application" />
                                地點描述：{locate.briefDescribe}
                            </Text>
                            {locate.specialValue === ' ' || locate.specialValue === undefined ? null : (
                                <Text style={styles.item}>
                                    <MaterialCommunityIconsIcon size={16} name="ticket" />
                                    特殊價值：{locate.specialValue}
                                </Text>
                            )}
                        </ScrollView>
                    </View>
                </View>                
            </View>
        );
    }; 
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    content:{
        flex: 0.9,
        padding: 12,
    },
    title:{
        marginBottom: 4,
        lineHeight: 22,
        fontSize: 18,
        fontWeight: 'bold',
    },
    item:{
        marginTop: 4,
        marginBottom: 4,
        lineHeight: 20,
        fontSize: 14,
    },
});