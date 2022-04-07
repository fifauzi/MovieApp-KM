/* eslint-disable react-native/no-inline-styles */
import {View, Text, TouchableOpacity, FlatList, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {ACCESS_TOKEN, BaseUrl, ImageUrl} from '../../helpers/apiAccessToken';

const Home = () => {
  const [listMovie, setListMovie] = useState([]);
  const [movieUpcoming, setMovieUpcoming] = useState([]);

  useEffect(() => {
    getListMovieUpcoming();
  }, []);

  useEffect(() => {
    getListMoviePopular();
  }, []);

  const getListMovieUpcoming = async () => {
    try {
      const results = await axios.get(`${BaseUrl}/movie/upcoming`, {
        headers: {Authorization: `Bearer ${ACCESS_TOKEN}`},
      });

      setMovieUpcoming(results.data.results);
      console.log(results);
    } catch (error) {
      console.log(Error);
    }
  };
  const getListMoviePopular = async () => {
    try {
      const results = await axios.get(`${BaseUrl}/movie/popular`, {
        headers: {Authorization: `Bearer ${ACCESS_TOKEN}`},
      });

      setListMovie(results.data.results);
      console.log(results);
    } catch (error) {
      console.log(Error);
    }
  };

  const getListMovieTopRated = async () => {
    try {
      const results = await axios.get(`${BaseUrl}/movie/top_rated`, {
        headers: {Authorization: `Bearer ${ACCESS_TOKEN}`},
      });

      setListMovie(results.data.results);
      console.log(results);
    } catch (error) {
      console.log(Error);
    }
  };
  const getListMovieNowPlaying = async () => {
    try {
      const results = await axios.get(`${BaseUrl}/movie/now_playing`, {
        headers: {Authorization: `Bearer ${ACCESS_TOKEN}`},
      });

      setListMovie(results.data.results);
      console.log(results);
    } catch (error) {
      console.log(Error);
    }
  };

  const MovieHeader = ({item}) => {
    return (
      <View>
        <Image
          source={{uri: `${ImageUrl}${item.poster_path}`}}
          style={{
            width: 250,
            height: 150,
            marginTop: 10,
            marginBottom: 80,
            borderRadius: 20,
            marginLeft: 10,
            marginRight: 12,
            resizeMode: 'cover',
          }}
        />
        <Text
          style={{
            marginTop: -80,
            textAlign: 'center',
            fontSize: 17,
            fontWeight: '400',
            color: 'white',
          }}>
          {item.title}
        </Text>
      </View>
    );
  };
  const CardMovie = ({item}) => {
    return (
      <View style={{flex: 1}}>
        <View
          style={{
            flexDirection: 'row',
            width: 400,
            height: 237,
            marginHorizontal: 6,
            marginBottom: 7,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.23,
            shadowRadius: 2.62,

            elevation: 4,
          }}>
          <View>
            <Image
              source={{uri: `${ImageUrl}${item.poster_path}`}}
              style={{
                width: 180,
                height: 200,
                marginTop: 20,
                borderRadius: 20,
                marginHorizontal: 20,
              }}
            />
          </View>
          <View style={{flex: 1, marginLeft: -8, paddingRight: 8}}>
            <View
              style={{
                backgroundColor: 'teal',
                width: 150,
                borderRadius: 5,
                marginTop: 20,
                marginHorizontal: 11,
              }}>
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 15,
                  fontWeight: '500',
                  color: 'white',
                }}>
                {item.title}
              </Text>
            </View>
            <Text
              style={{
                marginTop: 3,
                textAlign: 'left',
                fontSize: 15,
                fontWeight: '800',
                color: 'white',
              }}>
              Release Date
            </Text>
            <Text
              style={{
                marginTop: 3,
                paddingBottom: 10,
                textAlign: 'left',
                fontSize: 12,
                fontWeight: '500',
                color: 'white',
              }}>
              {item.release_date}
            </Text>
            <Text
              style={{
                marginTop: 3,
                textAlign: 'left',
                fontSize: 15,
                fontWeight: '800',
                color: 'white',
              }}>
              Rating
            </Text>
            <Text
              style={{
                marginTop: 3,
                paddingBottom: 10,
                textAlign: 'left',
                fontSize: 12,
                fontWeight: '500',
                color: 'yellow',
              }}>
              {item.vote_average}
            </Text>
            <View
              style={{
                marginTop: 28,
                backgroundColor: 'teal',
                width: 80,
                height: 30,
                borderRadius: 5,
                justifyContent: 'center',
              }}>
              <TouchableOpacity>
                <Text
                  style={{
                    color: 'white',
                    fontSize: 15,
                    fontWeight: '600',
                    textAlign: 'center',
                  }}>
                  Show
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  };
  //return nya
  return (
    <View style={{backgroundColor: 'black'}}>
      <View
        style={{
          width: 130,
          backgroundColor: 'teal',
          marginVertical: 10,
          marginHorizontal: '30%',
          borderRadius: 10,
        }}>
        <Text
          style={{
            color: 'white',
            fontSize: 30,
            fontWeight: '900',
            textAlign: 'center',
          }}>
          M-TMDB
        </Text>
      </View>
      <View>
        <Text
          style={{
            marginLeft: 9,
            color: 'white',
            fontSize: 20,
            fontWeight: '700',
          }}>
          Upcoming Movie
        </Text>
        <FlatList
          data={movieUpcoming}
          keyExtractor={(item, index) => index}
          renderItem={MovieHeader}
          horizontal
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          marginTop: 20,
          marginBottom: 10,
        }}>
        <View
          style={{
            height: 40,
            width: 100,
            backgroundColor: 'teal',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 20,
          }}>
          <TouchableOpacity onPress={getListMoviePopular}>
            <Text
              style={{
                color: 'white',
                fontSize: 20,
                fontWeight: '600',
              }}>
              Popular
            </Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            height: 40,
            width: 100,
            backgroundColor: 'teal',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 20,
          }}>
          <TouchableOpacity onPress={getListMovieTopRated}>
            <Text
              style={{
                color: 'white',
                fontSize: 18,
                fontWeight: '600',
              }}>
              Top Rated
            </Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            height: 40,
            width: 100,
            backgroundColor: 'teal',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 20,
          }}>
          <TouchableOpacity onPress={getListMovieNowPlaying}>
            <Text
              style={{
                color: 'white',
                fontSize: 15,
                fontWeight: '600',
              }}>
              Now Playing
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <FlatList
        data={listMovie}
        keyExtractor={(item, index) => index}
        renderItem={CardMovie}
      />
    </View>
  );
};

export default Home;
