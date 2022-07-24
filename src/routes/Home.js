import React, { Component } from "react";
import { StyleSheet, View, ActivityIndicator } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { connect } from 'react-redux';

const mapStateToProps = state =>{
  return{
    attractions: state.attractions.attractions,
  };
};

const mapDispatchToProps = dispatch =>{
  return{
    GET_Attractions(callback) {
      dispatch({ type: 'attractions/GET_Attractions',callback})
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(
  class Home extends Component{
    state ={
      loading: true,
    }

    componentDidMount = () => {
      const callback = () => {
        this.setState({
          loading: false,
        });
      };
      this.props.GET_Attractions(callback);
    };

    handleCheckDetail = item =>{
      this.props.navigation.navigate('Detail', {data:item});
    }
    renderMapMarker = () =>{
      const { attractions } = this.props;
      
      return attractions.map(marker =>{
        return(
          <Marker
            key={marker.caseId}
            title={marker.caseName}
            description="點擊查看詳細資料"
            coordinate={{
              latitude: marker.latitude,
              longitude: marker.longitude,
            }}
            onCalloutPress={() => this.handleCheckDetail(marker)}
          />
        );
      });
    };

    render(){
      if (this.state.loading){
        return(
          <View style={styles.container}>
            <ActivityIndicator />
          </View>
        );
      } else {
        return(
          <View style={styles.container}>
            <MapView
              style={styles.mapView}
              initialRegion={{
                latitude: 24.1705382,
                longitude: 120.6079343,
                latitudeDelta: 4,
                longitudeDelta: 4,
              }}>  
              {this.renderMapMarker()}              
            </MapView>
          </View>
        )
      }      
    }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapView:{
    width:'100%',
    height:'100%'
  },
});