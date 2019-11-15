import React from 'react';

const camelPattern = /(^|[A-Z])[a-z]*/g;
const Container = ({ children }) => <div className="control-panel">{children}</div>;

class ControlPanel extends React.Component {

    formatSettingName(name) {
        return name.match(camelPattern).join(' ');
    }

    renderCheckbox(name, value) {
        return (
            <div key={name} className="input">
                <label>{this.formatSettingName(name)}</label>
                <input
                    type="checkbox"
                    checked={value}
                    onChange={evt => this.props.onChange(name, evt.target.checked)}
                />
            </div>
        );
    }

    renderTextInput(name, value) {
        return (
            <div key={name} className="input">
                <label>{this.formatSettingName(name)}</label>
                <input
                    type="text"
                    value={value}
                    onChange={evt => this.props.onChange(name, evt.target.value)}
                />
            </div>
        );
    }

    renderDetails(name, value) {
        if (name && value) {
            return (
                <div>
                    <label>{this.formatSettingName(name)}: </label>
                    <span>{value}</span>
                </div>
            );
        }
    }

    render() {
        const { activity } = this.props;

        return (
            <Container>
                <h3>{activity.name}</h3>
                <hr />
                <div className="details">
                    {Object.keys(activity).map((detail) => (this.renderDetails(detail, activity[detail])))}
                </div>
                <hr />
            </Container>
        );
    }
}

export default ControlPanel;