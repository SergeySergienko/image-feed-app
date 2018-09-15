import React, { Component } from "react";
import {
  ActivityIndicator,
  Text,
  ViewPropTypes,
  SafeAreaView,
  StyleSheet
} from "react-native";
import PropTypes from "prop-types";

import { fetchImages } from "../utils/api";
import CardList from "../components/CardList";

export default class Feed extends Component {
  state = {
    loading: true,
    error: false,
    items: []
  };
  static propTypes = {
    style: ViewPropTypes.style
  };
  static defaultProps = {
    style: null
  };
  async componentDidMount() {
    try {
      const items = await fetchImages();
      this.setState({
        loading: false,
        items
      });
    } catch (e) {
      this.setState({
        loading: false,
        error: true
      });
    }
  }

  render() {
    const { style } = this.props;
    const { loading, error, items } = this.state;
    if (loading) {
      return <ActivityIndicator style={styles.container} size={"large"} />;
    }
    if (error) {
      return <Text style={styles.container}>Error...</Text>;
    }
    return (
      <SafeAreaView style={style}>
        <CardList items={items} />
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
