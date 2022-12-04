import * as React from "react";
import { View, ScrollView, Image, StyleSheet } from "react-native";
import { Text } from "react-native-paper";
import Class1 from "../../assets/class1.png";
import Class2 from "../../assets/class2.png";
import ClassCard from "../ClassCard";

const Classes = () => {
  const classBackgrounds = [Class1, Class2, Class1, Class2],
    classDescription = [
      "Culpa est officia elit velit duis officia nostrud ex ipsum et est ut.",
      "Amet culpa reprehenderit aliqua tempor dolore culpa veniam culpa.",
      "Laborum anim fugiat Lorem labore in consequat aliqua qui consequat labore.",
      "Laborum ex reprehenderit velit ea dolore cillum cillum cupidatat.",
    ],
    classTitle=[
        'Intro to programming',
        'IOT: Real World Exp',
        'Machine Learning',
        'Maths in AI'
    ];

  console.log(classBackgrounds.length);
  return (
    <ScrollView style={styles.container}>
      {classBackgrounds.map((classBackground, index) => {
        return (
          <ClassCard
            key={index}
            title={classTitle[index]}
            para={classDescription[index]}
            bgSource={classBackground}
          />
        );
      })}
      <Text>Class ends here.....</Text>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
    container: {
        padding: 20
    }
})
export default Classes;
