import React from 'react';
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import counter from "../../../data/counter.json";

function Counter(props) {
    const [focus, setFocus] = React.useState(false);
    return (
        <section className="section-padding satisfy-clients">
            <div className="container">
                <div className="row">
                    {/* Data */}
                    {counter.map((item, i) => (
                        <div className="col-lg-3 col-sm-6" key={i}>
                            <div className="counter-box mb-md-40">
                                <div className="counter-icon">
                                    <i className={item.icon} />
                                </div>
                                <div className="counter">
                                    <CountUp start={focus ? 0 : null} end={item.value} duration={5} redraw={true}>
                                        {({ countUpRef }) => (
                                            <VisibilitySensor
                                                onChange={isVisible => {
                                                    if (isVisible) {
                                                        setFocus(true);
                                                    }
                                                }}
                                            >
                                                <span ref={countUpRef} className="count text-custom-white" />
                                            </VisibilitySensor>
                                        )}
                                    </CountUp>
                                    <span className="fs-16 text-custom-white">{item.title}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                    {/* Data */}
                </div>
            </div>
        </section>
    );
}

export default Counter;