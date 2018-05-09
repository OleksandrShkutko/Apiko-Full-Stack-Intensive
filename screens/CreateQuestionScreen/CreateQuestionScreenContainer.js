import { connect } from 'react-redux';
import { compose, hoistStatics } from 'recompose';

import CreateQuestionScreenView from './CreateQuestionScreenView';

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

const enhancer = compose(connect(mapStateToProps, mapDispatchToProps));

export default hoistStatics(enhancer)(CreateQuestionScreenView);
