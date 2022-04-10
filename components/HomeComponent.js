<<<<<<< HEAD
import React, { Component } from "react";
import { View, Text } from "react-native";

class Home extends Component{
=======
import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';
import { CAMPSITES } from '../shared/campsites';
import { PROMOTIONS } from '../shared/promotions';
import { PARTNERS } from '../shared/partners';

function RenderItem({item}) {
    if (item) {
        return (
            <Card
                featuredTitle={item.name}
                image={require('./images/react-lake.jpg')}>
                    <Text
                        style={{margin: 10}}>
                        {item.description}
                    </Text>

            </Card>
        );
    }
    return <View />;
}


class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            campsites: CAMPSITES,
            promotions: PROMOTIONS,
            partners: PARTNERS
        }
    }
>>>>>>> b2d1ca1 (About and Contact components added. Icons, favorites, comments, Custom side drawer and Navigation icons added)

    static navigationOptions = {
        title: 'Home'
    }

    render() {
        return (
<<<<<<< HEAD
            <View>
                <Text>Home Component</Text>
            </View>
=======
            <ScrollView>
                <RenderItem
                item={this.state.campsites.filter(campsite => campsite.featured)[0]}
                />
                <RenderItem 
                    item={this.state.promotions.filter(promotion => promotion.featured)[0]}
                />
                <RenderItem 
                    item={this.state.partners.filter(partner => partner.featured)[0]}
                />
            </ScrollView>
>>>>>>> b2d1ca1 (About and Contact components added. Icons, favorites, comments, Custom side drawer and Navigation icons added)
        );
    }
}

export default Home;