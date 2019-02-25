import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Form from './Form';
import Panel from './Panel';
import Footer from './Footer';

const countries = [
  {
    name: 'albania',
    maleLength: 75.1,
    femaleLength: 80.7
  },
  {
    name: 'argentina',
    maleLength: 72.7,
    femaleLength: 79.9
  },
  {
    name: 'australia',
    maleLength: 80.9,
    femaleLength: 84.8
  },
  {
    name: 'austria',
    maleLength: 79,
    femaleLength: 83.9
  },
  {
    name: 'belgium',
    maleLength: 78.6,
    femaleLength: 83.5
  },
  {
    name: 'brunei',
    maleLength: 76.3,
    femaleLength: 79.2
  },
  {
    name: 'canada',
    maleLength: 80.2,
    femaleLength: 84.1
  },
  {
    name: 'chile',
    maleLength: 77.4,
    femaleLength: 83.4
  },
  {
    name: 'china',
    maleLength: 74.6,
    femaleLength: 77.6
  },
  {
    name: 'costa rica',
    maleLength: 77.1,
    femaleLength: 82.2
  },
  {
    name: 'croatia',
    maleLength: 74.7,
    femaleLength: 81.2
  },
  {
    name: 'cuba',
    maleLength: 76.9,
    femaleLength: 81.4
  },
  {
    name: 'cyprus',
    maleLength: 78.3,
    femaleLength: 82.7
  },
  {
    name: 'czech',
    maleLength: 75.9,
    femaleLength: 81.7
  },
  {
    name: 'denmark',
    maleLength: 78.6,
    femaleLength: 82.5
  },
  {
    name: 'estonia',
    maleLength: 72.7,
    femaleLength: 82.0
  },
  {
    name: 'finland',
    maleLength: 78.3,
    femaleLength: 83.8
  },
  {
    name: 'france',
    maleLength: 79.4,
    femaleLength: 85.4
  },
  {
    name: 'germany',
    maleLength: 78.7,
    femaleLength: 83.4
  },
  {
    name: 'greece',
    maleLength: 78.3,
    femaleLength: 83.6
  },
  {
    name: 'iceland',
    maleLength: 81.2,
    femaleLength: 84.1
  },
  {
    name: 'india',
    maleLength: 66.9,
    femaleLength: 69.9
  },
  {
    name: 'ireland',
    maleLength: 79.4,
    femaleLength: 83.4
  },
  {
    name: 'israel',
    maleLength: 80.6,
    femaleLength: 84.3
  },
  {
    name: 'italy',
    maleLength: 80.5,
    femaleLength: 84.8
  },
  {
    name: 'japan',
    maleLength: 80.5,
    femaleLength: 86.8
  },
  {
    name: 'luxembourgh',
    maleLength: 79.8,
    femaleLength: 84.0
  },
  {
    name: 'malaysia',
    maleLength: 72.7,
    femaleLength: 77.3
  },
  {
    name: 'maldives',
    maleLength: 76.9,
    femaleLength: 80.2
  },
  {
    name: 'malta',
    maleLength: 79.7,
    femaleLength: 83.7
  },
  {
    name: 'mexico',
    maleLength: 73.9,
    femaleLength: 79.5
  },
  {
    name: 'netherlands',
    maleLength: 80.0,
    femaleLength: 83.6
  },
  {
    name: 'new zealand',
    maleLength: 80,
    femaleLength: 83.3
  },
  {
    name: 'norway',
    maleLength: 79.8,
    femaleLength: 83.7
  },
  {
    name: 'panama',
    maleLength: 74.7,
    femaleLength: 81.1
  },
  {
    name: 'poland',
    maleLength: 73.6,
    femaleLength: 81.3
  },
  {
    name: 'portugal',
    maleLength: 78.2,
    femaleLength: 83.9
  },
  {
    name: 'qatar',
    maleLength: 77.4,
    femaleLength: 80.0
  },
  {
    name: 'russia',
    maleLength: 64.7,
    femaleLength: 76.3
  },
  {
    name: 'singapore',
    maleLength: 80.0,
    femaleLength: 86.1
  },
  {
    name: 'slovenia',
    maleLength: 77.9,
    femaleLength: 83.7
  },
  {
    name: 'south korea',
    maleLength: 78.8,
    femaleLength: 85.5
  },
  {
    name: 'spain',
    maleLength: 80.1,
    femaleLength: 85.5
  },
  {
    name: 'sweden',
    maleLength: 80.7,
    femaleLength: 84.0
  },
  {
    name: 'switzerland',
    maleLength: 81.3,
    femaleLength: 85.3
  },
  {
    name: 'turkey',
    maleLength: 72.6,
    femaleLength: 78.9
  },
  {
    name: 'uk',
    maleLength: 79.4,
    femaleLength: 83
  },
  {
    name: 'usa',
    maleLength: 76.9,
    femaleLength: 81.6
  },
];

class App extends Component {
  state = {
    value: '',
    country: '',
    sex: '',
    birthDate: '',
    birthTime: 0,
    deathTime: 0,
    deathYear: 0,
    deathMonth: 0,
    deathDate: 0,
    deathDay: 0,
    deathHours: 0,
    deathMinutes: 0,
    lifeLength: 0,
    percentLived: 0,
    percentLeft: 0,
    dateLeft: '',
    remainigTime: 0,
    livedTime: 0,
    isClicked: false
  }

  handleDateChange = e => {
    const value = e.target.value;
    this.setState({
      birthDate: value,
      birthTime: new Date(value).getTime()
    });

  }

  handleCountryChange = e => {
    this.setState({
      country: e.target.value
    });
  }

  handleSexChange = e => {
    this.setState({
      sex: e.target.value
    });
  }

  handleSubmit = e => {
    e.preventDefault();
    const country = countries.find(country => country.name === this.state.country);
    const birthTime = this.state.birthTime;
    let currentTime = new Date().getTime();
    let lifeLength = 0;
    if (this.state.sex === 'male') {
      lifeLength = country.maleLength * 31557600000;
    }
    else if (this.state.sex === 'female') {
      lifeLength = country.femaleLength * 31557600000;
    }
    const deathTimeObject = birthTime + lifeLength;
    const deathTime = new Date(deathTimeObject);
    const deathYear = deathTime.getFullYear();
    const deathMonth = deathTime.getMonth();
    const deathDate = deathTime.getDate();
    const deathDay = deathTime.getDay();
    const deathHours = deathTime.getHours();
    const deathMinutes = deathTime.getMinutes();
    let percentLived = ((currentTime - birthTime) * 100) / (deathTime - birthTime);
    let percentLeft = 100 - percentLived;
    const remainingTime = deathTime - new Date().getTime();
    const livedTime = lifeLength - remainingTime;

    this.setState({
      lifeLength,
      deathTime,
      deathYear,
      deathMonth,
      deathDate,
      deathDay,
      deathHours,
      deathMinutes,
      percentLived,
      percentLeft,
      remainingTime,
      livedTime,
      isClicked: true
    });

    let intervalId = null;
    clearInterval(intervalId);
    intervalId = setInterval(() => {
      percentLived = ((currentTime - birthTime) * 100) / (deathTime - birthTime);
      percentLeft = 100 - percentLived;
      currentTime += 1000;
      this.setState({
        remainingTime: this.state.remainingTime - 1000,
        livedTime: this.state.remainingTime + 1000,
        percentLived,
        percentLeft
      });
    }, 200);
  }

  handleRefresh = () => {
    window.location.reload(false);
  }

  render() {
    return (
      <div className="mainWrap">
        <Header />
        <Form
          value={this.state.value}
          changeCountry={this.handleCountryChange}
          changeDate={this.handleDateChange}
          changeSex={this.handleSexChange}
          submit={this.handleSubmit}
          refresh={this.handleRefresh}
          isClicked={this.state.isClicked}
        />
        <Panel data={this.state} />
        <Footer />
      </div>
    );
  }
}

export default App;