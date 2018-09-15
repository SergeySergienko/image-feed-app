import React, { Component } from "react";
import { TextInput, StyleSheet, View } from "react-native";
import PropTypes from "prop-types";

export default class CommentInput extends Component {
  state = {
    text: ""
  };
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
    placeholder: PropTypes.string
  };
  static defaultProps = {
    placeholder: ""
  };
  handleChangeText = text => {
    this.setState({ text });
  };
  handleSubmitEditing = () => {
    const { text } = this.state;
    const { onSubmit } = this.props;
    if (!text) return;
    onSubmit(text);
    this.setState({ text: "" });
  };
  render() {
    const { placeholder } = this.props;
    const { text } = this.state;
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          value={text}
          placeholder={placeholder}
          underlineColorAndroid="transparent"
          onChangeText={this.handleChangeText}
          onSubmitEditing={this.handleSubmitEditing}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "rgba(0,0,0,0.1)",
    paddingHorizontal: 20,
    height: 60
  },
  input: {
    flex: 1
  }
});
