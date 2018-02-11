import { connect } from 'react-redux'; 
import SentimentIndicator from '../components/SentimentIndicator'
import { setIndicatorValue } from './../actions/actions';

const mapDispatchToProps = (dispatch) => {
    return{
        value:(value) => {
            dispatch(setValue(value));
        }
    }
}

export default connect(null,mapDispatchToProps)(SentimentIndicator)