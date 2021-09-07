import { Button } from "./components/Button";
import Card from "./components/Card";
import Col from "./components/Col";
import Input from "./components/Input";
import Row from "./components/Row";

function App() {
  return (
    <div>
      <Row justify="space-between" align="center" style={{ height: "200px" }}>
        <Col span={6}>
          <Button color="secondary">Save changes</Button>
        </Col>
        <Col span={6}>
          <Button color="primary" rounded>
            test
          </Button>
        </Col>
      </Row>
      <Row>
        <Col span={6}>
          <Card>
            <Input color="secondary" placeholder="Username" />
            <Row gutter={2}>
              <Col>
                <Input color="secondary" placeholder="Username" />
              </Col>
              <Col>
                <Input color="secondary" placeholder="Username" />
              </Col>
            </Row>
            <Row justify="end" gutter={1}>
              <div>
                <Button>Cancel</Button>
              </div>
              <div>
                <Button color="secondary">Save</Button>
              </div>
            </Row>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default App;
