import React from 'react';
import {withRoute, Link} from "react-mobx-router5";
import styles from './Footer.sass';


function AnotherElement(props) {
 return (
   <div className={props.className}>
      <p> This is another component also wrapped with `withRoute`. <br/>
        It will receive an `active` prop and an `active` className when the route is `/section/subsection/home`. <br/> <br/>
        Try to navigate to <Link routeName={'section.subsection.home'}>{props.routerStore.router.buildPath('section.subsection.home')}</Link> and this background will change</p>
   </div>
 );
}

const AnotherComponentWithRoute = withRoute(AnotherElement);


class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const style = {
      fontWeight: 'bold',
    };

    return (
      <div className={styles.container}>This is the footer. It's been wrapped with `withRoute` HOC so it is aware of routes change and it will re-render on any route Change. <br/>
        <p>I did not pass a `routeName` prop to the resulting component so an `active` className will never be applied. <br/> <br/>
          Nonetheless it is aware of the current route: <i style={style}>{this.props.route.name}</i></p>

        <AnotherComponentWithRoute
          className={styles.anotherElement}
          routeName={'section.subsection.home'}
        />

      </div>
    );
  }
}




export default withRoute(Footer);
