import React from 'react';

const camelPattern = /(^|[A-Z])[a-z]*/g;
const Container = ({ children }) => <div className="control-panel">{children}</div>;

class ControlPanel extends React.Component {

    formatSettingName(name) {
        return name.match(camelPattern).join(' ');
    }

    renderCheckbox(name, value) {
        let val = (value) ? value : false;

        return (
            <div key={name} className="input">
                <label>{this.formatSettingName(name)}</label>
                <input
                    type="checkbox"
                    checked={val}
                    onChange={evt => this.props.onChange(evt.target.checked)}
                />
            </div>
        );
    }

    formatDate(dateString) {
        let date = new Date(dateString);
        return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`
    }

    renderDetails(name, value) {
        let details = value;

        if (name && value) {
            switch (name) {
                case "url":
                    details = <a href={value}>{value}</a>
                    break;
                case "start":
                    details = this.formatDate(value);
                    break;
                case "end":
                    details = this.formatDate(value);
                    break;
                case "salesStart":
                    details = this.formatDate(value);
                    break;
                case "salesEnd":
                    details = this.formatDate(value);
                    break;
                case "classification":
                    details = value.join(", ")
                    break;
                default:
                    break;
            }

            return (
                <div>
                    <label>{this.formatSettingName(name)}: </label>
                    <span>{details}</span>
                </div>
            );
        }
    }

    render() {
        const { activity, savedActivities } = this.props;

        return (
            <Container>
                <h3>{activity.name}</h3>
                <hr />
                <div className="details">
                    {Object.keys(activity).map((detail) => (this.renderDetails(detail, activity[detail])))}
                </div>
                {!savedActivities.has(activity.name) &&
                    <>
                        <hr />
                        {this.renderCheckbox('save', activity.saved)}
                    </>
                }
            </Container>
        );
    }
}

export default ControlPanel;