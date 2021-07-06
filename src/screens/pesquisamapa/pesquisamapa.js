import React, {useState} from 'react';
import {View, Text} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import lugares from '../../../assets/data/feed';
import MarcadorCustom from '../../components/marcador';
import PostCarrossel from "../../components/PostCarrossel";

const PesquisaMapa = () => {
  const [LugarSelecionadoId, setLugarSelecionadoId] = useState(null);

  return (
    <View>
      <MapView
        style={{width: '100%', height: '100%'}}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: 28.3915637,
          longitude: -16.6291304,
          latitudeDelta: 0.8,
          longitudeDelta: 0.8,
        }}>
        {lugares.map(place => (
          <MarcadorCustom
            isSelected={place.id === LugarSelecionadoId}
            coordinate={place.coordinate}
            price={place.novpreco}
            onPress={() => setLugarSelecionadoId(place.id)}
          />
        ))}
      </MapView>
      <View style={{position: 'absolute', bottom: 40}}>
        <PostCarrossel post={lugares[0]} />
      </View>
    </View>
  );
};

export default PesquisaMapa;
