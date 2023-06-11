import React from 'react';
import PropTypes from 'prop-types';
import Section from '../Section/Section' 
import css from './Notification.module.css';

const Notification = ({message}) => {
    return (
        <Section title=''>
             <p className={css.titleText}>{message}</p>
        </Section>)
}

Notification.propTypes = {
    message: PropTypes.string,
}
export default Notification