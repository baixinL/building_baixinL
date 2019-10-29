import React,{ Component }  from 'react';
import ReactDOM from 'react-dom';
import '../style/common.less';
import {fn1} from './util';
class Demo extends Component{
    render(){
        // eslint-disable-next-line no-console
        fn1();
        // console.log("  env:",process.env.NODE_ENV);
        return <div className="box">hello {this.props.text}</div>
    }
}
ReactDOM.render(
    <Demo text="This is a text."/>,
    window.document.querySelector('.container')
)
