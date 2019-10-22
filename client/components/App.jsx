/* eslint-disable jsx-a11y/media-has-caption */
import React from 'react';
import metaHelpers from '../metaHelpers';
import playerHelpers from '../playerHelpers';
import Play from './playerButtons/Play';
import Pause from './playerButtons/Pause';
import Button from './playerButtons/Button';
import Volume from './playerButtons/Volume';
import Player from './animatedPlayer/Player';
import InfoBar from './SongInfo/InfoBar';
import styles from '../cssModules/app.css';
// import '../../public/style.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      songs: [],
      upNext: [],
      previousPlays: [],
      songFile: null,
      timestamp: 0,
      repeat: '',
      volume: .7
    };
    this.back = playerHelpers.back.bind(this);
    this.togglePlay = playerHelpers.togglePlay.bind(this);
    this.tick = metaHelpers.tick.bind(this);
    this.next = playerHelpers.next.bind(this);
    this.shuffle = metaHelpers.shuffle.bind(this);
    this.repeat = metaHelpers.repeat.bind(this);
    this.scrub = playerHelpers.scrub.bind(this);
    this.like = metaHelpers.like.bind(this);
  }

  componentDidMount() { metaHelpers.mount.call(this); }

  render() {
    const { songs, upNext, songFile, timestamp, repeat } = this.state;
    // className={styles.test}
    return (
      <footer className={styles.footer}> 
        <div className={styles.container}>
          <Button className="back" clickHandler={this.back} />
          {songFile && songFile.paused ? (
            <Play playSong={() => this.togglePlay(songFile)} />
          ) : (
            <Pause pauseSong={() => this.togglePlay(songFile)} />
          )}
          <Button className="next" clickHandler={this.next} />
          <Button className="shuffle" clickHandler={() => alert('Clicked shuffle!')} />
          <Button className={`repeat${repeat}`} clickHandler={this.repeat} />
          <div className="player">
            {songFile
              && <Player length={upNext[0].length} timestamp={timestamp} scrub={this.scrub} />}
          </div>
          {songFile && <Volume songFile={songFile} />}
          <div className="infoBar">
            {upNext[0]
              && <InfoBar playerSong={upNext[0]} like={this.like} />}
          </div>
        </div>
      </footer>
    );
  }
}
export default App;
