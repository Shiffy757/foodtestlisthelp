import axios from 'axios'


export default axios.create({
baseURL:'https://api.yelp.com/v3/businesses',
headers: {Authorization : 'Bearer 5VCAos5XUYN6WBCBL86qRVfbUMllaBrozX6XRchCe_YNKxPYd2DYedBu29ysHQjFB8er7MkIYeY2WlOwrUqd4l1K9npgdqdCWgG_GHwy0bv9bsSI2EOZgnR_2RECX3Yx'

}
  
});

