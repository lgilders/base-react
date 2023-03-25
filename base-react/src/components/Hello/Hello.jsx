import React from 'react';
import styles from './Hello.module.css';

class Hello extends React.Component {
    render () {
        return (
            <div className={styles['background']}>
                <h1>Hello!</h1>
            </div>
        )
    }
}

export default Hello;