import React, { Component } from 'react';
import 'canvas-gauges';
import PropTypes from 'prop-types';
class SentimentIndicator extends Component {
    render() {
      return (
        <div className="SentimentIndicator">
            <canvas data-type="radial-gauge"
                data-value={ this.props.value }
                data-width="300"
                data-height="300"
                data-units="% Positive"
                data-title={ this.props.name }
                data-min-value="0"
                data-max-value="100"
                data-major-ticks="[0,10,20,30,40,50,60,70,80,90,100]"
                data-minor-ticks="2"
                data-stroke-ticks="true"
                data-highlights='[ {"from": 0, "to": 69, "color": "rgba(221,90,73,1)"},
                                   {"from": 70, "to": 89, "color": "rgba(253,198,61,1)"},
                                   {"from": 90, "to": 100, "color": "rgba(118,188,66,1)"}
                                 ]'
                data-ticks-angle="225"
                data-start-angle="67.5"
                data-color-major-ticks="#ddd"
                data-color-minor-ticks="#ddd"
                data-color-title="#eee"
                data-color-units="#ccc"
                data-color-numbers="#eee"
                data-color-plate="#222"
                data-border-shadow-width="0"
                data-borders="true"
                data-needle-type="arrow"
                data-needle-width="2"
                data-needle-circle-size="7"
                data-needle-circle-outer="true"
                data-needle-circle-inner="false"
                data-animation-duration="1500"
                data-animation-rule="linear"
                data-color-border-outer="#333"
                data-color-border-outer-end="#111"
                data-color-border-middle="#222"
                data-color-border-middle-end="#111"
                data-color-border-inner="#111"
                data-color-border-inner-end="#333"
                data-color-needle-shadow-down="#333"
                data-color-needle-circle-outer="#333"
                data-color-needle-circle-outer-end="#111"
                data-color-needle-circle-inner="#111"
                data-color-needle-circle-inner-end="#222"
                data-value-box-border-radius="0"
                data-color-value-box-rect="#222"
                data-color-value-box-rect-end="#333"
                data-value-box="true"
                data-value-int="0"
                data-value-dec="0">
            </canvas>
        </div>
      );
    }
  }
  
  SentimentIndicator.propTypes = {
      value: PropTypes.number.isRequired
  }

  export default SentimentIndicator;
  