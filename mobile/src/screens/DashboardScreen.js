import React, { useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFeeds } from '../redux/feedsSlice';

const DashboardScreen = () => {
  const dispatch = useDispatch();
  const { feeds, loading, error } = useSelector((state) => state.feeds);

  useEffect(() => {
    dispatch(fetchFeeds());
  }, [dispatch]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Feeds Dashboard</Text>
      {loading && <Text>Loading feeds...</Text>}
      {error && <Text>Error: {error}</Text>}
      <FlatList
        data={feeds}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Text style={styles.feed}>
            <Text style={styles.platform}>{item.platform}:</Text> {item.content}
          </Text>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, marginBottom: 20 },
  feed: { marginBottom: 10 },
  platform: { fontWeight: 'bold' },
});

export default DashboardScreen;
