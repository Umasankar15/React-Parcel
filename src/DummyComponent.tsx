import styles from './DummyComponent.module.scss';

function Dummy(): JSX.Element {

    return (
        <h1 className={styles.heading}>
            Hello, Parcel!
        </h1>
    );
}

export default Dummy;