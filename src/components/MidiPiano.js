import React from 'react'
import { Piano, MidiNumbers } from 'react-piano';
import 'react-piano/dist/styles.css';

import DimensionsProvider from './DimensionsProvider';
import SoundfontProvider from './SoundfontProvider';
import './styles.css';

// webkitAudioContext fallback needed to support Safari
const audioContext = new (window.AudioContext || window.webkitAudioContext)();
const soundfontHostname = 'https://d1pzp51pvbm36p.cloudfront.net';

const noteRange = {
  first: MidiNumbers.fromNote('c3'),
  last: MidiNumbers.fromNote('f5'),
};
/*
const keyboardShortcuts = KeyboardShortcuts.create({
  firstNote: noteRange.first,
  lastNote: noteRange.last,
  keyboardConfig: KeyboardShortcuts.HOME_ROW,
});
*/

const MidiPiano = () => {
/*
    const firstNote = MidiNumbers.fromNote('c3');
    const lastNote = MidiNumbers.fromNote('f5');
    const keyboardShortcuts = KeyboardShortcuts.create({
        firstNote: firstNote,
        lastNote: lastNote,
        keyboardConfig: KeyboardShortcuts.HOME_ROW,
    });
*/
    return ( 
        /*
        <div>
            <Piano
                noteRange={{ first: firstNote, last: lastNote }}
                playNote={(midiNumber) => {
                    console.log(midiNumber.MidiNumbers)
                    //import('./moduleA')
                    //.then(({ moduleA }) => {
                        // Use moduleA
                    //})
                    //.catch(err => {
                        // Handle failure
                    //});
                    
                    // Play a given note - see notes below
                    //synth.play(midiNumber)
                }}
                stopNote={(midiNumber) => {
                    // Stop playing a given note - see notes below
                }}
                width={1000}
                keyboardShortcuts={keyboardShortcuts}
            />
            */
            <div className="mt-5">
                <p>Piano with custom styling - see styles.css</p>
                <ResponsivePiano className="PianoDarkTheme" />
            </div>
        //</div>
     );
}
 
function ResponsivePiano(props) {
    return (
      <DimensionsProvider>
        {({ containerWidth, containerHeight }) => (
          <SoundfontProvider
            instrumentName="acoustic_grand_piano"
            audioContext={audioContext}
            hostname={soundfontHostname}
            render={({ isLoading, playNote, stopNote }) => (
              <Piano
                noteRange={noteRange}
                width={containerWidth}
                playNote={playNote}
                stopNote={stopNote}
                disabled={isLoading}
                activeNotes={[44,45,51]}
                {...props}
              />
            )}
          />
        )}
      </DimensionsProvider>
    );
  }
  
export default MidiPiano;