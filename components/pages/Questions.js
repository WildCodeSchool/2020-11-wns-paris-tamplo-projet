import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import Container from "../templates/Container";
import QuestionAnswer from "../organismes/QuestionAnswer";

const Questions = (props) => {
  const [showAnswer, setShowAnswer] = useState(false);
  const quiz = props.route.params.quiz;
  return (
    <Container>
      <ScrollView style={styles.questionContainer}>
        <View>
          <Text h1 style={styles.title}>
            {quiz.title}
          </Text>
          <Text h3 style={styles.comment}>
            {quiz.comment
              ? quiz.comment
              : "Pas d'indication particulière pour ce test, bonne chance !"}
          </Text>
          {quiz.questions.map((el, i) => {
            return (
              <QuestionAnswer key={i} question={el} showAnswer={showAnswer} />
            );
          })}
        </View>
        <TouchableOpacity
          style={styles.questionButton}
          onPress={() => setShowAnswer((oldValue) => !oldValue)}
        >
          <Text style={styles.questionTextButton}>Envoyer mes réponses !</Text>
        </TouchableOpacity>
      </ScrollView>
    </Container>
  );
};

export default Questions;

const styles = StyleSheet.create({
  questionContainer: {
    flex: 1,
    marginHorizontal: 10,
    paddingTop: 30,
  },
  title: {
    backgroundColor: "#00B5CE",
    textAlign: "center",
    paddingVertical: 10,
    fontSize: 20,
    color: "white",
    marginBottom: 10,
  },
  comment: {
    paddingVertical: 2,
    fontSize: 16,
    textAlign: "center",
  },
  questionButton: {
    padding: 10,
    borderRadius: 25,
    margin: 50,
    alignItems: "center",
    backgroundColor: "#00B5CE",
  },
  questionTextButton: {
    color: "white",
    fontSize: 18,
  },
});
