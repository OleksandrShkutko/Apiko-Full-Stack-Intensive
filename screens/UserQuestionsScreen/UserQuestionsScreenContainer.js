import { connect } from 'react-redux';
import { compose, hoistStatics } from 'recompose';

import UserQuestionsScreenView from './UserQuestionsScreenView';

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

const enhancer = compose(connect(mapStateToProps, mapDispatchToProps));

export default hoistStatics(enhancer)(UserQuestionsScreenView);
