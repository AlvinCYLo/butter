import React from 'react';

import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { DateRangePicker } from 'react-dates';

const TextInput = (props) => (
    <div style={{ marginTop: 16 }}>
        <input
            {...props}
            type="text"
            style={{
                height: 25,
                width: 286,
                fontSize: 18,
                fontWeight: 200,
                padding: '12px 16px',
            }}
        />
    </div>
);

class QueryForm extends React.Component {
    constructor(props) {
        super(props);

        let focusedInput = null;
        if (props.autoFocus) {
            focusedInput = 'startDate';
        } else if (props.autoFocusEndDate) {
            focusedInput = 'endDate';
        }

        this.onDatesChange = this.onDatesChange.bind(this);
        this.onFocusChange = this.onFocusChange.bind(this);

        this.state = {
            startDate: null,
            endDate: null,
            category: '',
            latitude: 0,
            longitude: 0,
            showQueryForm: false,
            focusedInput: focusedInput
        };
    }

    onDatesChange({ startDate, endDate }) {
        this.setState({
            startDate: startDate,
            endDate: endDate
        });
    }

    onFocusChange(focusedInput) {
        this.setState({ focusedInput });
    }

    render() {
        return (
            <>
                <div style={{ marginTop: 65, marginLeft: 20 }}>
                    <DateRangePicker
                        startDate={this.state.startDate}
                        startDateId="today"
                        endDate={this.state.endDate}
                        endDateId="end-date"
                        onDatesChange={({ startDate, endDate }) => this.onDatesChange({ startDate, endDate })}
                        focusedInput={this.state.focusedInput}
                        onFocusChange={focusedInput => this.onFocusChange(focusedInput)}
                    />
                </div>
                <TextInput placeHolder="Search"/>
            </>


        );
    }
}

export default QueryForm;