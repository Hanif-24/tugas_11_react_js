import "semantic-ui-css/semantic.min.css";

import {
  List,
  Grid,
  Loader,
  Dimmer,
  Image,
  Placeholder,
  Segment,
  Divider,
  Header,
  Icon,
  Search,
  Button
  } from "semantic-ui-react";


function App() {
  return (
    <div className="App">
      <br/>
      <br/>
      <Segment placeholder>
        <Grid columns={2} stackable textAlign='center'>
          <Divider vertical>Or</Divider>

          <Grid.Row verticalAlign='middle'>
            <Grid.Column>
              <Header icon>
                <Icon name='search' />
                Cari Document
              </Header>

              <Search placeholder='Search Document...' />
            </Grid.Column>

            <Grid.Column>
              <Header icon>
                <Icon name='world' />
                Tambah Document Baru
              </Header>
              <Button primary>Create Document</Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      <Segment>
        <Dimmer active>
          <Loader>Loading</Loader>
        </Dimmer>
        <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
      </Segment>

      <Grid columns={3} stackable>
        <Grid.Column>
          <Segment raised>
            <Placeholder>
             <Placeholder.Header image>
               <Placeholder.Line />
               <Placeholder.Line />
             </Placeholder.Header>
             <Placeholder.Paragraph>
               <Placeholder.Line />
               <Placeholder.Line /> 
             </Placeholder.Paragraph>
           </Placeholder>
          </Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment raised>
            <Placeholder>
             <Placeholder.Header image>
               <Placeholder.Line />
               <Placeholder.Line />
             </Placeholder.Header>
             <Placeholder.Paragraph>
               <Placeholder.Line />
               <Placeholder.Line />
             </Placeholder.Paragraph>
           </Placeholder>
          </Segment>
        </Grid.Column>

        <Grid.Column>
          <List>
          <h3>Website Terkait</h3>
            <List.Item>
             <List.Icon name='linkify' />
             <List.Content><a href='.'> Google </a> </List.Content>
            </List.Item>

            <List.Item>
             <List.Icon name='linkify' />
             <List.Content><a href='.'> Facebook </a> </List.Content>
            </List.Item>

            <List.Item>
             <List.Icon name='linkify' />
             <List.Content><a href='.'> Semantik Ui </a> </List.Content>
            </List.Item>

            <List.Item>
             <List.Icon name='linkify' />
             <List.Content><a href='.'> Niomic </a> </List.Content>
            </List.Item>
            
            <List.Item>
             <List.Icon name='linkify' />
             <List.Content><a href='.'> React Js </a> </List.Content>
            </List.Item>
          </List>
        </Grid.Column>

      </Grid>

    </div>
  );
}

export default App;
