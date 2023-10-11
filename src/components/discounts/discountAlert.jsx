import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

function AlertDismissibleExample() {
  const [show, setShow] = useState(true);

  if (show) {
    return (
      <Alert variant="info" onClose={() => setShow(false)} dismissible>
        <Alert.Heading>50% discount until the end of this month</Alert.Heading>
        <p>
          {/* Change this and that and try again. Duis mollis, est non commodo
          luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
          Cras mattis consectetur purus sit amet fermentum. */}
        </p>
      </Alert>
    );
  }
}

export default AlertDismissibleExample;