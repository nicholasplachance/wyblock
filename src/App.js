import BadAssPerson from "./Profile.component";
import React from "react";
import ReactDOM from "react-dom";

const App = () => {
  return (
    <div>
      <BadAssPerson
        imageUrl='./wyblock.jpg'
        name='Wy Block'
        description="Meet WyBlock, a man of few words but endless action. He's the type of person who walks into a room and commands attention without even trying. With a chiseled jawline, piercing blue eyes, and a physique that would put Greek gods to shame, he's the epitome of cool and bad-assery.

        Block was born with a natural talent for combat and strategy. Growing up, he spent his time training in martial arts, shooting, and parkour. He's a force to be reckoned with in the ring and on the battlefield, and his reputation precedes him.
        
        As a former Navy SEAL, Block has seen his fair share of action. He's been deployed to some of the most dangerous war zones in the world and has come out on top every time. He's a master of hand-to-hand combat, firearms, and explosives, and he's never afraid to take on a challenge.
        
        But Block's not just a one-dimensional tough guy. He's also a man of deep compassion and empathy. When he's not on a mission, he volunteers his time to help the less fortunate and gives back to his community in any way he can.
        
        In his free time, Block enjoys adrenaline-fueled activities like rock climbing, skydiving, and surfing. He's also an avid reader and loves to learn about history and philosophy.
        
        WyBlock is a man who exudes confidence and power, yet remains grounded and humble. He's the kind of person you want on your team in a fight, but also someone you can turn to for advice and guidance. He's a true bad-ass, but also a true friend."
      />
    </div>
  );
};

export default App;
