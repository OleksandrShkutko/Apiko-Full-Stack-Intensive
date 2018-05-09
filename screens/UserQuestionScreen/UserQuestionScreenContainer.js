import { connect } from 'react-redux';
import { compose, hoistStatics } from 'recompose';

import UserQuestionScreenView from './UserQuestionScreenView';

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

const enhancer = compose(connect(mapStateToProps, mapDispatchToProps));

export default hoistStatics(enhancer)(UserQuestionScreenView);
