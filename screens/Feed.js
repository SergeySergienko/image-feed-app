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

const items = [
  { id: 0, author: "Matt Ross" },
  { id: 1, author: "Chuck Norris" }
];

export default class Feed extends Component {
  state = {
    loading: true,
    error: false,
    items: []
  };
  static propTypes = {
    style: ViewPropTypes.style,
    commentsForItem: PropTypes.objectOf(PropTypes.arrayOf(PropTypes.string))
      .isRequired,
    onPressComments: PropTypes.func.isRequired
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
    const { style, commentsForItem, onPressComments } = this.props;
    const { loading, error } = this.state;
    console.log(this.state.items);
    if (loading) {
      return <ActivityIndicator style={styles.container} size={"large"} />;
    }
    if (error) {
      return <Text>Error...</Text>;
    }
    return (
      <SafeAreaView style={style}>
        <CardList
          items={this.state.items || items}
          commentsForItem={commentsForItem}
          onPressComments={onPressComments}
        />
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
