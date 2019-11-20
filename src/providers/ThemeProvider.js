import React, { useState, } from 'react';

import zombie from '../images/zombieCowBoy.png'
import trippinTheSun from '../images/trippinTheSun.png'
import forestOfGnomes from '../images/theForestOfGnomes.png'
import squarePlant from '../images/squarePlant.png'
import abstract from '../images/abstract.png'
import spiritOfMaw from '../images/theSpiritOfMaw.png'
import steamPunkCity from '../images/steamPunkCity.png'
import psychicDuck from '../images/psychicDuck.png'
import mysteryTrimendom from '../images/mysterytrimendom.png'
const ThemeContext = React.createContext()


const ThemeProvider = (props) => {
  const initState = [
    {
      title: 'Zombie Cowboy',
      img: zombie,
      description: 'crazy af',
      price: 3000,
      type: 'fine art',
      _id: '1',
      },
      {
        title: 'Tripping in the sun',
        img: trippinTheSun,
        description: 'a trippy ass picture',
        price: 10000,
        type: 'fine art',
        _id: '2',
        },
         {
            title: 'forest for gnomes',
            img: forestOfGnomes,
            description: 'a serious picture of a gnome habitat',
            price: 2500,
            type: 'Fine Art',
            _id: '3',
            },
            {
              title: 'Square Plants',
              img: squarePlant,
              description: 'plants with the best angles',
              price: 3400,
              type: 'fine art',
              _id: '4',
              },
              {
                title: 'abstractions of the third kind',
                img: abstract,
                description: 'proof that aliens are real',
                price: 6000,
                type: 'fineArt',
                _id: '5',
                },
                {
                  title: 'the spirit of maw',
                  img: spiritOfMaw,
                  description: 'a crazy awesome painting',
                  price: 15000,
                  type: 'Fine Art',
                  _id: '6',
                  },
                  {
                    title: 'The Steam Punk City',
                    img: steamPunkCity,
                    description: 'psychidelic steampunk city',
                    price: 4000,
                    type: 'Fine Art',
                    _id: '7',
                    },
                    {
                      title: 'psychic duck',
                      img: psychicDuck,
                      description: "there's alot going on here.",
                      price: 2500,
                      type: 'Fine Art',
                      _id: '8',
                      },
                      {
                        title: 'mystery tremenduim ',
                        img: mysteryTrimendom,
                        description: 'The mystery of reality is a reality to experience not a problem to solve.',
                        price: 9999,
                        type: 'Fine Art',
                        _id: '9',
                        },


      ]
  // {
  //   title: '',
  //   img: '',
  //   description: '',
  //   price: '',
  //   type: '',
  //   _id: '',
  //   },
  const [artInfo, setArtInfo] = useState(initState)
  const [theme, setTheme] = useState("light")
  const [homePageArt, setHomePageArt] = useState([initState[0]])
  const [fade, setFade] = useState(false)


  const addToHomePage = async (theArtPiece) => {
    await setHomePageArt( prev => ([theArtPiece]))
    setFade(prev => (!prev))
  }

  const removeFromHomePage = (theArtPiece) => {
    const takeAway = homePageArt.filter(art => art !== theArtPiece)
    setHomePageArt(takeAway)
  }

  return (
    <ThemeContext.Provider value={{
      theme,
      artInfo,
      homePageArt,
      fade,
      addToHomePage: addToHomePage,
      removeFromHomePage: removeFromHomePage,
    }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export const withTheme = C => props => (
  <ThemeContext.Consumer>
    {value => <C {...value} {...props} />}
  </ThemeContext.Consumer>
)

export default ThemeProvider;