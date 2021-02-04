import React from 'react';
import {
  fetchCharacterData,
  fetchCharactersList,
  setCurrentPage,
} from '../../redux/reducer';
import { connect } from 'react-redux';
import { Character } from './Character';
import Pagination from '@material-ui/lab/Pagination';
import classes from './Character.css';
import { Filter } from '../../ui/Filter';
import PageTemplate from '../../ui/PageTemplate';
class CharacterContainer extends React.Component {
  constructor(props) {
    super(props);
    this.getCharacterInfo = this.getCharacterInfo.bind(this);
    this.handleChange = this.handleChange.bind(this);
    // this.selectedFilter = this.selectedFilter.bind(this)
    this.state = {
      filter: '',
      page: 1,
    };
  }
  componentDidMount() {
    this.props.fetchCharactersList();
  }
  getCharacterInfo(id) {
    this.props.fetchCharacterData(id);
  }
  handleChange(e, page) {
    debugger;
    new Promise(res => {
      this.setState({ page: page });
      res();
    }).then(() => {
      this.props.fetchCharactersList(page);
    });
  }

  render() {
    return (
      <div>
        {/*<div className={classes.characterList}>*/}
        {/*    {*/}
        {/*        this.props.charactersList.map(element => {*/}
        {/*            const {name,image,id} = element;*/}

        {/*            return <character-page name={name} image={image} key={id} id={id}*/}
        {/*                              getCharacterInfo={this.getCharacterInfo.bind(this)}*/}
        {/*                              {...this.props.currentCharacterData}*/}
        {/*            />*/}
        {/*        })*/}

        {/*    }*/}

        {/*</div>*/}
        <PageTemplate
          getItemInfo={this.getCharacterInfo}
          list={this.props.charactersList}
          itemData={{ ...this.props.currentCharacterData }}
          fetchData={this.props.fetchCharactersList}
        />
        <div>
          <Pagination
            count={this.props.pageCount}
            page={this.state.page}
            className={classes.pagination}
            onChange={this.handleChange}
          />
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    charactersList: state.charactersList,
    currentCharacterData: state.currentCharacterData,
    pageCount: state.pageCount,
  };
}
export default connect(mapStateToProps, {
  fetchCharactersList,
  fetchCharacterData,
  setCurrentPage,
})(CharacterContainer);
