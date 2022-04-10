import React, { Component } from "react";
<<<<<<< HEAD
import { Text, View } from "react-native";
import { Card } from "react-native-elements";
import { CAMPSITES } from '../shared/campsites';

function RenderCampsite({campsite}) {
=======
import { Text, View, ScrollView, FlatList } from "react-native";
import { Card, Icon } from "react-native-elements";
import { CAMPSITES } from '../shared/campsites';
import { COMMENTS } from '../shared/comments';

function RenderCampsite(props) {
    const {campsite} = props;

>>>>>>> b2d1ca1 (About and Contact components added. Icons, favorites, comments, Custom side drawer and Navigation icons added)
    if (campsite) {
        return (
            <Card
            featuredTitle={campsite.name}
            image={require('./images/react-lake.jpg')}
            >
                <Text style={{margin:10}}>
                    {campsite.description}
                </Text>
<<<<<<< HEAD
=======
                <Icon
                    name={props.favorite ? 'heart' : 'heart-o'}
                    type='font-awesome'
                    color='#f50'
                    raised
                    reverse
                    onPress={() => props.favorite ? 
                        console.log('Already set as a favorite') : props.markFavorite()}
                />
>>>>>>> b2d1ca1 (About and Contact components added. Icons, favorites, comments, Custom side drawer and Navigation icons added)
            </Card>
        );
    }
    return <View />;
}

<<<<<<< HEAD
=======
function RenderComments({comments}) {
    const renderCommentItem =({item}) => {
        return(
            <View style={{margin: 10}}>
                <Text style={{fontSize: 14}}>{item.text}</Text>
                <Text style={{fontSize: 12}}>{item.rating} Stars</Text>
                <Text style={{fontSize: 12}}>{`--${item.author}, ${item.date}`}</Text>
            </View>
        );
    };
    return (
        <Card title='Comments'>
            <FlatList
                data={comments}
                renderItem={renderCommentItem}
                keyExtractor={item => item.id.toString()}
            />
        </Card>
    )
}
>>>>>>> b2d1ca1 (About and Contact components added. Icons, favorites, comments, Custom side drawer and Navigation icons added)

class CampsiteInfo extends Component {

    constructor(props) {
        super(props);
        this.state = {
<<<<<<< HEAD
            campsites: CAMPSITES
        };
    }

=======
            campsites: CAMPSITES,
            comments: COMMENTS,
            favorite: false
        };
    }

    markFavorite() {
        this.setState({favorite: true});
    }
    
>>>>>>> b2d1ca1 (About and Contact components added. Icons, favorites, comments, Custom side drawer and Navigation icons added)
    static navigationOptions = {
        title: 'Campsite Information'
    }

    render() {
        const campsiteId = this.props.navigation.getParam('campsiteId');
        const campsite = this.state.campsites.filter(campsite => campsite.id === campsiteId)[0];
<<<<<<< HEAD
        return <RenderCampsite campsite={campsite} />;
=======
        const comments = this.state.comments.filter(comment => comment.campsiteId === campsiteId);
        return( 
            <ScrollView>
                <RenderCampsite campsite={campsite} 
                    favorite={this.state.favorite}
                    markFavorite={() => this.markFavorite()}
                />
                <RenderComments comments={comments} />
            </ScrollView>
        );
>>>>>>> b2d1ca1 (About and Contact components added. Icons, favorites, comments, Custom side drawer and Navigation icons added)
    }
}

export default CampsiteInfo;
