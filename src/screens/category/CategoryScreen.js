import React, {useState, useEffect} from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import Theme from './../../utils/Theme';
import Header2 from './../../components/Header2';
import {category} from '../../utils/staticContent';
import {List} from 'react-native-paper';

const CategoryScreen = () => {
  const [subCateg, setSubCate] = useState([]);
  const [toggle, setToggle] = useState(false);
  const [expanded, setExpanded] = useState(true);

  const [activeCate , setActiveCate] = useState('')

  function setSubCategory(subCateg, index) {
    setSubCate(subCateg);
    setActiveCate(index)

  }
useEffect(() => {
 
}, [activeCate])

function handlePress(index){
  setExpanded(!expanded)
}
 
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={Theme.backgroundColor} />
      <Header2 menu onPress={() => toggleDrawer()} />
      <Image
        source={require('../../assets/Images/saleCard.png')}
        style={styles.cardStyle}
      />
      <View style={styles.categContainer}>
        <ScrollView style={{ width:"40%", marginTop:15 }}>
          {category.map((categ, index) => {
            var cate = categ.subCate;
            return (
                <TouchableOpacity
                  key={String(categ?.id + index)}
                  activeOpacity={1}
                  onPress={() => setSubCategory(cate, index)}
                  style={ activeCate == index ? [styles.categView]: [styles.categView] }>
                  <Image source={categ.image} style={activeCate == index ? {tintColor:Theme.primary}:[{tintColor:Theme.subText}]} />
                  <Text style={[activeCate ==index ? [styles.text, {color:Theme.primary}] : styles.text]}>{categ.name}</Text>
                 { (activeCate == index)  && <View style={styles.cateLine}/>}
                </TouchableOpacity>
            );
          })}
        </ScrollView>
        <List.Section style={styles.sectionContainer}>
          {subCateg &&
            subCateg.map((item, index) => {
              return (


                <List.Accordion
                // expanded={expanded}
                // onPress={()=>handlePress(index)}
                titleStyle={{color:Theme.text}}
                  title={item.name}
                  style={styles.titleStyle}
                >
                  {item.item.map(item => {
                    return (

              <List.Item style={{backgroundColor:'#EFEDFF', opacity:0.5}} title={item.name} /> 
                    );
                  })}

                </List.Accordion>


              );
              
            })
            
            }
        </List.Section>
      </View>
    </View>
  );
};

export default CategoryScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.white,
  },
  cardStyle: {
    width: 337,
    height: 123,
    alignSelf: 'center',
    borderRadius: 10,
    marginTop: 20,
  },
  categContainer: {
    flex: 1, 
  },
  categView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
    paddingVertical:12,
    marginLeft:10
  },
  text: {
    fontFamily: 'Lato',
    fontSize: 14,
    fontWeight: 'normal',
    lineHeight: 17.5,
    color: Theme.subText,
    marginLeft: 10,
  },
  cateLine: {
    width: 130,
    height: 2,
    borderTopWidth: 2,
    borderTopColor: Theme.primary,
    borderRadius: 8,
    position:'absolute',
    top:45,
    borderTopLeftRadius: 4,
    borderTopLeftRadius: 4,
    // right:80
  },
  sectionContainer: {
    position: 'absolute',
    // left: 80,
    right: 0,
    paddingLeft: 5,
    height: 44,
    marginTop: 20,
    width: "60%",

  },
  innerSubCateg: {
    backgroundColor: Theme.accent2,
    borderWidth: 0,
    width: 170,
  },
  titleStyle: {
    width: "100%",
    height: 55,
    fontSize: 14,
    fontFamily: 'Lato',
    lineHeight: 16.8,
    fontStyle: 'normal',
    backgroundColor: '#EFEDFF',
    color:Theme.subText
  },
});
