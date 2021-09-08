import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import BackArrowHeader from '../../components/BackArrowHeader';
import Header from '../../components/MainHeader';
import Images from '../../constants/Images';

export default class offers extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const data = [
      {
        id: '0',
        image: Images.offerImage1,
      },
      {
        id: '1',
        image: Images.offerImage2,
      },
      {
        id: '2',
        image: Images.offerImage3,
      },
      {
        id: '3',
        image: Images.offerImage1,
      },
      {
        id: '5',
        image: Images.offerImage2,
      },
      {
        id: '6',
        image: Images.offerImage3,
      },
    ];
    return (
      <View style={styles.main}>
                <BackArrowHeader navigation={this.props.navigation} />
        <View style={{padding: 15}}>
          <FlatList
            data={data}
            showsVerticalScrollIndicator={false}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
              <View style={{marginTop: Theme.hp('2%')}}>
                <Image
                  source={item.image}
                  resizeMode="cover"
                  style={{height: 130, width: '100%'}}
                />
              </View>
            )}
          />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
});
