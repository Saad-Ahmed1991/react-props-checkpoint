import React from "react";
import { Card, Image } from "semantic-ui-react";
import PropTypes from "prop-types";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";

const Profile = (props) => (
  <Card className="card">
    <Image src={props.children} alt="" wrapped ui={false} />
    <Card.Content className="card_content">
      <Card.Header style={{ color: "red", padding: 10 }}>
        {props.fullName}
      </Card.Header>
      <Card.Meta>{props.profession}</Card.Meta>
      <Card.Description style={{ fontSize: 15 }}>{props.bio}</Card.Description>
    </Card.Content>
    <Card.Content></Card.Content>
    <div className="d-grid gap-2">
      <Button
        variant="primary"
        size="lg"
        onClick={() => {
          props.handleName(props.fullName);
        }}
      >
        Prompt FullName
      </Button>
    </div>
  </Card>
);
Profile.defaultProps = {
  fullName: "Full Name",
  profession: "Profession",
  bio: "Bio",
  handleName: () => {},
  children:
    "https://illumesense.com/resources/illumesense/style/img/website/profile-picture-blanks/male-profile.jpg",
};
Profile.propTypes = {
  fullName: PropTypes.string,
  profession: PropTypes.string,
  bio: PropTypes.string,
  handleName: PropTypes.func,
};

export default Profile;
