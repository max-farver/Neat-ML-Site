import React from 'react';

export const Descriptions = () => (
  <div className='descriptions-wrapper'>
    <div className='descriptions'>
      <h2>Machine Learning, with a Twist</h2>
      <p>
        NEAT, or NeuroEvolution of Augmenting Topologies, is a type of machine
        learning that isn't talked about all that often. The basic idea is that
        you start with a basic neural network and create a lot of instances of
        it. After testing each instance, you select the top few as "survivors"
        and use them to determine how the next set starts out. This continues
        until you think it performs well enough or it seems to have stagnated.
      </p>
      <h3>Introduce Neat-Python</h3>
      <p>
        Neat-Python is a package developed specifically to help train models
        using the NEAT mentality. Most of the configuration for the model is
        done within a singular config text file. This package is commonly used
        with PyGame as a teaching/exploration tool due to the familiarity and
        ease of use that PyGame brings to the table.
      </p>
      <h2>Our Implementation</h2>
      <p>
        Our version of this model involved us making a new game to be learned,
        as we didn't want to copy anyone or have any tutorials to follow. In
        doing so we really got to dig into both frameworks and play around with
        parameters to find what really worked best for OUR game, not what
        someone else did for theirs.
      </p>
    </div>
  </div>
);
