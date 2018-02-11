import { connect } from 'react-redux'; 
import App from '../App';
import { setIndicatorValue } from './../actions/actions';


const mapStateToProps = (state) => {
    return {
        indicators:state.indicators
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        setIndicatorValue:(name, value) => {
            dispatch(setIndicatorValue(name, value));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)