import React, { Component } from 'react';
import { toast } from 'react-toastify';
import s from './Searchbar.module.css';

class Searchbar extends Component {
  state = {
    img: '',
  };

  handleChange = ({ target }) => {
    const value = target.value;

    this.setState({
      img: value.toLowerCase(),
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { img } = this.state;
    const { onSubmit } = this.props;

    if (img.trim() === '') {
      toast.warning('Tap some word for searching!');
      return;
    }
    onSubmit(img);
    this.clearForm();
  };

  clearForm = () => {
    this.setState({ img: '' });
  };
  render() {
    return (
      <header className={s.searchbar}>
        <form className={s.form} onSubmit={this.handleSubmit}>
          <button type="submit" className={s.button}>
            <span className={s.label}>Search</span>
          </button>

          <input
            value={this.state.img}
            onChange={this.handleChange}
            className={s.input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;