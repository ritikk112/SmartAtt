import * as React from 'react';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

const ClassCard = (props) => (
  <Card>
    <Card.Content>
      <Title>{props.title}</Title>
      <Paragraph>{props.para}</Paragraph>
    </Card.Content>
    <Card.Cover source={props.bgSource} />
    <Card.Actions>
      <Button>View</Button>
    </Card.Actions>
  </Card>
);

export default ClassCard;