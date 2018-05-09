import { connect } from 'react-redux';
import { compose, hoistStatics } from 'recompose';

import SignUpScreenView from './SignUpScreenView';

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

const enhancer = compose(connect(mapStateToProps, mapDispatchToProps));

export default hoistStatics(enhancer)(SignUpScreenView);
