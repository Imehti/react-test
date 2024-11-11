import {useState} from 'react'

import Header from './components/Header/Header';
import { CORE_CONCEPTS } from './data';
import CoreConsept from './components/CoreConsept';
import TabButten from './components/TabButten';
import { EXAMPLES } from './data';

function App() {

const [selectedTopic , setSelectedTopic] = useState('');


function handleSelect(selectButton){
  setSelectedTopic(selectButton);
}

// console.log('App click');

console.log(selectedTopic);

let tabContent = <p> Please select a topic. </p> ;
   
    if(selectedTopic){
      tabContent = (
        <div id='tab-content'>
              <h3> { EXAMPLES[selectedTopic]?.title } </h3>
              <p> { EXAMPLES[selectedTopic]?.description } </p>
              <pre>
                <code>
                   { EXAMPLES[selectedTopic]?.code }
                </code>
              </pre>
            </div>
      )
    }

  return (
    <div>
      <Header />
      <main>
        <section id='core-concepts'>
          <h2>Core Consept</h2>
          <ul>
            {CORE_CONCEPTS.map( (conceptItem) => <CoreConsept key={conceptItem.title} {...conceptItem} /> )}
          </ul>
        </section> 
        <section id='examples'>
          <h2>Examples</h2>
          <menu>
             <TabButten  isSelected={selectedTopic === 'components'} 
             onSelect={ () => {handleSelect('components')} } >Components</TabButten>

             <TabButten  isSelected={selectedTopic === 'JSX'}
              onSelect={ () => {handleSelect('jsx')} } >JSX</TabButten>

             <TabButten  isSelected={selectedTopic === 'Props'}
              onSelect={ () => {handleSelect('props')} } >Props</TabButten>

             <TabButten  isSelected={selectedTopic === 'State'}
              onSelect={ () => {handleSelect('state')} } >State</TabButten>
          </menu>
          
            {tabContent}

        </section>
      </main> 
    </div>
  );
}

export default App;
