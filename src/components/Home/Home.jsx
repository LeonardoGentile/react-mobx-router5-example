import React from 'react';
import {inject} from 'mobx-react';
import {BaseLink} from "react-mobx-router5";

@inject('routerStore')
class Home extends React.Component {
  constructor(props){
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick(e) {
    e.preventDefault();
    e.stopPropagation();
    console.log("Someone pushed me");
  }

  render() {
    return (
        <div>
          <h2>Home Page</h2>
          <br/>
          <p>Examples of the different uses of BaseLink. <br/>
            Remember that BaseLink does not re-render on route changes and so it's not aware when it is `active`.</p>
          <br/>

          <BaseLink
            routeName={'section.subsection.index'}
            routeParams={{'id': 1}}
            routerStore={this.props.routerStore}>
            BaseLink using the routerStore for computing the link --> /index/1
          </BaseLink> <br/> <br/>

          <BaseLink
            routeName={'section.subsection.index'}
            routeParams={{'id': 2}}
            router={this.props.routerStore.router}>
            BaseLink using the router5 instance for computing the link --> /index/2
          </BaseLink> <br/> <br/>

          <BaseLink
            onClick={this.onClick}>
            BaseLink using the `onClick` callback prop, it doesn't need router, routerStore and routeName props --> prints to console
          </BaseLink> <br/>

        </div>
    );
  }
}

export default Home;
