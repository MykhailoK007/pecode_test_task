import React from 'react';
import Pagination from '@material-ui/lab/Pagination';
import { ListItem } from './ListItem';
import { connect } from 'react-redux';
import '../styles.scss';
import {
  fetchCharacterData,
  fetchCharactersList,
  fetchEpisodeData,
  fetchEpisodesList,
  setCurrentPage,
} from '../redux/reducer';

class PageTemplate extends React.Component {
  constructor(props) {
    super(props);
    this.getItemInfo = this.getItemInfo.bind(this);
    this.handleChange = this.handleChange.bind(this);
    // this.selectedFilter = this.selectedFilter.bind(this)
    this.state = {
      filter: '',
      page: 1,
    };
    this.pathname = window.location.pathname;
  }
  componentDidMount() {
     if (this.pathname === '/') {
      this.props.fetchCharactersList();
     } else {
       this.props.fetchEpisodesList();
     }
  }
  getItemInfo(id) {
    this.pathname === '/'
      ? this.props.fetchCharacterData(id)
      : this.props.fetchEpisodeData(id);
  }
  handleChange(e, page) {
    new Promise(res => {
      this.setState({ page: page });
      res();
    }).then(() => {
      this.pathname === '/'
        ? this.props.fetchCharactersList(page)
        : this.props.fetchEpisodesList(page);
    });
  }
  render() {
    return (
      <>
        <div className='characterList'>
          {this.pathname === '/' &&
            this.props.dataList.map(element => {
              const { name, image = null, id } = element;

              return (
                <ListItem
                  name={name}
                  image={image}
                  key={id}
                  id={id}
                  getItemInfo={this.getItemInfo}
                  data={this.props.currentCharacterData}
                />
              );
            })}
          {this.pathname === '/episode' &&
            this.props.dataList.map(element => {
              return (
                <div className='characterWrapper'>
                  <div>{element.name}</div>
                  <table key={element.id}>
                    <tr>
                      <td>Episode:</td>
                      <td>{element.episode}</td>
                    </tr>
                    <tr>
                      <td>Date</td>
                      <td>{element.air_date}</td>
                    </tr>
                    <tr></tr>
                  </table>
                </div>
              );
            })}
        </div>
        <Pagination
          count={this.props.pageCount}
          page={this.state.page}
          className='pagination'
          onChange={this.handleChange}
        />
      </>
    );
  }
}
function mapStateToProps(state) {
  return {
    dataList: state.dataList,
    currentCharacterData: state.currentCharacterData,
    pageCount: state.pageCount,
  };
}
export default connect(mapStateToProps, {
  fetchCharactersList,
  fetchCharacterData,
  setCurrentPage,
  fetchEpisodesList,
  fetchEpisodeData,
})(PageTemplate);
