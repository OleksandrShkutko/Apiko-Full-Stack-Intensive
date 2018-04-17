import { compose, withStateHandlers, withHandlers, lifecycle, branch, renderComponent, withProps  } from 'recompose';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { db, withUser } from '../../utils';

import AppLoader from '../Loaders/AppLoader';
import Component from './Component';

const mapStateToProps = state => ({
  user: state.user,
  // TODO: CODE FOR YOUR HOMEWORK HERE 
  sortBy: state.answerSort
});

const enhance = compose(
  connect(mapStateToProps),
  withStateHandlers({ answers: [], users: [], votes: [], isFetching: true }),

  withRouter,

  lifecycle({
    componentWillMount() {
      this.interval = db.pooling(async () => {
        const questionId = this.props.match.params.questionId;

        let answers = await db.answers.find();
        answers = answers.filter(answer => answer.questionId === questionId);

        let votes = await db.votes.find();
        const answerIds = answers.map(a => a._id);
        votes = votes.filter(vote => answerIds.includes(vote.answerId));

        const users = await db.users.find();

        this.setState({ answers, votes, users, isFetching: false });
      });
    },
    componentWillUnmount() {
      clearInterval(this.interval);
    }
  }),

  branch(
    ({ isFetching }) => isFetching,
    renderComponent(AppLoader)
  ),

  withProps(props => {
    const { sortBy, answers, votes } = props;
    let sortFunction;
    if (sortBy === "best" || sortBy === "worst") {
      const votesType = sortBy === "best";
      const votesResult = answers.reduce((result, answer) => {
        const id = answer._id;
        result[id] = votes.filter(vote => vote.answerId === id && vote.isPositive === votesType).length;
        return result;
      }, {});
      sortFunction = (first, last) => votesResult[last._id] - votesResult[first._id];
    } else {
      sortFunction = (first, last) => last.createdAt - first.createdAt;
    }
    return {
      answers: [...answers].sort(sortFunction)
    };
  }),


  withUser,

  withHandlers({
    onVote: ({ user }) => (answerId, isPositive) => {
      if (user) {
        db.votes.insert({
          answerId,
          isPositive,
          createdAt: new Date(),
          createdById: user._id,
        });
      }
    }
  }),
);


export default enhance(Component);
